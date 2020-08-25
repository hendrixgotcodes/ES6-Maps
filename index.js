//Instantiiating a map object
let newMap = new Map();

//Adding keyvalue pairs
newMap.set(0, "First Index");
newMap.set(1, "Second Index");
newMap.set(2, "Third Index");

//Iterating through the map with a for..of loop
for (let [key, value] of newMap) {
    console.log(`Key: ${key}  Value: ${value}`)
}

//Iterating with a foreach loop
console.log("With forEach");
newMap.forEach(function (value, key) {
    console.log(`Key: ${key}  Value: ${value}`)
})

//Converting a Map into an Array
const array = Array.from(newMap);
console.log(array);

//Converting Map Keys to array
const arrayKeys = Array.from(newMap.keys())
console.log("------------------------------------------")
console.log(arrayKeys)

//Converting Map Values to array
const arrayValues = Array.from(newMap.values())
console.log("------------------------------------------")
console.log(arrayValues)


//Cloning Maps
const cloneOfNewMap = new Map(newMap);
console.log(cloneOfNewMap)

let first = new Map([
    [1, 'one'],
    [2, 'two'],
    [3, 'three'],
]);

let second = new Map([
    [1, 'baako'],
    [2, 'mienu'],
]);

const merged = new Map([...first, ...second]);
console.log(merged);