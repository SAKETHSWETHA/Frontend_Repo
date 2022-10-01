
//Mobile phone object and method

var Mobilespecifications={
    Name:"Samsung",
    Ram: "4GB",
    Storage: "64",
    Camera: "64MP",
    Processor: "SnapDragon",



spec:function(){
console.log("My phone is ",this.Name," Ram is ",this.Ram,"and storage is ", this.Storage," . It uses ",this.Processor+" Processor");

},

remaining:function(storageused){
    return Mobilespecifications.Storage-storageused;
}



};
Mobilespecifications.spec();
console.log("Storage left is",Mobilespecifications.remaining("30"),"GB");


