export class SlideUm {
    constructor(slideId, wrapperId) {
        this.slide = document.getElementById(slideId);
        this.wrapper = document.getElementById(wrapperId);
        

        this.dist = { finalPosition: 0, startX: 0, movement: 0 };
        this.activeClass = 'active';
        this.changeEvent = new Event('changeEvent');
        
    }

    transition(active){
        this.slide.style.transition = active ? 'transform .3s' : '';

    }



    moveSlide(distX) {
        this.dist.movePosition = distX;
        this.slide.style.transform = `translate3d(${distX}px, 0, 0)`;
    }

    updatePosition(clientX) {
        this.dist.movement = (this.dist.startX - clientX) * 1.6;
        return this.dist.finalPosition - this.dist.movement;
    }

    onStart(event) {
        let moveType;

        if (event.type === 'mousedown') {
            event.preventDefault();
            this.dist.startX = event.clientX;
            moveType = 'mousemove';
        } else {
            this.dist.startX = event.changedTouches[0].clientX;
            moveType = 'touchmove';
        }

        this.wrapper.addEventListener(moveType, this.onMove);
        this.transition(false);
    }

    onMove(event) {
        const pointerPosition = (event.type === 'mousemove') ? event.clientX : event.changedTouches[0].clientX;
        const finalPosition = this.updatePosition(pointerPosition);
        this.moveSlide(finalPosition);
    }

    onEnd(event) {
        const moveType = (event.type === 'mouseup') ? 'mousemove' : 'touchmove';
        this.wrapper.removeEventListener(moveType, this.onMove);
        this.dist.finalPosition = this.dist.movePosition;
        this.transition(true);
        this.changeSlideOnEnd();
        
    }

    changeSlideOnEnd() {
        if (this.dist.movement > 120 && this.index.next !== undefined) {
            this.activeNextSlide();
        } else if (this.dist.movement < -120 && this.index.prev !== undefined) {
            this.activePrevSlide();
        } else {
            this.changeSlide(this.index.active);
        }
    }

    addSlideEvents() {
        this.wrapper.addEventListener('mousedown', this.onStart);
        this.wrapper.addEventListener('touchstart', this.onStart);
        this.wrapper.addEventListener('mouseup', this.onEnd);
        this.wrapper.addEventListener('touchend', this.onEnd);
    }

   
    // Slides config

    slidePosition(slide) {
        const margin = (this.wrapper.offsetWidth - slide.offsetWidth) / 2;
        return -(slide.offsetLeft - margin);
    }

    slideConfig() {
        this.slideArray = [...this.slide.children].map((element) => {
            const position = this.slidePosition(element);
            return { position, element };
        });
        this.slideIndexNav(0);
    }

    slideIndexNav(index) {
        const last = this.slideArray.length - 1;
        this.index = {
            prev: index > 0 ? index - 1 : undefined,
            active: index,
            next: index < last ? index + 1 : undefined,
        };
    }

    changeSlide(index) {
        const activeSlide = this.slideArray[index];
        this.moveSlide(activeSlide.position);
        this.slideIndexNav(index);
        this.dist.finalPosition = activeSlide.position;
        this.wrapper.dispatchEvent(this.changeEvent);
        this.changeActiveClass();
    }



    changeActiveClass(){
        this.slideArray.forEach((item) => item.element.classList.remove(this.activeClass));
        this.slideArray[this.index.active].element.classList.add(this.activeClass);
    }

    activePrevSlide() {
        if (this.index.prev !== undefined) {
            this.changeSlide(this.index.prev);
        }

    }

    activeNextSlide() {
        if (this.index.next !== undefined) {
            this.changeSlide(this.index.next);
        }
    }

    onResize(){
        this.slideConfig();
        this.changeSlide(this.index.active);
       
    }

    addResizeEvent(){

        window.addEventListener('resize', this.onResize)


    }

    bindEvents() {
        this.onStart = this.onStart.bind(this);
        this.onMove = this.onMove.bind(this);
        this.onEnd = this.onEnd.bind(this);

        this.activePrevSlide = this.activePrevSlide.bind(this);
        this.activeNextSlide = this.activeNextSlide.bind(this);

        this.onResize = this.onResize.bind(this);
    }


    init() {
        this.bindEvents();
        this.transition(true);
        this.addSlideEvents();
        this.slideConfig();
        this.addResizeEvent();
        
        this.createControl() // new paginação
        this.changeSlide(0);
        return this;
    }
}



export class SlideNav extends SlideUm{

    addArrow(prev,next){
        this.prevElement = document.querySelector(prev);
        this.nextElement = document.querySelector(next);
        this.addArrowEvent();
    }



    addArrowEvent(){
        this.prevElement.addEventListener('click', this.activePrevSlide);
        this.nextElement.addEventListener('click', this.activeNextSlide);
    }






    // new  paginação ----------------------------------------

    createControl() {
        const control = document.querySelector('.nav-slide-list');
        control.innerHTML = ''; // Limpa a lista existente

        this.slideArray.forEach((item, index) => {
            const li = document.createElement('li');
            li.addEventListener('click', () => this.changeSlide(index));
            control.appendChild(li);
        });

        this.controlItems = [...control.children]; // Guarda os itens do controle para manipulação
        this.updateControlActiveClass(); // Atualiza a classe ativa inicialmente
       
    }

    updateControlActiveClass() {
        this.controlItems.forEach((item, index) => {
            item.classList.toggle('active', index === this.index.active);
        });
    }

    changeSlide(index) {
        super.changeSlide(index);
        this.updateControlActiveClass(); // Atualiza a classe ativa ao mudar o slide
    }



}