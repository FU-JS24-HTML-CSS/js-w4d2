// skapa ett nytt map-objekt
const myMap = new Map()

// skapa ett nytt key-value pair i vår map
myMap.set('one', 1)
myMap.set('two', 2)
myMap.set('three', 3)
myMap.set('four', 4)

myMap.set('one', 1111)

// ta bort ett key-value pair i vår map
myMap.delete()

// mata in en nyckel för att hämta värdet från vår map
myMap.get()

// hämta alla värden och nycklar
myMap.entries()

// listar alla nycklar som finns i vår map
myMap.keys()

// listar alla värden som finns i vår map
myMap.values()

// kollar om en nyckel finns i vår map
myMap.has()


console.log(myMap.entries())
console.log(myMap.keys())
console.log(myMap.values())


taco = {
    name: 'taco',
    hunger: 0,
    maxHunger: 100,
    energy: 100,
    maxEnergy: 100,
    happiness: 100,
    maxHappines: 100
}

console.log(taco)

for(let key in taco) {
    console.log(key)
}

const tacoAsAMap = new Map()
tacoAsAMap.set('name', 'taco')
tacoAsAMap.set('hunger', 0)
tacoAsAMap.set('maxHunger', 100)
tacoAsAMap.set('energy', 100)
tacoAsAMap.set('maxEnergy', 100)
tacoAsAMap.set('happiness', 55)
tacoAsAMap.set('maxHappiness', 100)
tacoAsAMap.set('lastSave', Date.now())


console.log(tacoAsAMap.entries())


    tacoAsAMap.delete('lastSave')

console.log(tacoAsAMap.entries())



console.log('----------')

console.log(tacoAsAMap.get('happiness'))
console.log(tacoAsAMap.has('hungary'))