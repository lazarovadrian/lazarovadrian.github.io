let dataProjects = [
    {
      "id":"1",
      "title":"Турфирма Анастасия",
      "desc":"",
      "img":"https://lazarovadrian.github.io/img/anastasiyasochi.jpg",
      "link":"https://anastasiyasochi.ru/"
    },
    {
      "id":"2",
      "title":"Свадебный салон Кокетка",
      "desc":"",
      "img":"https://lazarovadrian.github.io/img/koketka.png",
      "link":"https://koketkadress.ru/"
    },
    {
      "id":"3",
      "title":"EKazakova Wedding Photographer",
      "desc":"",
      "img":"https://lazarovadrian.github.io/img/ekazakova.png",
      "link":"https://ekazakova.ru/"
    },
    {
      "id":"4",
      "title":"Аренда машин под такси",
      "desc":"",
      "img":"https://lazarovadrian.github.io/img/arendataxi.png",
      "link":"http://arendav.taxi/"
    },
    {
      "id":"5",
      "title":"Фламена",
      "desc":"",
      "img":"https://lazarovadrian.github.io/img/flamena.jpg",
      "link":"http://www.flamena-a.ru/"
    },
    {
      "id":"6",
      "title":"Сергей Терешкин",
      "desc":"",
      "img":"https://lazarovadrian.github.io/img/sergSite.png",
      "link":"#"
    }
];

dataProjects.forEach(i => {
    let listProjects = document.querySelector('.list_projects');
    let project = document.createElement('div');
        project.classList.add('item_project');
        project.innerHTML = `   
            <a href="${i.link}" aria-label="${i.title}" target="_blank">
              <img src="${i.img}" alt="${i.title}" class="img"> 
              <div class="project-body">                            
                  <p class="title">${i.title}</p>
                  <p class="desc">${i.desc}</p>
              </div>
            </a>
        `;
   listProjects.appendChild(project);
});