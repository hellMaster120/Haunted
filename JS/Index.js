var TestingMode = true

if(TestingMode == true){
    var Background = document.getElementById("Background");
    var LoginButton = document.getElementsByClassName("g_id_signin")[0];
    LoginButton.style.top = "0px";
    LoginButton.style.right = "20px";
    Background.style.filter = "blur(0px)";
}

function handleCredentialResponse(Data){
    console.log(Data)
    var Background = document.getElementById("Background");
    var LoginButton = document.getElementsByClassName("g_id_signin")[0];
    LoginButton.style.top = "0px";
    LoginButton.style.right = "20px";
    Background.style.filter = "blur(0px)";
}