// sign in
function signIn() {
    const signInUsername = document.getElementById('username');
    const signInPassword = document.getElementById('password');
    // Perform validation
    if(signInUsername.value === "") {
        alert("please enter username");
        return false;
    }

    if(signInPassword.value === "") {
        alert("please enter Password");
        return false;
    }

    //Process sign-in logic here// ...
    
    //Redirect to home page or perform other actions
    window.location.href = "index.html";
}

// Sign-Up
function signUp(u) {
    //Get user input
    const username =document.getElementById("new-username").value;
    const password = document.getElementById("new-password").value;
    const confirmPassword = document.getElementById("confirm-password").value;

    //Perform validation
    if(username === ""|| password ===""|| confirmPassword ==="") {
        alert("Please fill in all fields");
        return
    }

    if(password !== confirmPassword)
{
    alert("Passwords do not match");
    return
}

// Process sign-up logic here// ...

window.location.href = "index.html";

}

function forgottenPassword(f) {

}
