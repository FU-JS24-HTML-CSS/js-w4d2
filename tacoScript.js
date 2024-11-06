let taco = {}

if(load()) {
    taco = JSON.parse(localStorage.getItem('tacoData'))
}
else {
    taco = {
        name: 'taco',
        hunger: 0,
        maxHunger: 100,
        energy: 100,
        maxEnergy: 100,
        happiness: 100,
        maxHappines: 100
    }
}


setInterval(() => {
    if(taco.hunger < taco.maxHunger) {
        taco.hunger++
    }

    if(taco.hunger >= 100) {
        console.log("taco died. here's another taco")
    
        taco = {
            name: 'taco',
            hunger: 0,
            maxHunger: 100,
            energy: 100,
            maxEnergy: 100,
            happiness: 100,
            maxHappines: 100
        }
    }

    save()
    console.log(taco)
}, 100)



function save() {
    console.log("saving data")
    localStorage.setItem('tacoData', JSON.stringify(taco))
}

function load() {
    console.log("loading data")
    return localStorage.getItem('tacoData')
}