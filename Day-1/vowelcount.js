
//No of vowels using for of loop(similar to for of)

function vowels(str){
    var count_of_vowels=0;
    var vowels=['a','e','i','o','u'];
    for (let char of str.toLowerCase()){
        if(vowels.includes(char))
        count_of_vowels++;
    }
     return count_of_vowels;
    }
    var str="visakhApatnam";
    console.log(vowels(str));