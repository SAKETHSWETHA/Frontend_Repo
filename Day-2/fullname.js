//name
class Name{
    constructor(fname,lname){
        this.fname=fname;
        this.lname=lname;
    }
    getfname(){
        return this.fname;
    }
    getlname(){
       return this.lname;
   }
   getfullname(){
    return this.fname+" "+this.lname;
   }
   getinitials(){
    return this.fname[0]+"."+this.lname[0];
   }
}
let nam = new Name("John","Smith");
console.log(nam.getfname());
console.log(nam.getlname());
console.log(nam.getfullname());
console.log(nam.getinitials());
