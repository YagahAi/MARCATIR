// sign in
function signIn() {
    username = document.getElementById('username');
    // Perform validation
    if( us==="") {
        alert("please enter your username");
        return
    }

    //Process sign-in logic here// ...
    
    //Redirect to home page or perform other actions
    window.location.href = "home.html";
}

// Sign-Up
function signUp() {
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

window.location.href = "home.html";
}


