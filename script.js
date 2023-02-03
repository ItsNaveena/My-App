let nameAlert = document.getElementById("NameAlert");
let passwordAlert = document.getElementById("PassAlert");
let submitAlert = document.getElementById("SubmitAlert");

function validateName() {
  let name = document.getElementById("Uname").value;

  if (name.length == 0) {
    nameAlert.innerHTML = "Name is required";
    return false;
  }

  if (name < 5) {
    nameAlert.innerHTML = "Write full Name";
    return false;
  } else {
    nameAlert.innerHTML = "";
    return true;
  }
}

function validatePassword() {
  let password = document.getElementById("pass").value;

  if (password.length == 0) {
    passwordAlert.innerHTML = "Enter your Password";
    return false;
  } else {
    passwordAlert.innerHTML = "";
    return true;
  }
}

function validateForm() {
  if (!validateName() || !validatePassword()) {
    submitAlert.innerHTML = "Please Enter all the details";
    return false;
  } else {
    submitAlert.innerHTML = "";
    return true;
  }
}

//code for register page

let firstnameAlert = document.getElementById("firstAlert");
let lastnameAlert = document.getElementById("lastAlert");
let emailAlert = document.getElementById("emailAlert");
let createpwdAlert = document.getElementById("creatpwdAlert");
let confirmpwdAlert = document.getElementById("confirmpwdAlert");

let regsubmitAlert = document.getElementById("regsubmitAlert");

function validatefirstName() {
  let fname = document.getElementById("firstName").value;

  if (fname.length == 0) {
    firstnameAlert.innerHTML = "First Name is required";
    return false;
  } else {
    firstnameAlert.innerHTML = "";
    return true;
  }
}

function validatelastName() {
  let lname = document.getElementById("lastName").value;

  if (lname.length == 0) {
    lastnameAlert.innerHTML = "Last Name is required";
    return false;
  } else {
    lastnameAlert.innerHTML = "";
    return true;
  }
}

function validateEmail() {
  let email = document.getElementById("email").value;

  if (email.length == 0) {
    emailAlert.innerHTML = "Email is required";
    return false;
  }

  if (!email.match(/[A-Za-z]+[0-9]*[@][a-z]*[\.][a-z]{2,4}/)) {
    emailAlert.innerHTML = "Email invalid";
    return false;
  } else {
    emailAlert.innerHTML = "";
    return true;
  }
}

function validateCreatePwd() {
  let createPwd = document.getElementById("CreatePwd").value;

  if (createPwd.length == 0) {
    createpwdAlert.innerHTML = "Enter your Password";
    return false;
  } else {
    createpwdAlert.innerHTML = "";
    return true;
  }
}

function validateConfirmPwd() {
  let confirmPwd = document.getElementById("ConfirmPwd").value;

  
  if (confirmPwd.length == 0) {
    confirmpwdAlert.innerHTML = "Enter your Password";
    return false;
  } 

  if (confirmPwd !== createPwd) {
    confirmpwdAlert.innerHTML = "Password does not match";
    return false;
  }

  else {
    confirmpwdAlert.innerHTML = "";
    return true;
  }
}

function validateRegForm() {
  if (
    !validatefirstName() ||
    !validatelastName() ||
    !validateEmail() ||
    !validateCreatePwd() ||
    !validateConfirmPwd()
  ) {
    regsubmitAlert.innerHTML = "Please Enter all the details";
    return false;
  } else {
    regsubmitAlert.innerHTML = "";
    return true;
  }
}
