// import functions and grab DOM elements
import { renderPlanets } from './render-utils.js';
import { getPlanets } from './fetch-utils.js';
// let state

// set event listeners 
  // get user input
  // use user input to update state 
  // update DOM to reflect the new state

const planetContainerEl = document.querySelector('.planet-container');

window.addEventListener('load', async () => {

    const planets = await getPlanets();
    
    for (let planet of planets) {
        const planetEl = renderPlanets(planet);
    
        planetContainerEl.append(planetEl);
    }
    
});




