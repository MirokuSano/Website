function compareLogin(event){
    event.preventDefault();

    const USERNAME = "Miroku";
    const PASSWORD = "143";
    const userName = document.getElementById("username").value;
    const passWord = document.getElementById("password").value;
    const errorMessage = document.getElementById("errorMessage").value;
    if(userName === USERNAME && passWord === PASSWORD){
        alert("You is correct");
        window.location.href = "message.html";
    }else{
        alert("You is wrong");
        errorMessage.textContent = "Invalid Username or Password!";

    }
}

const myLogInButton = document.getElementById("btnLogIn");
myLogInButton.addEventListener('click', compareLogin);