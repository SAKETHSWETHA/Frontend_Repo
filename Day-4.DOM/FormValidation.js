const button=document.getElementById("jsvalidate");

button.addEventListener("click",()=>
{

    var firstname=document.getElementById("firstname").value;
    var lastname=document.getElementById("lastname").value;
    var dob=document.getElementById("Dob").value.substring(6,7);
    var age=document.getElementById("Age").value;
    var email = document.getElementById("Email").value;
    var linkedin = document.getElementById("LinkedInProfile").value;
    var countryCode = document.getElementById("Phonenumber").value.substring(0,3);
    var regex = /^[A-Za-z0-9-\,\-\.\~ ]+$/;
    var jobtitle = document.getElementById("Jobtitle").value;
    var photo = document.getElementById("passportphoto").value;
    var Aadhar = document.getElementById("aadhar").value;
    if(firstname.length<3 || firstname.length>15)
    {
    alert("Number of characters allowed for first name should be between 3 and 15");
    }
    if(lastname.length<3 || lastname.length>15)
    {
    alert("Number of characters allowed for first name should be between 3 and 15");
    }
    if(dob != 2)
    {
    alert("Your date of birth should after 2000");
    }
    if(age<18||age>20)
    {
    alert("Age of the person should be in between 18 and 20");
    }
    if( !(email.includes("@vit") || email.includes("@gmail")))
    {
    alert("Email-id should be VIT email-id");
    }
   
    if(countryCode != "+91")
    {
    alert("Only indian phone numbers are accepted");
    }
   
    if( !(linkedin.includes("linkedin.com") || linkedin.includes("in. linkedin.com")))
    {
    alert("Sorry! We could not find your linkedin profile");
    }
   
   
    if ( !jobtitle.match(regex) )
    {
    alert("Please enter a valid character");
    }
    if (photo.substring(photo.length-4) != ".jpg" && photo.substring(photo.length-4) != ".png" )
    {
    alert("Recent passport photo file must be ends with either “.jpg” or “.png” file extension.");
    }
    if (Aadhar.substring(Aadhar.length-4) != ".pdf" && Aadhar.substring(Aadhar.length-4) != ".doc" &&
   Aadhar.substring(Aadhar.length-5) != ".docx")
    {
    alert("Aadhar card file must ends with either “.pdf” or “.doc” or “.docx” file extension.");
    }
   
    alert("validation done :");
   
   
   

});