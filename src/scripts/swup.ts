import Swup from 'swup';
import { initRoleLinkElement as initRoleLinkElements } from './links_helper';
import initNavbar from './navbar';

const swup = new Swup({ cache: false });

const pageHandle = () => {
    initRoleLinkElements(swup);
    initNavbar();
}

swup.hooks.on('content:replace', pageHandle);
swup.hooks.on('enable', pageHandle); //Needed for initial load (links won't work without this)

initRoleLinkElements(swup);

