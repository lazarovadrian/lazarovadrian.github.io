window.addEventListener("DOMContentLoaded", () => {

        getResurce("https://lazarovadrian.github.io/js/projects.json")
            .then(data => projects(data))
            .catch(err => console.error(err))

        async function getResurce(url){
            const res = await fetch(url,{
                method: 'POST',
                headers:{'Content-Type': 'application/json'}
            });
    
            if(!res.ok){throw new Error(`not fetch ${url}, status ${res.status}`);}
            return await res.json();
        }

        function projects(res){
            res.forEach(i => {
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
        }    
});