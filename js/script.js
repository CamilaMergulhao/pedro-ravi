import {SlideUm, SlideNav} from "./slide.js";
import slideReviews from "./slideReviews.js";
import calendarAccordion from './calendarAccordion.js';
import trainingAccordion from "./trainingAccordion.js";
import recordsWeek from "./recordsWeek.js";
import progressOk from "./progressOk.js";
import registrerProgress from "./registrerProgress.js";

const slide = new SlideNav('place-box', 'place-wrapper');

registrerProgress();
progressOk();
recordsWeek();
calendarAccordion();
trainingAccordion();

slide.init();
slide.addArrow('.prev', '.next');
slideReviews();


