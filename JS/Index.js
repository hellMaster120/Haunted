
var Background = document.getElementById("Background");
var LoginButton = document.getElementsByClassName("g_id_signin")[0];
var TestingMode = true

if(TestingMode == true){
    LoginButton.style.top = "0px";
    LoginButton.style.right = "20px";
    Background.style.filter = "blur(0px)";
    localStorage.setItem("Login", JSON.stringify({"Data":"Dev","Logined":true}));
}

function handleCredentialResponse(Data){
    LoginButton.style.top = "0px";
    LoginButton.style.right = "20px";
    Background.style.filter = "blur(0px)";
    localStorage.setItem("Login", {"Data":Data,"Logined":true});
}

Background.addEventListener("click",(Data)=>{
    console.log("YOUR MOM")
    var StorageData = JSON.parse(localStorage.getItem("Login"))
    if(Data.target == document.getElementById("Door") && StorageData["Logined"]){
        window.location.pathname = "/HTML/index1.html"
    }
   
})

window.onunload(ClearData)
window.onbeforeunload(ClearData)

function ClearData(){
    localStorage.clear()
}