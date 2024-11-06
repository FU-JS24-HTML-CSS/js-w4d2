// setItem sätter in ett nytt key-value pair i localstorage
localStorage.setItem("name", "jesper")

// removeItem tar bort nyckeln med tillhörande värde i localstorage
localStorage.removeItem("name")

// getItem hämtar ett värde baserat på nyckel som du matar in till localstorage
localStorage.getItem("person")

// clear tar bort alla key-value pairs i localstorage
localStorage.clear()

// hämtar key-value pair efter inmatat index i funktionen
localStorage.key()


// vårt objekt vi vill spara i localstorage
const taco = {
    name: "taco",
    hunger: 45,
    energy: 88,
    happiness: 100
}

// Gör om data till en string som går att spara i localstorage
//JSON.stringify()

// Gör om en string i localstorage tillbaka till sin ursprungliga form
//JSON.parse()


localStorage.setItem("tacoData",  JSON.stringify(taco))

console.log(JSON.parse(localStorage.getItem("tacoData")))