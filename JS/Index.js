
var Background = document.getElementById("Background");
var LoginButton = document.getElementsByClassName("g_id_signin")[0];
var TestingMode = true

if(TestingMode == true){

    LoginButton.style.top = "0px";
    LoginButton.style.right = "20px";
    Background.style.filter = "blur(0px)";
}

function handleCredentialResponse(Data){
    LoginButton.style.top = "0px";
    LoginButton.style.right = "20px";
    Background.style.filter = "blur(0px)";
}

Background.addEventListener("click",(Data)=>{
    console.log("YOUR MOM")
    if(Data.target == document.getElementById("Door")){
        window.location = "../HTML/index1.html" 
    }
})