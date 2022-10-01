
//Shopping order eligibility for free shipping

function freeshipping(items){
    var sum=0;
 for (let x of items.values()) {
    sum+=x;
 }
 if(sum>50){
    return true;
 }
 else{
    return false;
 }

}

const items = new Map([
    ["Monopoly",11.99], ["Secret Hitler",35.99], ["Bananagrams",13.99]
  ]);
console.log(freeshipping(items));