import {SlideUm, SlideNav} from "./slide.js";
import slideReviews from "./slideReviews.js";
import calendarAccordion from './calendarAccordion.js';
import trainingAccordion from "./trainingAccordion.js";
import recordsWeek from "./recordsWeek.js";
import progressOk from "./progressOk.js";
import registrerProgress from "./registrerProgress.js";
import slideVideoClasses from "./slideVideo.js";



slideVideoClasses();
slideReviews();
registrerProgress();
progressOk();
recordsWeek();
calendarAccordion();
trainingAccordion();



const slide = new SlideNav('place-box', 'place-wrapper');
slide.init();
slide.addArrow('.prev', '.next');








