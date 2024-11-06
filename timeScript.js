Date.now()

// sätter tidpunkten när programmet startar
let firstTime = Date.now()
let secondTime = 0

console.log(firstTime)

setTimeout(() => {
    // sätter tidpunkten efter 5 sekunder
    secondTime = Date.now()

    //när vi har både första och andra tiden
    console.log(secondTime - firstTime)
}, 5000)