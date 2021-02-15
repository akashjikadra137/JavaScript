nameSearch();

function nameSearch(){
    var numOfElements = Number(prompt("Enter number of objects:",3));
    var objArray = [];
    for(let i=0;i<numOfElements;i++)
    {
        var inputStr = prompt("Enter your fullname:","John Cena");
        var fname = inputStr.slice(0, inputStr.indexOf(" "));
        var lname = inputStr.slice(inputStr.indexOf(" ") + 1);
        var obj = {};
        obj.firstName = fname.toUpperCase();
        obj.lastName = lname.toUpperCase();
        objArray[i] = obj;
    }
    console.log("Array of objects");
    console.log(objArray);

    // searching name
    var searchResult = [];
    var searchStr = prompt("Enter something to search");
    var j=0;

    objArray.forEach(function(item){
        if(item.firstName.indexOf(searchStr.toUpperCase()) != -1){
            searchResult[j++]= {...item};
        }
    });
    console.log("Search result of " + searchStr);
    console.log(searchResult);
}