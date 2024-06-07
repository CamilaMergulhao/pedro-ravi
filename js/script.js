import {SlideUm, SlideNav} from "./slide.js";
import slideReviews from "./slideReviews.js";


const slide = new SlideNav('place-box', 'place-wrapper');



slide.init();
slide.addArrow('.prev', '.next');
slideReviews();
