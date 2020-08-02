let dataProjects = [
    {
      "id":"1",
      "title":"Турфирма Анастасия",
      "desc":"",
      "img":"//lazarovadrian.github.io/img/anastasiyasochi.jpg",
      "link":"//anastasiyasochi.ru/"
    },
    {
      "id":"2",
      "title":"Свадебный салон Кокетка",
      "desc":"",
      "img":"//lazarovadrian.github.io/img/koketka.png",
      "link":"//koketkadress.ru/"
    },
    {
      "id":"3",
      "title":"EKazakova Wedding Photographer",
      "desc":"",
      "img":"//lazarovadrian.github.io/img/ekazakova.png",
      "link":"//ekazakova.ru/"
    },
    {
      "id":"4",
      "title":"Аренда машин под такси",
      "desc":"",
      "img":"//lazarovadrian.github.io/img/arendataxi.png",
      "link":"//arendav.taxi/"
    },
    {
      "id":"5",
      "title":"Фламена",
      "desc":"",
      "img":"//lazarovadrian.github.io/img/flamena.jpg",
      "link":"//www.flamena-a.ru/"
    },
    {
      "id":"6",
      "title":"Сергей Терешкин",
      "desc":"",
      "img":"//lazarovadrian.github.io/img/sergSite.png",
      "link":"#"
    }
];

dataProjects.forEach(i => {
    let listProjects = document.querySelector('.list_projects');
    let project = document.createElement('div');
        project.classList.add('item_project');
        project.innerHTML = `   
            <a href="${i.link}" aria-label="${i.title}" target="_blank">
              <span><img src="${i.img}" alt="${i.title}" class="img"></span>
              <div class="project-body">                            
                  <p class="title">${i.title}</p>
                  <p class="desc">${i.desc}</p>
              </div>
            </a>
        `;
   listProjects.appendChild(project);
});