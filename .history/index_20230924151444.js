//sign-in
function signIn() {
    // Get user input
    const username = document.getElementsById("username").value;
    const password = document.getElementById("password").value;

    // Perform validation
    if(username ===""|| password ==="") {
        alert("please enter your username and password");
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
