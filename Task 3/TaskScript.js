var inputString = prompt("Enter a atring","Hi, I am Akash");
console.log(`Your String: ${inputString}`);
formatString(inputString);

function formatString(str){

    // total words
    var totalWords = str.split(" ");
    console.log(`Total number of words are: ${totalWords.length}`);

    // total words without white space
    var spacelessWords = [...totalWords].filter(function(item){
        return(item != "")
    })
    console.log(`Total number of words without space: ${spacelessWords.length}`);

    // total characters with space
    var totalChar = [];
    for (i=0;i<str.length;i++)
    {
        totalChar[i] = str[i]; 
    }
    console.log(`Total number of characters: ${totalChar.length}`);

    // total white spaces 
    var totalWhiteSpaces = [];
    var i=0;
    totalChar.forEach(function(item){
        if(item == " "){
            totalWhiteSpaces[i] = item;
            i++;
        }
    })
    console.log(`Total white spaces: ${totalWhiteSpaces.length}`);
    
    // total characters without space
    console.log(`Total number of characters without spaces: ${totalChar.length - totalWhiteSpaces.length}`);
}
