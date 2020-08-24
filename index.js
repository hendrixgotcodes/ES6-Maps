//Instantiiating a map object
let newMap = new Map();

//Adding keyvalue pairs
newMap.set(0,"First Index");
newMap.set(1,"Second Index");
newMap.set(2,"Third Index");

//Iterating through the map with a for..of loop
for(let [key,value] of newMap){
    console.log(`Key: ${key}  Value: ${value}`)
}