const myArray = ['dog', 'cat', 'elephant', 'zebra', 'koala']

myArray.forEach((animal) => {
    console.log(animal)

    if(animal === 'cat') {
        console.log("its a cat!")
    }
})

myArray.forEach(animal => {

})

for(let animal of myArray) {

}

console.log(myArray.includes('cow'))


const tacosBag = ['rock', 'stick', 'apple']

const possibleLootInForest = ['rock', 'stick', 'apple', 'carrot', 'mushroom']

// vad har vi i väskan
console.log(tacosBag)

possibleLootInForest.forEach(item => {
    if(!tacosBag.includes(item)) {
        //vi vill plocka upp det vi inte har i väskan
        tacosBag.push(item)
    }

})

// har vi fått något nytt i skogen?
console.log(tacosBag)


// första siffran är vart vi vill börja ta bort, inlkuderat med positionen som siffran säger
// andra siffran är vart vi vill sluta ta bort, exkluderat med positionen som siffran säger
tacosBag.splice(0, 2)

console.log(tacosBag)

// pop tar bort sista elemntet i listan
tacosBag.pop()

// shift tar bort första elementet i listan
tacosBag.shift()

//splice tar bort valfritt antal element från valfri position i listan
tacosBag.splice()