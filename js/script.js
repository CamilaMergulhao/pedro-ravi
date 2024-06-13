import {SlideUm, SlideNav} from "./slide.js";
import slideReviews from "./slideReviews.js";
import calendarAccordion from './calendarAccordion.js';
import trainingAccordion from "./trainingAccordion.js";
import recordsWeek from "./recordsWeek.js";

const slide = new SlideNav('place-box', 'place-wrapper');

recordsWeek();
calendarAccordion();
trainingAccordion();

slide.init();
slide.addArrow('.prev', '.next');
slideReviews();


