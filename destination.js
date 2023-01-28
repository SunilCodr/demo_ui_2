

const destinations = document.querySelector("#destination-main-description-navigation")
const destinationsImage = document.querySelector("#destination-img");
const destinationHeading = document.querySelector("#destination-heading")
const destinationPara = document.querySelector("#destination-para");
const destinationDistance = document.querySelector("#destination-distance");
const destinationTime = document.querySelector("#destination-time");
const spinner = document.getElementById("spinner");

destinations.addEventListener('click', (e) => {
    e.preventDefault();

    let currentDestination = e.target;
    let classList = currentDestination.classList;
    for(currentClass of classList) {
        if(currentClass == 'nav') {
            e.preventDefault();
            for(let destination of destinations.children) {
             if(destination.classList == 'nav active-nav') {    
                 destination.classList.remove('active-nav');
             }
            }
         currentDestination.classList.add('active-nav');
         let arr = destinations.children;
         let indexOfdestination = Array.from(arr).indexOf(e.target);
         destinationsImage.style.display = 'none'
             spinner.style.display = 'block'
             fetch("data.json")
                 .then(response => response.json())
                 .then(data => {
                     spinner.style.display = 'none'
                     const destination_img = data.destinations[indexOfdestination].images.png;
                     const destination_heading = data.destinations[indexOfdestination].name;
                     const destination_para = data.destinations[indexOfdestination].description;
                     const destination_distance = data.destinations[indexOfdestination].distance;
                     const destination_time = data.destinations[indexOfdestination].travel;
                     setTimeout(()=> {
                    destinationPara.innerHTML = destination_para
                     destinationsImage.src = destination_img
                     destinationHeading.innerHTML = destination_heading.toUpperCase();
                     destinationDistance.innerHTML = destination_distance.toUpperCase();
                     destinationTime.innerHTML = destination_time.toUpperCase()
                     destinationsImage.style.display = 'block'
                     },400)
                     
                 })
         
 
         }
    }
        
    




    
 
});
