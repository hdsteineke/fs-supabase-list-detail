export function renderPlanets(somePlanet) {
    const planetEl = document.createElement('div');
    const a = document.createElement('a');
    const nameEl = document.createElement('h3');
    const imgEl = document.createElement('img');


    planetEl.classList.add('planet');

    nameEl.textContent = somePlanet.planet;
    imgEl.src = somePlanet.image;
    a.href = `./detail/?id=${somePlanet.id}`;
    console.log(`hello world`);
    

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
    colorEl.textContent = somePlanet.color;
    revolutionEl.textContent = somePlanet.revolution;
    traitsEl.textContent = somePlanet.traits;

    planetEl.append(nameEl, imgEl, colorEl, revolutionEl, traitsEl);

    return planetEl;
}