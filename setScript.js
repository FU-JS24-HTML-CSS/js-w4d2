const mySet = new Set()

// lägger till ett nytt värde till set
mySet.add(1)
mySet.add(1)
mySet.add(2)
mySet.add(3)

mySet.add("hello")
mySet.add("hellop")

mySet.add({name: 'taco'})
mySet.add({name: 'taco'})


// tar bort ett värde från vår set
mySet.delete()

// tömmer vårt set från alla värden
//mySet.clear()

console.log(mySet)


