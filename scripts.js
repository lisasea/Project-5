$.ajax({ //12 users from US
    url: "https://randomuser.me/api/?results=12&nat=us",
    dataType: "json",
    success: function (data) {
        console.log(data); //check to see data returned

    const form = `<form action="#" method="get"> 
                    <input type="search" id="search-input" class="search-input" placeholder="Search...">
                    <input type="submit" value="&#x1F50D;" id="search-submit" class="search-submit">
    </form>`;

    document.querySelector('.search-container').innerHTML = form; //append search box & submit button to page

    for (let i = 0; i< data.results.length; i++) { //loop thru 12 random users
        const gallery = `<div class="card">
                        <div class="card-img-container">
                            <img class="card-img" src="${data.results[i].picture.large}" alt="profile picture">
                        </div>
                        <div class="card-info-container">
                        <h3 id="name" class="card-name cap">${data.results[i].name.first} ${data.results[i].name.last}</h3>
                        <p class="card-text">${data.results[i].email}</p>
                        <p class="card-text cap">${data.results[i].location.city}, ${data.results[i].location.state}</p>
                        </div>
                    </div>`;
            
        document.querySelector("#gallery").innerHTML += gallery;  //append each gallery card to page
    }

    $(".card").on("click", function() { // when a card is clicked show appropriate info
        let cardIndex = $('.card').index(this); // gets the index of a specific card
        const modal = `<div class="modal-container"> 
                            <div class="modal">
                                <button type="button" id="modal-close-btn" class="modal-close-btn"><strong>X</strong></button>
                                <div class="modal-info-container">
                                    <img class="modal-img" src="${data.results[cardIndex].picture.large}" alt="profile picture">
                                    <h3 id="name" class="modal-name cap">${data.results[cardIndex].name.first} ${data.results[cardIndex].name.last}</h3> 
                                    <p class="modal-text">${data.results[cardIndex].email}</p>
                                    <p class="modal-text cap">${data.results[cardIndex].location.city}</p>
                                    <hr>
                                    <p class="modal-text">${data.results[cardIndex].cell}</p>
                                    <p class="modal-text cap">${data.results[cardIndex].location.street}, ${data.results[cardIndex].location.state}, ${data.results[cardIndex].nat} ${data.results[cardIndex].location.postcode}</p>
                                    <p class="modal-text">Birthday: ${data.results[cardIndex].dob.date.slice(0, 10)}</p>
                                </div>
                            </div> 
                       </div>`; //close line 31 <div class="modal-container">
        document.querySelector("body").innerHTML += modal; //append modal to body of page

        $('.modal-close-btn').click(function () {
            $('.modal-container').remove();
            $('.modal').remove();
        }) //close line 48 $('.modal-close-btn').click(function()

    }) // close line 29 $(".card").on("click", function()
        
    } //close success line 4
}) //close $.ajax

