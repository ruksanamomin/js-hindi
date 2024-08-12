//discussion on objects

const myObject = {
    js: 'javascript',
    cpp: 'C++',
    rb: "ruby",
    swift: "swift by apple"
}

//for of worked on maps but not objects.To overcome this we have for in loop
//FOR IN LOOP

for(const key in myObject){
    //console.log(myObject(key));//error saying myObject is not a function
    //console.log(myObject[key]); //gives the values of the object
    //
    //console.log(`${key} shortcut is for ${myObject[key]}`);
    /*
   js shortcut is for javascript
cpp shortcut is for C++
rb shortcut is for ruby
swift shortcut is for swift by apple
    */
    }

    ////////For IN loop on array

    const programming = ["js", "rb", "py", "java", "cpp"]
    for (const key in programming) {
        //console.log(programming[key]);//gives all the elements of the array
        
    }

    //FOR IN ON Map
    const map = new Map()
map.set('IN', "India")
map.set('USA', "United States of America")
map.set('Fr', "France")
map.set('IN', "India")
//console.log(map);

for(const key in map){
    console.log(key); //This iteration is not possible coz Map is not Iterable 
    
}