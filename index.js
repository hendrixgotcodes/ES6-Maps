let newMap = new Map();

newMap.set(0,"First Index");
newMap.set(1,"Second Index");
newMap.set(2,"Third Index");

for(let [key,value] of newMap){
    console.log(`${key} ${value}`)
}