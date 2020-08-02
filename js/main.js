let dataProjects = [
    {
      "id":"1",
      "title":"Турфирма Анастасия",
      "desc":"",
      "img":"https://lazarovadrian.github.io/img/js_primer.jpg",
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
      "img":"https://lazarovadrian.github.io/img/flamena.png",
      "link":"http://www.flamena-a.ru/"
    }
];

dataProjects.forEach(i => {
    let project = document.createElement('div');
        project.classList.add('item_project');
        project.innerHTML = `   
            <img src="${i.img}" alt="${i.title}" class="img"> 
            <div class="project-body">                            
                <a href="${i.link}" aria-label="${i.title}" target="_blank" class="title">${i.title}</a>
                <p class="desc">${i.desc}</p>
            </div>
        `;
    document.querySelector('.list_projects').appendChild(project);
});