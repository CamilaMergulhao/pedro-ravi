import {SlideUm, SlideNav} from "./slide.js";
import slideReviews from "./slideReviews.js";
import calendarAccordion from './calendarAccordion.js';

const slide = new SlideNav('place-box', 'place-wrapper');


calendarAccordion();
slide.init();

slide.addArrow('.prev', '.next');
slideReviews();


