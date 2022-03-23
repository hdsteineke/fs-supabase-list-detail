import { getPlanet } from '../fetch-utils.js';
import { renderPlanetDetail } from '../render-utils.js';

const planetDetailEl = document.querySelector('.planet-detail-container');

window.addEventListener('load', async () => {
    const data = new URLSearchParams(window.location.search);
    const id = data.get('id');

    const planet = await getPlanet(id);
    const planetEl = renderPlanetDetail(planet);

    planetDetailEl.append(planetEl);
});