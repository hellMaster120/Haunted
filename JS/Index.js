var Background = document.getElementById("Background");
var LoginButton = document.getElementsByClassName("g_id_signin")[0];

var TestingMode = true
var Path = window.origin+"/Haunted"
var JumpScareCount = 0
var JumpScareDone = [];
var API = ""
var NotesFound = [];
var NoteCount = 0;

if(window.origin != "https://mc-kshellenbarger24.github.io"){
    Path = window.origin
}

if(JSON.parse(sessionStorage.getItem("Login")) == null){
    sessionStorage.setItem("Login", JSON.stringify({"Data":"{}","Logined":false})); 
}

if(sessionStorage.getItem("JumpScares") == null){
    sessionStorage.setItem("JumpScares", JSON.stringify({"JumpScares":[],"Count":JumpScareCount}));
}else{
    JumpScareDone = JSON.parse(sessionStorage.getItem("JumpScares"))["JumpScares"]
    JumpScareCount = JSON.parse(sessionStorage.getItem("JumpScares"))["Count"]
}

if(JSON.parse(sessionStorage.getItem("Login"))["Logined"]){
    var Background = document.getElementById("Background");
    Background.style.filter = "blur(0px)";  
}

if(TestingMode == true){
    if(LoginButton){
        LoginButton.style.top = "0px";
        LoginButton.style.right = "20px";
    }
    Background.style.filter = "blur(0px)";
    sessionStorage.setItem("Login", JSON.stringify({"Data":"Dev","Logined":true}));
}


function handleCredentialResponse(Data){
    if(LoginButton){
        LoginButton.style.top = "0px";
        LoginButton.style.right = "20px";
    }
    Background.style.filter = "blur(0px)";
    sessionStorage.setItem("Login",  JSON.stringify({"Data":Data,"Logined":true}));
}


Background.addEventListener("click",(Data)=>{
    console.log("YOUR MOM")
    var StorageData = JSON.parse(sessionStorage.getItem("Login"))
    if(Data.target == document.getElementById("Door") && StorageData["Logined"]){
        window.location.href = Path+Data.target.getAttribute("Link")
    }
    JumpScares(Data)
    HandelNotes(Data)
})

function SendDataToAPI(Data){

}

function HandelNotes(Data){
    if(Data.target.getAttribute("id") == "notes"){
        
    }
}

function JumpScares(Data){
    console.log(Data)
    if(Data.target.getAttribute("class") == "JumpScare"){
        console.log("BOO")
        if(JumpScareDone.lastIndexOf(Data.target.getAttribute("Count")) == -1 ){
            JumpScareDone.push(Data.target.getAttribute("Count"))
            JumpScareCount = JumpScareCount+1
        }
        
        sessionStorage.setItem("JumpScares", JSON.stringify({"JumpScares":JumpScareDone,"Count":JumpScareCount}));
        SendDataToAPI({
            "JumpScares":JumpScareDone,
            "JumpScareCount":JumpScareCount
        })
    }

}

