var minRange = Number(prompt("Enter minimum range", 1));
var maxRange = Number(prompt("Enter maximum range", 10));

var rangeArray = [];
var successiveSumArray = [];
//var temp = minRange;
var sum = 0;

function normalArray(a, b){
    if(a==b+1)
    {
        return rangeArray;
    }
    else
    {
        rangeArray[rangeArray.length]=a++;
        return normalArray(a,b);
    }

}
// for (let i=0;i<(maxRange-minRange+1);i++){
//     rangeArray[i]=temp++;
// }
console.log("Normal array: ");
console.log(normalArray(minRange, maxRange));

console.log("Successive Sum of elements of array:");
if(minRange < maxRange){
    console.log(successiveSum(minRange,maxRange));
}
else{
    console.log(successiveSum(maxRange,minRange));
}

function successiveSum(a,b){
    if(a == b)
    {
        sum+=a;
        successiveSumArray[successiveSumArray.length] = sum;
        return successiveSumArray;
    }
    else if(a < b)
    {
        sum+=a++;
        successiveSumArray[successiveSumArray.length] = sum;
        return (successiveSum(a,b));

        // for (let i=0;i<maxRange-minRange+1;i++){
        //     successiveSumArray[i] = rangeArray[i] + sum;
        //     sum += rangeArray[i];
        // }
        // console.log(successiveSumArray);
    }
}