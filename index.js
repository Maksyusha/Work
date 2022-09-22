import {headerSelectors, accordionSelectors} from './components/constants.js';
import Accordion from './components/Accordion.js';
import Header from './components/Header.js'



const header = new Header(headerSelectors);

header.enableHeader();

const accordion = new Accordion(accordionSelectors);

accordion.enableAccordion();
