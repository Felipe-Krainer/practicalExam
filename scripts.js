allGames = [
    {
        gameName: "Minecraft",
        price: 100,
        software: "PC"
    },
    {
        gameName: "Fortnite",
        price: 200,
        software: "Xbox, PC, PS5"
    },
    {
        gameName: "Gta V",
        price: 300,
        software: "PC, PS5"
    },
    {
        gameName: "Red Dead Redemption 2",
        price: 250,
        software: "Xbox, PC, PS5"
    },
    {
        gameName: "Cyberpunk 2077",
        price: 400,
        software: "PC, Xbox, PlayStation 5"
    }

];

let gameList = document.querySelector("#gamesList");

function displayGames(game) {

    game.forEach(function(game){
        gameList.innerHTML += `<li> ${game.gameName} </li>`
    })    


};


displayGames(allGames);

function addGame() {
    let name = prompt("Game name ?")
    let cost = prompt("Game price ?")
    let software = prompt("Game software?")

    allGames.push({
        gameName: name,
        price: parseFloat(cost),
        software: software
    });
    gameList.innerHTML = "";
    displayGames(allGames);

};

function detailsGame() {
    let gameName = prompt("Game name?")
    const game = allGames.find(game => game.gameName === gameName);

    let gameDetails = document.querySelector("#gameDetails");

    if (game) {
        gameDetails.innerHTML = `
            <p>Game Details</p>
            <p>Name: ${game.gameName}</p>
            <p>Price: $${game.price}</p>
            <p>Available on: ${game.software}</p>
        `;
    } else {
        gameDetails.innerHTML = `<p>Game not found.</p>`;
    }
}


function removeGame(){
    let gameName = prompt("Enter the name of the game to remove:");
    const gameIndex = allGames.findIndex(game => game.gameName === gameName);

    let gameList = document.querySelector("#gamesList");

    if (gameIndex !== -1) {
        allGames.splice(gameIndex, 1);

        gameList.innerHTML = "";

        displayGames(allGames);

        document.querySelector("#gameDetails").innerHTML = `<p>Game '${gameName}' was removed successfully.</p>`;
    } else {
        document.querySelector("#gameDetails").innerHTML = `<p>Game not found.</p>`;
    }
};

function updateGame(){
    let gameName = prompt("Enter the name of the game to update:");
    const game = allGames.find(game => game.gameName === gameName);
    
    let gameDetails = document.querySelector("#gameDetails");
    if (game) {
        let updateChoice = prompt("What would you like to update? ('name', 'price', or'software')");

        if (updateChoice === 'name') {
            let newName = prompt("Enter the new game name:");
            game.gameName = newName;
        } else if (updateChoice === 'price') {
            let newPrice = prompt("Enter the new price:");
            game.price = parseFloat(newPrice);
        } else if (updateChoice === 'software') {
            let newSoftware = prompt("Enter the new software:");
            game.software = newSoftware;
        } else {
            alert("Invalid update choice. ('name', 'price', or 'software')");
            return;
        }
    
        gameDetails.innerHTML = `
            <p>Updated Game Details</p>
            <p>Name: ${game.gameName}</p>
            <p>Price: $${game.price}</p>
            <p>Available on: ${game.software}</p>`;

        gameList.innerHTML = "";
        displayGames(allGames);

        } else {
            gameDetails.innerHTML = `<p>Game not found.</p>`;
        }
    };


function userInput(){
    let userInput = prompt("Enter your choice: ");
    if (userInput === "C"){
        addGame();
    }
    else if (userInput === "R") {
        detailsGame();
    }
    else if (userInput === "U") {
        updateGame();
    }
    else if (userInput === "D") {
        removeGame();
    }
    else {
        alert("Please enter a valid choice: ")
    }
};
