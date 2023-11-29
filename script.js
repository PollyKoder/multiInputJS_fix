const newUser = document.querySelector("#textUsername");
const newEmail = document.querySelector("#textEmail");
const newPass = document.querySelector("#textPassword");

// newUser = [];
// newEmail = [];
// newPass = [];

const submitButton = document.querySelector("#submitButton");
const pUser = document.querySelector("#pUser1");
const pEmail = document.querySelector("#pEmail2");
const pPass = document.querySelector("#pPass3");

function submit() {
    pUser.innerHTML = `Your registered username is: ${newUser.value}`;
    pEmail.innerHTML = `Your registered email is: ${newEmail.value}`;
    pPass.innerHTML = `Your registered password is: ${newPass.value}`;
}

function output() {
    pUser;
    pEmail;
    pPass;
}

submitButton.onclick = output;