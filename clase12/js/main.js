var urlApi = 'https://rickandmortyapi.com/api/character';

fetch(urlApi)
    .then(response => response.json())
    .then(data => {

        console.log(data);
        var index = 0
        for (index in data.results) {
            var container = document.getElementsByTagName('main')[0];
            //console.log(typeof data, 'llo');
            var element = document.createElement('div');
            
            element.innerHTML = `
            <div class="cards">
            <img src="${data.results[index].image}">
            <div class="letter-cards">
            <h2> ID: ${data.results[index].id} </h2>
            <h2>${data.results[index].name} </h2>
            <h3> ${data.results[index].species} </h3>
            <div>
            </div>
            `;
    
            container.appendChild(element);
        }
    })

    const music = new Audio('assets/rick.mp3');
    music.play();