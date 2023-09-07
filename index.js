class Planets {

    static async getPlanets() {
        const daata = await fetch(`https://planets-api.vercel.app/api/v1/planets/`)
            .then()
            .catch();
        return daata.json();
    }


    static async getPlanet(planetName) {
        const daata = await fetch(`https://planets-api.vercel.app/api/v1/planets/${planetName}`)
            .then()
            .catch();
        return daata.json();
    }

    static changePlanet(event) {
        Planets.getPlanet(event)
            .then(e => {
                var content = document.getElementById("content");
                content.innerHTML = `
    <img class="mainImg" src="${e.images.planet}" alt="">
  <div class="textAndOptions">
          <div class="textAndSource">
            <h1 class="planetName">${e.name}</h1>
            <p class="textContent">${e.overview.content}</p>
            <div style="display: flex;">
              <p class="source">Source :</p><a class="source"
                href="https://en.wikipedia.org/wiki/Earth">Wikipedia</a>
            </div>
          </div>
          <div class="options">
            <div class="headInfo">
              <div class="option" style="--color: #545BFE;">
                <p class="number">01</p>
                <h1>Overview</h1>
                <div class="rectangle"></div>
              </div>
              <div class="option" style="--color: #545BFE;">
                <p class="number">02</p>
                <h1><span>Internal</span> Structure</h1>
                <div class="rectangle"></div>
              </div>
              <div class="option" style="--color: #545BFE;">
                <p class="number">03</p>
                <h1>Surface <span>Geology</span></h1>
                <div class="rectangle"></div>
              </div>
            </div>
          </div>
        </div>
        <div class="info">
          <div class="infoContainer">
            <p class="infoText">ROTATION TIME</p>
            <p class="infoNumber">${e.rotation}</p>
          </div>
          <div class="infoContainer">
            <p class="infoText">REVOLUTION TIME</p>
            <p class="infoNumber">${e.revolution}</p>
          </div>
          <div class="infoContainer">
            <p class="infoText">RADIUS</p>
            <p class="infoNumber">${e.radius}</p>
          </div>
          <div class="infoContainer">
            <p class="infoText">AVERAGE TEMP.</p>
            <p class="infoNumber">${e.temperature}</p>
          </div>
        </div>
  `;
            })
    }


    static getnavLink(txt) {
        var menuPlanets = document.createElement('div');
        const attr = document.createAttribute('class');
        attr.value = 'menuPlanets';

        var rectangleForPC = document.createElement('div');
        var rectangleForPCAttr = document.createAttribute('class');
        rectangleForPCAttr.value = 'rectangleForPC';


        menuPlanets.setAttributeNode(attr);
        rectangleForPC.setAttributeNode(rectangleForPCAttr);

        var elem = document.createElement('a');
        var text = document.createTextNode(txt);

        var headerElem = document.createElement('h3');

        headerElem.appendChild(text);
        elem.appendChild(headerElem);
        elem.style.cursor = "pointer";

        elem.onclick = () => { this.changePlanet(event.target.innerText) };
        menuPlanets.appendChild(rectangleForPC);
        menuPlanets.appendChild(elem);
        return menuPlanets;
    }

}



