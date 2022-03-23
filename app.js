// import functions and grab DOM elements
import { renderPlanet } from './render-utils.js';
import { getPlanets } from './fetch-utils.js';
// let state

// set event listeners 
  // get user input
  // use user input to update state 
  // update DOM to reflect the new state

const planetContainerEl = document.querySelector('.planet-container');

window.addEventListener('load', async () => {
    fetchAndDisplayPlanets();

});

async function fetchAndDisplayPlanets() {

    const planets = await getPlanets();

    for (let planet of planets) {
        const planetEl = renderPlanet(planet);

        planetContainerEl.append(planetEl);
    }

}