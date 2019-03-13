
const searchFor = document.querySelector(".search-container"); // create search field w/ magnifying glass icon
searchFor.innerHTML = `<form action="#" method-="get">
    <input type="search" id="search-input" class="search-input" placeholder="Search...">
    <input type="submit" value="&#x1F50D;" id+"search-submit" class="search-submit">
    </form>`;


fetch('https://randomuser.me/api/?results=12&nat=us') // get 12 random users of U.S. nationality found on MDN
    .then(function(response) {
        return response.json();
    })
    .then(function(myJson) {
        console.log(JSON.stringify(myJson));
        employeeCards(myJson);
        modalWindow(myJson);
    });

    
function employeeCards(myJson) { // display 12 employees in cards
    for (let i = 0; i< myJson.results.length; i++) { //loop thru 12 random users create card gallery
        const gallery = `<div class="card">
                        <div class="card-img-container">
                            <img class="card-img" src="${myJson.results[i].picture.large}" alt="profile picture">
                        </div>
                        <div class="card-info-container">
                        <h3 id="name" class="card-name cap">${myJson.results[i].name.first} ${myJson.results[i].name.last}</h3>
                        <p class="card-text">${myJson.results[i].email}</p>
                        <p class="card-text cap">${myJson.results[i].location.city}, ${myJson.results[i].location.state}</p>
                        </div>
                    </div>`;
            
        document.querySelector("#gallery").innerHTML += gallery;   
        } 
};


function modalWindow(myJson) { // modal window that opens when employee is clicked and closes window when click on X
    $(".card").on("click", function() { // when a card is clicked show appropriate info
        let cardIndex = $('.card').index(this); // gets the index of a specific card
        const modal = `<div class="modal-container"> 
                            <div class="modal">
                                <button type="button" id="modal-close-btn" class="modal-close-btn"><strong>X</strong></button>
                                <div class="modal-info-container">
                                    <img class="modal-img" src="${myJson.results[cardIndex].picture.large}" alt="profile picture">
                                    <h3 id="name" class="modal-name cap">${myJson.results[cardIndex].name.first} ${myJson.results[cardIndex].name.last}</h3> 
                                    <p class="modal-text">${myJson.results[cardIndex].email}</p>
                                    <p class="modal-text cap">${myJson.results[cardIndex].location.city}</p>
                                    <hr>
                                    <p class="modal-text">${myJson.results[cardIndex].cell}</p>
                                    <p class="modal-text cap">${myJson.results[cardIndex].location.street}, ${myJson.results[cardIndex].location.state}, ${myJson.results[cardIndex].nat} ${myJson.results[cardIndex].location.postcode}</p>
                                    <p class="modal-text">Birthday: ${myJson.results[cardIndex].dob.date.slice(0, 10)}</p>
                                </div>
                            </div> 
                       </div>`; 
        document.querySelector("body").innerHTML += modal; //append modal to body of page
    
        $('.modal-close-btn').click(function () {
            $('.modal-container').remove();
            $('.modal').remove();
        }) 
        modalWindow(myJson).reset; //reset to make
    });
}