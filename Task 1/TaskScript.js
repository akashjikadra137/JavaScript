var numOfObjects = Number(prompt("Enter number of objects", 3));

var objArray = [];
for (let i = 0; i < numOfObjects; i++) {
    var name1 = prompt(`Enter Name of Obj${i + 1}`);
    var age1 = Number(prompt(`Enter Age of ${name1}`));
    var city1 = prompt(`In which city does ${name1} live?`);
    objArray[i] = {};
    objArray[i].Name = {};
    objArray[i].Name.fname=name1.split(" ")[0];
    objArray[i].Name.lname=name1.slice(name1.indexOf(" ") + 1);
    objArray[i].Age = age1;
    objArray[i].City = city1;
}
console.log("Object Array");
console.log(objArray);
let upperCaseArray = [];

for (let i=0;i<numOfObjects;i++){
    upperCaseArray[i]={...objArray[i]};
    upperCaseArray[i].Name = {...objArray[i].Name};
}
upperCaseArray.forEach(function(item){
    item.Name.fname = item.Name.fname.toUpperCase();
    item.Name.lname = item.Name.lname.toUpperCase();
    item.City = item.City.toUpperCase();
});
    
console.log("UpperCase conversion");
console.log(upperCaseArray);
let sortedArray = [...upperCaseArray];
sortedArray.sort(function (a, b) {
    let lnameA = a.Name.lname;
    let lnameB = b.Name.lname;
    if (lnameA > lnameB) {
        return 1;
    } else if (lnameA < lnameB) {
        return -1;
    }
    return 0;
});

console.log("Array Sorted by age");
console.log(sortedArray);

var searchResult = [];
var j=0;
var searchName = prompt("Enter something to search");
sortedArray.forEach(function(item){
    if(item.Name.fname.indexOf(searchName.toUpperCase()) != -1){
        searchResult[j] = item;
        j++; 
    }
});
console.log(`Search result of "${searchName}":`);

if(+searchResult != +[]){
    console.log(searchResult);
}
else{
    console.log("No result found!!");
}



// var a1=[1,2,3];
// console.log(a1);
// var a2= a1.slice();
// a2[0]=5..toString();
// console.log(a2);
// var a3 = a1.slice();
// a3[0]=8;
// console.log(a3); 