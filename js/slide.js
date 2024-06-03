export default class SlideUm{
    constructor(slideId, wrapperId){
        this.slide = document.getElementById(slideId);
        this.wrapper = document.getElementById(wrapperId);
    }

    onStart(event){
        event.preventDefault()
        this.wrapper.addEventListener('mousemove', this.onMove)
       
    }

    onMove(event){
        
    }

    onEnd(event){
        this.wrapper.removeEventListener('mousemove', this.onMove);
    }

    addSlideEvents(){
        this.wrapper.addEventListener('mousedown', this.onStart);
        this.wrapper.addEventListener('mouseup', this.onEnd);
    }

    bindEvents(){
        this.onStart = this.onStart.bind(this);
        this.onMove = this.onMove.bind(this);
        this.onEnd = this.onEnd.bind(this);
    }


    init(){
    this.bindEvents();
    this.addSlideEvents();
    return this;
    }

}