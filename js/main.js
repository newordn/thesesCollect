import {getData,request} from "./ajaxRequestHelper.js"; // exporting ajax helper
import {name,email} from "./formVerificationHelper.js";
// constraints
let nameErrorMsg = "Le nom doit contenir au moins 2 caractères.";
let emailErrorMsg = "Doit être une adresse email valide";
let numberErrorMsg = "Ex: +237693063228";
let regionErrorMsg = "Doit contenir au moins 3 caractères";
let universityErrorMsg = "Doit contenir au moins 3 caractères";
let facultyErrorMsg = "Doit contenir au moins 3 caractères";
let passwordErrorMsg = "Doit contenir au moins 6 caractères";
let repassErrorMsg = "Doit correspondre au mot de passe entré";
// constraints

// form validation
    //name
let nameInput = $("#name");
let nameError = $("#nameError");
nameInput.blur(()=>{
    if(!name(nameInput.val()))
 nameError.text(nameErrorMsg);
 else
    nameError.text("");
});
    //email 
let emailInput = $("#email");
let emailError = $("#emailError");
emailInput.blur(() => {
    if (!email(emailInput.val()))
        emailError.text(emailErrorMsg);
    else
        emailError.text("");
});
$("#number").blur(() => {
    $("#numberError").text(numberErrorMsg);
});
$("#region").blur(() => {
    $("#regionError").text(regionErrorMsg);
});
$("#university").blur(() => {
    $("#universityError").text(universityErrorMsg);
});
$("#faculty").blur(() => {
    $("#facultyError").text(facultyErrorMsg);
});
$("#password").blur(() => {
    $("#passwordError").text(passwordErrorMsg);
});

$("#repass").blur(() => {
    $("#repassError").text(repassErrorMsg);
});

// request to the server to save an user
let form = document.getElementById("register-form"); 
$("#submit").click(
    ()=>
    {
        request("http://192.168.8.103:8080/user/create","post",getData(form))
    }
)


