
//Array of +ve numbers
function posarray(array){
    var arraypos=[];
    for(let i=0;i<array.length;i++){
        if(array[i]>0)
        arraypos[i]=array[i]+" ";
        }
return arraypos;

}
var array=[1,2,3,-1,-2,-3];
console.log(posarray(array));
