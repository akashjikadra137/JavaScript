var numberOfElements = Number(prompt("Enter number of elements to add:", 5));
var minRange = Number(prompt("Enter minimum range:", 5));
var maxRange = Number(prompt("Enter maximum range:", 20));

var randomElements=[];
for (let i=0;i<numberOfElements;i++)
{
    randomElements[i] = Math.round(Math.random()*(maxRange-minRange) + minRange); 
}
console.log("Randomly generated array");
console.log(randomElements);

var sortedElements = function(randomArray){
    for(let i=0;i<numberOfElements;i++)
    {

        for(let j=i; j<numberOfElements; j++)
        {
            if(randomArray[i] > randomArray[j])
            {
                let temp = randomArray[i];
                randomArray [i]= randomArray[j];
                randomArray[j]= temp;
            }
            
        }
    }

        // for(let j=0; j<randomElements.length - 1; j++)
        // {
        //      if(randomArray[j]>randomArray[j+1])
        //     {
        //         let temp = randomArray[j];
        //         randomArray [j]= randomArray[j];
        //         randomArray[j]= temp;
        //         j=-1;
        //     }
        // }   
}

sortedElements(randomElements);
console.log("Sorted array");
console.log(randomElements);
var nthNumber = Number(prompt("Enter nth smallest number to display:", 1));
console.log(`${nthNumber} st/nd/rd/th smallest number is ${randomElements[nthNumber-1]}`);


