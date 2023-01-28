const technoNavigations = document.getElementById("techno-hero-navigation");
const technoHeadingElement = document.getElementById("hero-techno-heading");
const technoParaElement = document.getElementById("hero-techno-para");
const technoImageElement = document.getElementById("hero-techno-img")

document.addEventListener("DOMContentLoaded", ()=> {
    var x = window.matchMedia("(max-width: 61em)") 
    if(x.matches) {
        console.log("fetching")
        fetch('data.json')
        .then(response => response.json())
        .then(data => {
            console.log(data)
            const technoImg = data.technology[0].images.landscape;
            console.log(technoImg)
            technoImageElement.src = technoImg;
        }) 
    }
});
technoNavigations.addEventListener('click', (e)=> {
    const currentTechno = e.target;
    const currentTechnoClass = currentTechno.classList;
    for(currentClass of currentTechnoClass) {
        if(currentTechnoClass == 'techno-hero-navigation-btn') {
        for(let technoNavigation of technoNavigations.children) {
                if(technoNavigation.classList == 'techno-hero-navigation-btn active-techno') {
                    technoNavigation.classList.remove('active-techno')
                }
            }
            currentTechno.classList.add('active-techno');
            const arrOfTechno = technoNavigations.children;
            const indexOfTechno = Array.from(arrOfTechno).indexOf(currentTechno);

           var x = window.matchMedia("(max-width: 61em)")
           if(x.matches) {
            console.log("small scren")
            fetch('data.json')
            .then(response => response.json())
            .then(data => {
                const technoName = data.technology[indexOfTechno].name.toUpperCase();
                const technoPara = data.technology[indexOfTechno].description;
                const technoImg = data.technology[indexOfTechno].images.landscape;
                technoHeadingElement.innerHTML = technoName;
                technoParaElement.innerHTML = technoPara;
                technoImageElement.src = technoImg;
            })
           }
           else {
            fetch('data.json')
            .then(response => response.json())
            .then(data => {
                console.log(data)
                const technoName = data.technology[indexOfTechno].name.toUpperCase();
                const technoPara = data.technology[indexOfTechno].description;
                const technoImg = data.technology[indexOfTechno].images.portrait;
                technoHeadingElement.innerHTML = technoName;
                technoParaElement.innerHTML = technoPara;
                technoImageElement.src = technoImg;
            })
           }
        }
    }

})