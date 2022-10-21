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

localStorage.setItem("Login", JSON.stringify({"Data":"Dev","Logined":true}));
if(JSON.parse(localStorage.getItem("Login"))["Logined"]){
    var Background = document.getElementById("Background");
    Background.style.filter = "blur(0px)";  
}

if(TestingMode == true){
    if(LoginButton){
        LoginButton.style.top = "0px";
        LoginButton.style.right = "20px";
    }
    Background.style.filter = "blur(0px)";
    localStorage.setItem("Login", JSON.stringify({"Data":"Dev","Logined":true}));
}

function handleCredentialResponse(Data){
    if(LoginButton){
        LoginButton.style.top = "0px";
        LoginButton.style.right = "20px";
    }
    Background.style.filter = "blur(0px)";
    localStorage.setItem("Login",  JSON.stringify({"Data":Data,"Logined":true}));
}


Background.addEventListener("click",(Data)=>{
    console.log("YOUR MOM")
    var StorageData = JSON.parse(localStorage.getItem("Login"))
    if(Data.target == document.getElementById("Door") && StorageData["Logined"]){
        window.location.href = Path+Data.target.getAttribute("Link")
    }
    JumpScares(Data)
    HandelNotes(Data)
})

function SendDataToAPI(Data){

}

function HandelNotes(Data){

}

function JumpScares(Data){
    console.log(Data)
    if(Data.target.getAttribute("class") == "JumpScare"){
        console.log("BOO")
        if(JumpScareDone.length == 0){
            JumpScareDone.push(Data.target)
            JumpScareCount = JumpScareCount+1
        }else{
            JumpScareDone.forEach(AData=>{
                if(AData != Data.target){
                    JumpScareDone.push(Data.target)
                    JumpScareCount = JumpScareCount+1
                }
                console.log(AData)
            })
        }
        SendDataToAPI({
            "JumpScares":JumpScareDone,
            "JumpScareCount":JumpScareCount
        })
    }

}

window.onunload(ClearData)
window.onbeforeunload(ClearData)

function ClearData(){
    localStorage.clear()
}


