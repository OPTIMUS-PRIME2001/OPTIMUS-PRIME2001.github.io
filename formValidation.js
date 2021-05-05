const form = document.getElementById('form');
const username = document.getElementById('username');
const email = document.getElementById('email');
const phone = document.getElementById('phone');
const password = document.getElementById('password');
const cpassword = document.getElementById('cpassword');

//add Event
form.addEventListener('submit', (event) =>{
    event.preventDefault();
    validate();
})
const sendData = (SuccessRate,count) =>{
    if(SuccessRate === count){
      alert('Registration Successfull');
      swal("Good job!", "Registration Successfull!", "success");
    }
}

//final data validation
const successMsg = () => {
    let formCon = document.getElementsByClassName('Form-Control');
    var count = formCon.length-1;
    for(var i=0; i< formCon.length; i++){
       if(formCon[i].className === "Form-Control success"){
           var SuccessRate = 0 + i;
           console.log(SuccessRate);
           sendData(SuccessRate,count);
       }
       else{
           return false;
       }
    }
}

//more validate to email
const isEmail = (emailVal) =>{
    var atSymbol = emailVal.indexOf('@');
    if(atSymbol<1) return false;
    var dot= emailVal.lastIndexOf('.');
    if(dot <= atSymbol + 3) return false;
    if(dot === emailVal.length-1) return false;
    return true;
}
//define the validate()
const validate = () =>{ 
    const usernameVal = username.value.trim();
    const emailVal = email.value.trim();
    const phoneVal = phone.value.trim();
    const passwordVal = password.value.trim();
    const cpasswordVal = cpassword.value.trim();

    //validate username
    if(usernameVal === ""){
        setErrorMsg(username, 'Username cannot be blank');
    }
    else if(usernameVal.length <= 2){
        setErrorMsg(username, 'Username should be of min 3 characters');
    }
    else{
        setSuccessMsg(username);
    }

    //validate email ID
    if(emailVal === ""){
        setErrorMsg(email, 'Email ID cannot be blank');
    }
    else if(!isEmail(emailVal)){
        setErrorMsg(email, 'Not a Valid Email');
    }
    else{
        setSuccessMsg(email);
    }

    //validate Phone Number
    if(phoneVal === ""){
        setErrorMsg(phone, 'Phone Number cannot be blank');
    }
    else if(phoneVal.length != 10){
        setErrorMsg(phone, 'Not a Valid Phone No');
    }
    else{
        setSuccessMsg(phone);
    }

    //validate password
    if(passwordVal === ""){
        setErrorMsg(password, 'Password cannot be blank');
    }
    else if(passwordVal<=5){
        setErrorMsg(password, 'Password Must be Minimum 6 character strong');
    }
    else{
        setSuccessMsg(password);
    }

     //validate confirm Password
     if(cpasswordVal === ""){
        setErrorMsg(cpassword, 'Please Confirm Your Password');
    }
    else if(passwordVal != cpasswordVal){
        setErrorMsg(cpassword, 'Password Mismatch');
    }
    else{
        setSuccessMsg(cpassword);
    }

    //call plugins
    successMsg();
} 
function setErrorMsg(input, errormsgs){
    const formControl = input.parentElement;
    const small = formControl.querySelector('small');
    formControl.className = "Form-Control error";
    small.innerText = errormsgs;
}
function setSuccessMsg(input){
    const formControl = input.parentElement;
    formControl.className = "Form-Control success";
}    