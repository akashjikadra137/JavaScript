var size = +prompt("Enter size of pattern:",6);
var a = [];
var str1 = "A";
var str2;
var str3="";
for (let i=0;i<size;i++){
    a[i] = [];
    for(let j=0;j<size+1;j++){
        if(j<=size-1-i){
            a[i][j] = str1;
        }
        else{
            a[i][j]=" ";
        }
        str1 = String.fromCodePoint(str1.charCodeAt(0) + 1); 
    }
    str1="A";    
}
str2 = a[0][size-2];
for (let i=0;i<size;i++){
    for(let j=size;j<2*size-1;j++){
        if(j>=size-1+i){
            a[i][j] = str2;
        }
        else{
            a[i][j]=" ";
        }
        str2 = String.fromCodePoint(str2.charCodeAt(0) - 1); 
    }
    str2=a[0][size-2];    
}

for (let i=0;i<size;i++){
    for(let j=0;j<2*size-1;j++){
        str3 += a[i][j];
    }
    str3 +="\n";
}
console.log(str3);
