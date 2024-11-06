const a = ['cat', 'dog', 'horse', 'bunny']

//a.splice(0, 1, 'elephant')

//console.log(a)


function customSplice(arr, a, b, replacement = null) {
    const temp = []

    if(replacement === null) {
        console.log("test")
        for(let i = 0 ; i < arr.length ; i++) {
            if(i <= a) {
                temp[arr[i]]
            }
            if(i > b) {
                temp[arr[i]]
            }
        }
    }
    
    return temp
}

console.log(customSplice(a, 1, 2))