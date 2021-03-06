export function renderPlanets(somePlanet) {
    const planetEl = document.createElement('div');
    const a = document.createElement('a');
    const nameEl = document.createElement('h3');
    const imgEl = document.createElement('img');


    planetEl.classList.add('planet');

    nameEl.textContent = somePlanet.planet;
    imgEl.src = somePlanet.image;
    a.href = `./planet-detail/?id=${somePlanet.id}`;
    

    planetEl.append(nameEl, imgEl);

    a.append(planetEl);

    return a;

}

export function renderPlanetDetail(somePlanet) {
    const planetEl = document.createElement('div');
    const nameEl = document.createElement('h3');
    const imgEl = document.createElement('img');

    const colorEl = document.createElement('p');
    const revolutionEl = document.createElement('p');
    const traitsEl = document.createElement('p');

    planetEl.classList.add('planet');

    nameEl.textContent = somePlanet.planet;
    imgEl.src = somePlanet.image;
    colorEl.textContent = 'Color: ' + somePlanet.color;
    revolutionEl.textContent = 'Revolution: ' + somePlanet.revolution + ' days';
    traitsEl.textContent = 'Traits: ' + somePlanet.traits;

    planetEl.append(nameEl, imgEl, colorEl, revolutionEl, traitsEl);

    return planetEl;
}