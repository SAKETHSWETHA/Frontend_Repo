
/*
Most programmers will tell you that one of the ways to improve your
performance  in competitive programming is to practice a lot of problems. 
Sam took the above advice very seriously and decided to set a target//for himself. He decides to solve at least 10 problems every week for 4 weeks.
 Given the number of problems he actually solved in each week over 4 weeks as P_1, P_2, P_3,P_4 output the number of weeks in which Sam met his target. Input Format: 
there is a single line of input, with 4 integers P_1, P_2, P_3,P_4. These are the number of problems solved by Sam in each of the 4 weeks. Output Format: Output a single integer in a single line - the number of weeks in which Sam solved at least 10 problems. 
// Sample 1: Input 12 15 8 10
*/
//Sam problem - Number of weeks he solved 10 problems

function sam_problems(array){
    var count=0;
    for(let i=0;i<array.length;i++){
        if(array[i]>=10){
            count++;
        }
    }
  return count;
}

array=[12,15,8,10]

console.log("Sam acheived his target for "+sam_problems(array)+" weeks.");

//sam problem using array filter 
/*

function count(arr)
{ 
    const reachedtarget = arr.filter(num=> num>=10) 
    return reachedtarget.length; 
} 
var arr=[12,15,8,10]; 
console.log(count(arr));
*/