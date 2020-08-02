let dataProjects = [
    {
      "title":"Турфирма Анастасия",
      "desc":"",
      "img":"//lazarovadrian.github.io/img/anastasiyasochi.jpg",
      "link":"//anastasiyasochi.ru/"
    },
    {
      "title":"Свадебный салон Кокетка",
      "desc":"",
      "img":"//lazarovadrian.github.io/img/koketka.png",
      "link":"//koketkadress.ru/"
    },
    {
      "title":"EKazakova Wedding Photographer",
      "desc":"",
      "img":"//lazarovadrian.github.io/img/ekazakova.png",
      "link":"//ekazakova.ru/"
    },
    {
      "title":"Гостевой дом Мацеста",
      "desc":"",
      "img":"//lazarovadrian.github.io/img/ghmatsesta.jpg",
      "link":"//ghmatsesta.com/"
    },
    {
      "title":"Аренда машин под такси",
      "desc":"",
      "img":"//lazarovadrian.github.io/img/arendataxi.png",
      "link":"//arendav.taxi/"
    },
    {
      "title":"Фламена",
      "desc":"",
      "img":"//lazarovadrian.github.io/img/flamena.jpg",
      "link":"//www.flamena-a.ru/"
    },
    {
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