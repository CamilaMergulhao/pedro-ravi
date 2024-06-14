import {SlideUm, SlideNav} from "./slide.js";
import slideReviews from "./slideReviews.js";
import calendarAccordion from './calendarAccordion.js';
import trainingAccordion from "./trainingAccordion.js";
import recordsWeek from "./recordsWeek.js";
import progressOk from "./progressOk.js";

const slide = new SlideNav('place-box', 'place-wrapper');

progressOk();
recordsWeek();
calendarAccordion();
trainingAccordion();

slide.init();
slide.addArrow('.prev', '.next');
slideReviews();


