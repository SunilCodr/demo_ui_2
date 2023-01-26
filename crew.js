const astronauts = document.getElementById("astronauts-navigation");
const crewImgElement = document.getElementById('crew-img');
const crewBioElement = document.getElementById("crew-bio");
const crewRoleElement = document.getElementById("crew-role");
const crewNameElement = document.getElementById("crew-name");

astronauts.addEventListener('click',(e)=> {
    let currentAstronaut = e.target;

   //FOR CHANGE OF NAVIGATION ACTIVE COLOR
    let classList = currentAstronaut.classList;
    for(let currentClass of classList) {
        if(currentClass == 'astronaut') {
           for(let astronaut of astronauts.children) {
            if(astronaut.classList == 'astronaut astronaut-active') {
                astronaut.classList.remove('astronaut-active');
            }
           }
           currentAstronaut.classList.add('astronaut-active');
        const arr = astronauts.children;
        const indexOfCrew = Array.from(arr).indexOf(currentAstronaut);
        fetch('data.json')
        .then(response => response.json())
        .then(data => {
            console.log(data)
            const crewImage = data.crew[indexOfCrew].images.webp;
            const crewBio = data.crew[indexOfCrew].bio;
            const crewRole = data.crew[indexOfCrew].role.toUpperCase();
            const crewName = data.crew[indexOfCrew].name.toUpperCase();
           crewImgElement.src = crewImage;
           crewBioElement.innerHTML = crewBio;
           crewRoleElement.innerHTML = crewRole;
           crewNameElement.innerHTML = crewName;
        })

       
        
        }
    }

});



