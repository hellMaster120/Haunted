var Background = document.getElementById("Background");
var LoginButton = document.getElementsByClassName("g_id_signin")[0];

var TestingMode = true
var Path = (window.location.href+"").split("index.html")[0];


if(JSON.parse(localStorage.getItem("Login"))["Logined"]){
    var Background = document.getElementById("Background");
    Background.style.filter = "blur(0px)";  
}else{
    window.location.href = Path+"/index.html"
}

if(TestingMode == true){
    LoginButton.style.top = "0px";
    LoginButton.style.right = "20px";
    Background.style.filter = "blur(0px)";
    localStorage.setItem("Login", JSON.stringify({"Data":"Dev","Logined":true}));
}

function handleCredentialResponse(Data){
    var Background = document.getElementById("Background");
    var LoginButton = document.getElementsByClassName("g_id_signin")[0];
    LoginButton.style.top = "0px";
    LoginButton.style.right = "20px";
    Background.style.filter = "blur(0px)";
    localStorage.setItem("Login",  JSON.stringify({"Data":Data,"Logined":true}));
}

Background.addEventListener("click",(Data)=>{
    console.log("YOUR MOM")
    var StorageData = JSON.parse(localStorage.getItem("Login"))
    if(Data.target == document.getElementById("Door") && StorageData["Logined"]){
        window.location.href = Path+"/HTML/index1.html"
    }
   
})

window.onunload(ClearData)
window.onbeforeunload(ClearData)

function ClearData(){
    localStorage.clear()
}