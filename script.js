function submit() {
    let newUser = document.querySelector("#textUsername").value;
    let newEmail = document.querySelector("#textEmail").value;
    let newPass = document.querySelector("#textPassword").value;
    
    let outputP = document.querySelector("#p");
    outputP.textContent = newUser;
    // outputP.textContent = newEmail;
    // outputP.textContent = newPass;
}

let submitButton = document.querySelector("#submitButton");
submitButton.onclick = submit();