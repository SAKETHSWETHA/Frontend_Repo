
var role= "master";
if(role=="master"){
    console.log("He can add,delete,create and update any files.");
}
else if(role=="admin"){
    console.log("He can view or create files.");
}
else{
    console.log("User can view or edit files.")
}

//Using switch case
/*
var role="master";
switch(role){
    case "master":
        console.log("He can add,delete,create and update any files.");
        break;
        case "admin":
            console.log("He can view or create files.");
            break;
            case "user":
                console.log("User can view or edit files.");
                break;
                default:
                    console.log("Cannot perform any operation");
}
*/