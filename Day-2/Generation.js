function generation(num,gender){
    const male = new Map();
    const female = new Map();
    male.set(-3,"Great Grandfather");
    male.set(-2,"Grandfather");
    male.set(-1,"Father");
    male.set(0,"Me");
    male.set(1,"Son");
    male.set(2,"Grand Son");
    male.set(3,"Great GrandSon");


    female.set(-3,"Great Grandmother");
    female.set(-2,"Grandmother");
    female.set(-1,"Mother");
    female.set(0,"Me");
    female.set(1,"Daughter");
    
    female.set(2,"Grand Daughter");
    female.set(3,"Great GrandDaughter");

    if(gender=="f"){
        return female.get(num);
    }
    else{
        return male.get(num);
    }
   
}
console.log(generation(2,"f") );
console.log(generation(-3, "m"));
console.log(generation(1, "f"));

