//Call Back functions

//Checking against a set of values by using callback
var res = [2,4,6,8,10].every(isEven)
console.log(res);


//Implementing call back and arrow functions at same time

//Without return statement
var res = [2,4,6,8,10].every((a) => a%2===0);
console.log(res);

//With return statement
var res = [2,4,6,8,10].every((a) => {
    return a%2===0
});
console.log(res);

