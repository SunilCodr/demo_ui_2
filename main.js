const toggleBtn = document.getElementById('toggle-btn');
const toggleBtnIcon = document.getElementById("toggle-btn-icon")
const navigations = document.getElementById('navigations')
toggleBtn.addEventListener('click', () => {
    const visibility = navigations.getAttribute("data-visible")
    if (visibility == 'false') {
        navigations.setAttribute('data-visible', "true");
        navigations.setAttribute('aria-expanded', "true");
        navigations.style.transform = "translateX(0%)";
        toggleBtnIcon.src = "./assets/shared/icon-close.svg"
    }
    else if (visibility === "true") {
        navigations.setAttribute('data-visible', "false");
        navigations.setAttribute('aria-expanded', "false");
        navigations.style.transform = "translateX(100%)";
        toggleBtnIcon.src = "./assets/shared/icon-hamburger.svg"
    }
});

const destinations = document.querySelector("#destination-main-description-navigation")
const destinationsImage = document.querySelector("#destination-img");
const destinationHeading = document.querySelector("#destination-heading")
const destinationPara = document.querySelector("#destination-para");
const destinationDistance = document.querySelector("#destination-distance");
const destinationTime = document.querySelector("#destination-time");
const spinner = document.getElementById("spinner");

destinations.addEventListener('click', (e) => {
    for (let destination of destinations.children) {
        if (destination.classList == 'active-nav') {
            destination.classList.remove('active-nav'); 
        }
    }
   
    if (e.target.id == "destination_1") {
        destinationsImage.style.display = 'none'
        spinner.style.display = 'block'
        e.preventDefault();
        let active_state = e.target;
        console.log(e.target)
        active_state.className = "active-nav";
        const num = 0;
        fetch("data.json")
            .then(response => response.json())
            .then(data => {
                spinner.style.display = 'none'
                const destination_img = data.destinations[num].images.png;
                const destination_heading = data.destinations[num].name;
                const destination_para = data.destinations[num].description;
                const destination_distance = data.destinations[num].distance;
                const destination_time = data.destinations[num].travel;
                destinationPara.innerHTML = destination_para
                destinationsImage.src = destination_img
                destinationHeading.innerHTML = destination_heading.toUpperCase();
                destinationDistance.innerHTML = destination_distance.toUpperCase();
                destinationTime.innerHTML = destination_time.toUpperCase()
                destinationsImage.style.display = 'block'
            })
    }
    else if(e.target.id == "destination_2") {
        destinationsImage.style.display = 'none'
        spinner.style.display = 'block'
        e.preventDefault();
        let active_state = e.target;
        console.log(e.target)
        active_state.className = "active-nav";
        const num = 1;
        fetch("data.json")
        .then(response => response.json())
        .then(data => {
            spinner.style.display = 'none'
            const destination_img = data.destinations[num].images.png;
            const destination_heading = data.destinations[num].name;
            const destination_para = data.destinations[num].description;
            const destination_distance = data.destinations[num].distance;
            const destination_time = data.destinations[num].travel;
            destinationPara.innerHTML = destination_para
            destinationsImage.src = destination_img
            destinationHeading.innerHTML = destination_heading.toUpperCase();
            destinationDistance.innerHTML = destination_distance.toUpperCase();
            destinationTime.innerHTML = destination_time.toUpperCase();
            destinationsImage.style.display = 'block'
        })
    }
    else if(e.target.id == "destination_3") {
        destinationsImage.style.display = 'none'
        spinner.style.display = 'block'
        e.preventDefault();
        let active_state = e.target;
        console.log(e.target)
        active_state.className = "active-nav";
        const num = 2;
        fetch("data.json")
        .then(response => response.json())
        .then(data => {
            spinner.style.display = 'none'
            const destination_img = data.destinations[num].images.png;
            const destination_heading = data.destinations[num].name;
            const destination_para = data.destinations[num].description;
            const destination_distance = data.destinations[num].distance;
            const destination_time = data.destinations[num].travel;
            destinationPara.innerHTML = destination_para
            destinationsImage.src = destination_img
            destinationHeading.innerHTML = destination_heading.toUpperCase();
            destinationDistance.innerHTML = destination_distance.toUpperCase();
            destinationTime.innerHTML = destination_time.toUpperCase();
            destinationsImage.style.display = 'block'
        })
    }
    else if (e.target.id == "destination_4") {
        destinationsImage.style.display = 'none'
        spinner.style.display = 'block'
        e.preventDefault();
        let active_state = e.target;
        console.log(e.target)
        active_state.className = "active-nav";
        const num = 3;
        fetch("data.json")
        .then(response => response.json())
        .then(data => {
            spinner.style.display = 'none'
            const destination_img = data.destinations[num].images.png;
            const destination_heading = data.destinations[num].name;
            const destination_para = data.destinations[num].description;
            const destination_distance = data.destinations[num].distance;
            const destination_time = data.destinations[num].travel;
            destinationPara.innerHTML = destination_para
            destinationsImage.src = destination_img
            destinationHeading.innerHTML = destination_heading.toUpperCase();
            destinationDistance.innerHTML = destination_distance.toUpperCase();
            destinationTime.innerHTML = destination_time.toUpperCase();
            destinationsImage.style.display = 'block'
        })
    }
 
});