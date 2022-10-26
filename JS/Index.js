var Background = document.getElementById("Background");
var LoginButton = document.getElementsByClassName("g_id_signin")[0];

var TestingMode = true
var Path = window.origin+"/Haunted"
var JumpScareCount = 0
var JumpScareDone = [];
var API = ""
var NotesFound = [];
var NoteCount = 0;


var NoteData = {
    "0":{
        "1":{
            "Data":new Uint8Array([65,98,111,117,116,32,97,32,100,97,121,32,97,103,111,32,121,111,117,32,103,111,116,32,97,115,107,101,100,32,98,121,32,121,111,117,114,32,102,114,105,101,110,100,32,116,111,32,103,111,32,99,97,109,112,105,110,103,32,119,105,116,104,32,104,105,109,46,32,89,111,117,32,111,98,108,105,103,101,100,32,98,101,99,97,117,115,101,32,121,111,117,32,101,110,106,111,121,32,99,97,109,112,105,110,103,44,32,98,117,116,32,121,111,117,32,97,110,100,32,121,111,117,114,32,102,114,105,101,110,100,32,119,101,114,101,32,103,111,105,110,103,32,116,111,32,116,104,101,32,119,111,111,100,115,32,97,114,111,117,110,100,32,104,105,115,32,104,111,117,115,101,32,119,104,101,110,32,121,111,117,32,103,111,116,32,116,104,101,114,101,46,32,73,116,32,119,97,115,32,115,117,110,115,101,116,32,119,104,101,110,32,121,111,117,32,103,111,116,32,116,104,101,114,101,46])
        }
    },
    "1":{
        "1":{
            "Data":new Uint8Array([83,111,32,121,111,117,32,98,111,116,104,32,116,104,111,117,103,104,116,32,105,116,32,119,97,115,32,116,104,101,32,112,101,114,102,101,99,116,32,116,105,109,101,32,116,111,32,103,111,32,99,97,109,112,105,110,103,44,32,115,111,32,121,111,117,32,103,111,116,32,97,108,108,32,111,117,114,32,115,116,117,102,102,32,97,110,100,32,119,101,110,116,32,111,117,116,32,116,111,32,102,105,110,100,32,111,117,114,32,115,112,111,116,32,116,111,32,99,97,109,112,46,32,65,102,116,101,114,32,116,114,97,118,101,108,105,110,103,32,102,111,114,32,97,32,99,111,117,112,108,101,32,111,102,32,104,111,117,114,115,44,32,121,111,117,32,98,111,116,104,32,115,101,116,32,117,112,32,99,97,109,112,46])
        },
        "2":{
            "Data":new Uint8Array([84,104,101,110,32,121,111,117,32,104,101,97,114,100,32,97,32,115,111,117,110,100,44,32,121,111,117,32,108,105,115,116,101,110,101,100,32,116,104,101,110,32,121,111,117,32,108,111,111,107,101,100,32,97,114,111,117,110,100,32,110,111,116,32,115,101,101,105,110,103,32,97,110,121,116,104,105,110,103,44,32,121,111,117,32,104,97,100,32,97,32,99,97,109,112,102,105,114,101,44,32,111,110,108,121,32,105,102,32,121,111,117,32,107,110,101,119,32,97,116,32,116,104,97,116,32,116,105,109,101,32,116,104,97,116,32,119,97,115,32,116,104,101,32,111,110,108,121,32,116,104,105,110,103,32,115,97,118,105,110,103,32,117,115,46,32,83,111,32,121,111,117,32,99,111,110,116,105,110,117,101,100,32,111,117,114,32,99,111,110,118,101,114,115,97,116,105,111,110,44,32,98,117,116,32,121,111,117,32,107,101,112,116,32,116,104,105,110,107,105,110,103,32,97,98,111,117,116,32,105,116,44,32,98,117,116,32,121,111,117,32,98,111,116,104,32,116,97,108,107,101,100,32,97,98,111,117,116,32,105,116,32,97,110,100,32,116,104,111,117,103,104,116,32,105,116,32,119,97,115,32,97,32,100,101,101,114,32,114,117,110,110,105,110,103,32,97,114,111,117,110,100,46])
        },
        "3":{
            "Data":new Uint8Array([65,115,32,121,111,117,32,98,111,116,104,32,119,101,114,101,32,103,101,116,116,105,110,103,32,116,105,114,101,100,44,32,121,111,117,32,98,111,116,104,32,100,101,99,105,100,101,100,32,116,111,32,103,111,32,116,111,32,98,101,100,44,32,115,111,32,121,111,117,32,112,117,116,32,111,117,116,32,116,104,101,32,102,105,114,101,32,97,110,100,32,115,101,116,116,108,101,100,32,105,110,32,102,111,114,32,116,104,101,32,110,105,103,104,116,46,32,108,105,116,116,108,101,32,100,105,100,32,121,111,117,32,98,111,116,104,32,107,110,111,119,32,116,104,105,115,32,119,111,117,108,100,32,98,101,32,116,104,101,32,119,111,114,115,116,32,110,105,103,104,116,32,111,102,32,121,111,117,114,32,108,105,118,101,115,46,32,84,104,101,32,115,111,117,110,100,32,121,111,117,32,104,101,97,114,100,32,101,97,114,108,105,101,114,32,114,101,116,117,114,110,101,100,44,32,111,110,108,121,32,116,104,105,115,32,116,105,109,101,32,108,111,117,100,101,114,44,32,98,117,116,32,121,111,117,32,105,103,110,111,114,101,100,32,105,116,46])
        },
        "4":{
            "Data":new Uint8Array([73,116,39,115,32,106,117,115,116,32,97,32,100,101,101,114,46,32,82,105,103,104,116,63,32,89,111,117,32,104,97,118,101,32,115,117,98,99,111,110,115,99,105,111,117,115,108,121,32,115,116,97,114,116,101,100,32,116,111,32,116,104,105,110,107,32,116,104,97,116,32,105,116,32,105,115,32,110,111,116,32,97,32,100,101,101,114,32,98,117,116,44,32,105,110,32,102,97,99,116,44,32,115,111,109,101,116,104,105,110,103,32,101,108,115,101,44,32,98,117,116,32,121,111,117,32,100,105,100,110,39,116,32,119,97,110,116,32,116,111,32,98,114,105,110,103,32,116,104,97,116,32,117,112,32,119,105,116,104,32,121,111,117,114,32,102,114,105,101,110,100,44,32,115,111,32,121,111,117,32,115,116,97,121,101,100,32,115,105,108,101,110,116,44,32,97,102,114,97,105,100,32,116,111,32,115,111,117,110,100,32,108,105,107,101,32,97,32,115,111,99,105,111,112,97,116,104,44,32,89,111,117,32,108,105,115,116,101,110,32,116,111,32,105,116,32,119,104,105,108,101,32,116,114,121,105,110,103,32,116,111,32,102,97,108,108,32,97,115,108,101,101,112,44,32,98,117,116,32,116,104,101,32,115,111,117,110,100,32,107,101,101,112,115,32,103,101,116,116,105,110,103,32,108,111,117,100,101,114,46])
        },
        /*Hidden*/"5":{
            "Data":new Uint8Array([89,111,117,32,102,97,108,108,32,116,111,32,116,104,101,32,103,114,111,117,110,100,32,119,104,101,114,101,32,121,111,117,32,115,116,97,98,98,101,100,32,97,110,100,32,115,108,105,99,101,32,116,104,101,32,102,105,103,117,114,101,44,32,111,110,108,121,32,102,111,114,32,116,104,101,32,119,111,117,110,100,115,32,116,111,32,111,112,101,110,32,117,112,32,111,110,32,121,111,117,46,32,65,115,32,121,111,117,32,108,97,121,32,100,111,119,110,32,98,108,101,101,100,105,110,103,32,111,117,116,44,32,121,111,117,32,116,104,111,117,103,104,116,32,98,97,99,107,32,97,110,100,32,100,105,100,32,105,116,46,32,89,111,117,32,100,105,100,32,105,116,32,97,108,108,44,32,101,118,101,114,121,116,104,105,110,103,44,32,97,110,100,32,110,111,116,104,105,110,103,32,119,97,115,32,102,111,108,108,111,119,105,110,103,32,121,111,117,59,32,105,116,32,119,97,115,32,121,111,117,46,32,89,111,117,32,119,101,114,101,32,98,97,116,116,108,105,110,103,32,105,110,32,121,111,117,114,32,115,117,98,99,111,110,115,99,105,111,117,115,44,32,98,117,116,32,116,104,97,116,32,119,97,115,32,116,104,101,32,102,105,103,117,114,101,59,32,105,116,32,119,97,115,32,121,111,117,46,10,10])
        }

    },
    "2":{
        "1":{
            "Data":new Uint8Array([83,117,100,100,101,110,108,121,44,32,121,111,117,32,104,101,97,114,32,121,111,117,114,32,102,114,105,101,110,100,32,103,101,116,32,111,117,116,32,111,102,32,104,105,115,32,116,101,110,116,32,116,111,32,99,111,110,102,114,111,110,116,32,116,104,101,32,115,111,117,110,100,59,32,97,115,32,104,101,32,100,111,101,115,44,32,116,104,101,32,115,111,117,110,100,32,99,111,109,101,115,32,99,108,111,115,101,114,32,118,101,114,121,32,113,117,105,99,107,108,121,46])
        },
        "2":{
            "Data":new Uint8Array([89,111,117,32,115,116,97,121,32,113,117,105,101,116,32,97,110,100,32,97,99,116,32,108,105,107,101,32,121,111,117,32,97,114,101,32,97,115,108,101,101,112,59,32,97,115,32,121,111,117,32,100,111,44,32,121,111,117,114,32,102,114,105,101,110,100,32,115,104,111,117,116,115,44,32,34,119,104,97,116,32,97,114,101,32,121,111,117,32,100,111,105,110,103,34,32,116,111,32,103,101,116,32,114,105,100,32,111,102,32,119,104,97,116,101,118,101,114,32,116,104,101,32,115,111,117,110,100,32,105,115,59,32,97,115,32,104,101,32,115,104,111,117,116,115,44,32,121,111,117,32,104,101,97,114,32,97,32,114,105,110,103,105,110,103,32,110,111,105,115,101,32,116,104,97,116,32,105,115,32,116,104,101,32,108,111,117,100,101,115,116,32,115,111,117,110,100,32,116,104,97,116,32,121,111,117,32,104,97,118,101,32,101,118,101,114,32,104,101,97,114,100,32,105,110,32,121,111,117,114,32,108,105,102,101,46])
        },
        "3":{
            "Data":new Uint8Array([65,115,32,121,111,117,32,114,101,99,111,118,101,114,32,102,114,111,109,32,116,104,101,32,115,111,117,110,100,44,32,121,111,117,32,100,101,116,101,99,116,32,115,111,109,101,32,119,101,116,32,99,104,101,119,105,110,103,32,110,111,105,115,101,115,59,32,104,111,114,114,105,102,105,101,100,44,32,121,111,117,32,102,105,103,117,114,101,32,111,117,116,32,119,104,97,116,32,116,104,101,32,115,111,117,110,100,32,105,115,32,97,102,116,101,114,32,97,32,108,111,117,100,32,99,114,117,110,99,104,46,32,89,111,117,32,114,101,97,108,105,122,101,44,32,97,102,116,101,114,32,104,101,97,114,105,110,103,32,99,114,121,105,110,103,32,115,116,111,112,32,97,102,116,101,114,32,116,104,97,116,32,99,114,117,110,99,104,44,32,105,116,32,107,105,108,108,101,100,32,121,111,117,114,32,102,114,105,101,110,100,46])
        },
        "4":{
            "Data":new Uint8Array([77,111,114,116,105,102,105,101,100,32,97,110,100,32,115,104,111,99,107,101,100,32,98,121,32,116,104,101,32,101,118,101,110,116,115,44,32,121,111,117,32,119,97,105,116,44,32,104,111,112,105,110,103,32,116,111,32,103,101,116,32,116,104,97,116,32,99,114,121,105,110,103,32,102,114,111,109,32,121,111,117,114,32,102,114,105,101,110,100,32,97,110,100,32,116,104,101,32,102,111,108,108,111,119,105,110,103,32,115,111,117,110,100,115,32,111,117,116,32,111,102,32,121,111,117,114,32,104,101,97,100,46,32,66,117,116,32,121,111,117,32,97,114,101,32,104,111,114,114,105,102,105,101,100,44,32,97,110,100,32,116,104,101,32,115,111,117,110,100,32,107,101,101,112,115,32,108,111,111,112,105,110,103,32,114,101,112,101,97,116,101,100,108,121,46,32,66,117,116,32,97,102,116,101,114,32,45,32,116,119,111,32,104,111,117,114,115,44,32,121,111,117,32,109,117,115,116,101,114,32,117,112,32,116,104,101,32,99,111,117,114,97,103,101,32,116,111,32,104,111,112,101,102,117,108,108,121,32,108,101,97,118,101,32,97,110,100,32,116,101,108,108,32,116,104,101,32,115,116,111,114,121,32,97,98,111,117,116,32,116,111,100,97,121,46])
        },
        "5":{
            "Data":new Uint8Array([89,111,117,32,115,116,105,108,108,32,104,101,97,114,32,116,104,101,32,115,111,117,110,100,32,111,102,32,121,111,117,114,32,102,114,105,101,110,100,32,97,110,100,32,116,104,101,32,97,99,116,105,111,110,115,32,116,104,97,116,32,104,97,118,101,32,111,99,99,117,114,114,101,100,32,116,111,100,97,121,44,32,102,111,114,101,118,101,114,32,114,101,112,101,97,116,105,110,103,32,108,105,107,101,32,97,32,112,111,112,117,108,97,114,32,115,111,110,103,32,111,110,32,116,104,101,32,114,97,100,105,111,46,32,89,111,117,32,114,101,109,101,109,98,101,114,32,116,104,97,116,32,116,104,101,32,116,104,105,110,103,32,98,114,117,116,97,108,108,121,32,107,105,108,108,101,100,32,97,110,100,32,97,116,101,32,121,111,117,114,32,102,114,105,101,110,100,32,104,97,100,32,119,97,108,107,101,100,32,97,119,97,121,32,97,114,111,117,110,100,32,97,110,32,104,111,117,114,32,97,103,111,46,32])
        },
        "6":{
            "Data":new Uint8Array([65,115,32,121,111,117,32,116,104,105,110,107,32,111,102,32,116,104,105,115,44,32,121,111,117,32,102,97,105,110,116,108,121,32,116,114,121,32,116,111,32,103,101,116,32,111,117,116,32,111,102,32,121,111,117,114,32,116,101,110,116,32,119,105,116,104,111,117,116,32,97,108,101,114,116,105,110,103,32,97,110,121,116,104,105,110,103,59,32,121,111,117,32,116,104,105,110,107,32,97,98,111,117,116,32,105,116,32,97,110,100,32,116,104,101,32,102,97,99,116,32,116,104,97,116,32,116,104,101,32,122,105,112,112,101,114,32,111,110,32,116,104,101,32,116,101,110,116,32,105,115,32,103,111,105,110,103,32,116,111,32,98,101,32,108,111,117,100,44,32,115,111,32,121,111,117,32,116,104,105,110,107,32,97,98,111,117,116,32,104,111,119,32,116,111,32,103,101,116,32,111,117,116,32,119,105,116,104,111,117,116,32,109,97,107,105,110,103,32,110,111,105,115,101,46])
        },
        "7":{
            "Data":new Uint8Array([89,111,117,32,99,111,110,99,108,117,100,101,32,115,108,111,119,108,121,44,32,108,111,119,101,114,105,110,103,32,116,104,101,32,122,105,112,112,101,114,46,32,89,111,117,32,103,101,116,32,111,117,116,44,32,108,117,99,107,105,108,121,44,32,97,110,100,32,119,111,110,100,101,114,32,119,104,121,32,105,116,32,100,105,100,110,39,116,32,99,111,109,101,32,102,111,114,32,121,111,117,32,97,115,32,116,104,101,32,122,105,112,112,101,114,32,109,97,100,101,32,110,111,105,115,101,46,32,89,111,117,32,108,111,111,107,32,100,111,119,110,32,119,104,101,114,101,32,121,111,117,114,32,102,114,105,101,110,100,39,115,32,98,111,100,121,32,115,104,111,117,108,100,32,98,101,32,111,110,108,121,32,116,111,32,115,101,101,32,97,32,104,105,108,108,32,111,102,32,100,105,114,116,59,32,121,111,117,32,103,108,111,115,115,32,111,118,101,114,32,116,104,105,115,32,102,97,99,116,32,97,115,32,116,104,101,32,100,97,121,32,97,112,112,114,111,97,99,104,101,115,44,32,97,110,100,32,121,111,117,32,115,101,101,32,97,32,104,111,117,115,101,32,116,104,114,111,117,103,104,32,116,104,101,32,119,111,111,100,115,32,116,104,97,116,32,121,111,117,39,118,101,32,110,101,118,101,114,32,115,101,101,110,32,98,101,102,111,114,101,59,32,105,116,32,102,101,101,108,115,32,102,97,109,105,108,105,97,114,46])
        },
        "8":{
            "Data":new Uint8Array([89,111,117,32,108,111,111,107,32,97,116,32,116,104,101,32,104,111,117,115,101,32,97,110,100,32,115,101,101,32,116,104,97,116,32,97,32,108,105,103,104,116,32,105,115,32,111,110,46,32,84,104,105,110,107,105,110,103,32,116,104,97,116,32,105,116,32,109,105,103,104,116,32,98,101,32,115,97,102,101,44,32,121,111,117,32,119,97,108,107,32,116,111,119,97,114,100,115,32,116,104,101,32,104,111,117,115,101,44,32,116,104,114,111,117,103,104,32,116,104,101,32,119,111,111,100,115,44,32,97,110,100,32,121,111,117,32,115,116,97,114,116,32,104,101,97,114,105,110,103,32,119,104,105,115,112,101,114,115,59,32,121,111,117,32,99,97,110,226,128,153,116,32,109,97,107,101,32,111,117,116,32,116,104,101,32,115,111,117,110,100,44,32,98,117,116,32,121,111,117,32,104,101,97,114,32,105,116,44,32,97,110,100,32,105,116,39,115,32,104,111,114,114,105,102,121,105,110,103,44,32,98,117,116,32,121,111,117,32,115,116,114,117,103,103,108,101,32,111,110,32,97,110,100,32,115,116,97,114,116,32,116,111,32,119,97,108,107,32,116,111,119,97,114,100,32,116,104,101,32,104,111,117,115,101,46,32,66,117,116,32,121,111,117,32,115,116,111,112,32,102,111,114,32,97,32,115,101,99,111,110,100,46])
        },
        "9":{
            "Data":new Uint8Array([84,104,101,32,119,104,105,115,112,101,114,115,32,97,114,101,32,103,101,116,116,105,110,103,32,108,111,117,100,101,114,44,32,115,111,121,111,117,32,116,117,114,110,32,97,114,111,117,110,100,32,116,111,32,115,101,101,32,97,32,102,105,103,117,114,101,32,115,116,97,110,100,105,110,103,32,111,118,101,114,32,121,111,117,32,119,104,105,115,112,101,114,105,110,103,33,32,121,111,117,32,115,116,97,114,116,32,116,111,32,114,117,110,46,32,65,115,32,121,111,117,32,100,111,44,32,121,111,117,32,102,101,101,108,32,115,111,109,101,116,104,105,110,103,32,98,114,117,115,104,32,97,103,97,105,110,115,116,32,121,111,117,114,32,108,101,103,46,32,65,115,32,121,111,117,32,116,104,105,110,107,32,116,104,105,115,44,32,121,111,117,32,114,117,115,104,32,116,111,32,116,104,101,32,104,111,117,115,101,32,121,111,117,32,99,97,110,32,115,116,105,108,108,32,115,101,101,32,105,110,32,116,104,101,32,100,105,115,116,97,110,99,101,46,32])
        },
        "10":{
            "Data":new Uint8Array([89,111,117,32,104,101,97,114,100,32,115,111,109,101,116,104,105,110,103,32,105,110,32,116,104,101,32,100,105,115,116,97,110,99,101,32,98,101,102,111,114,101,32,116,104,105,115,59,32,121,111,117,32,104,101,97,114,100,32,105,116,32,116,117,114,110,32,97,110,100,32,114,117,115,104,32,116,111,119,97,114,100,115,32,121,111,117,46,32,65,115,32,121,111,117,32,97,108,109,111,115,116,32,114,101,97,99,104,32,116,104,101,32,104,111,117,115,101,44,32,121,111,117,32,104,101,97,114,32,105,116,32,103,101,116,116,105,110,103,32,99,108,111,115,101,114,32,97,110,100,32,99,108,111,115,101,114,44,32,98,117,116,32,121,111,117,32,107,101,101,112,32,114,117,110,110,105,110,103,44,32,104,111,112,105,110,103,32,116,111,32,109,97,107,101,32,105,116,32,116,111,32,116,104,101,32,108,105,103,104,116,32,111,102,32,116,104,101,32,111,108,100,32,114,117,110,45,100,111,119,110,32,104,111,117,115,101,46])
        },
        "11":{
            "Data":new Uint8Array([89,111,117,32,103,101,116,32,105,110,116,111,32,116,104,101,32,115,109,97,108,108,32,111,112,101,110,32,102,105,101,108,100,32,97,98,111,117,116,32,50,48,32,102,101,101,116,32,97,119,97,121,32,102,114,111,109,32,116,104,101,32,111,108,100,32,114,117,110,45,100,111,119,110,32,104,111,117,115,101,46,32,89,111,117,32,116,104,105,110,107,32,121,111,117,39,114,101,32,103,111,105,110,103,32,116,111,32,109,97,107,101,32,105,116,32,97,115,32,121,111,117,32,104,101,97,114,32,116,104,101,32,115,111,117,110,100,32,98,101,104,105,110,100,32,121,111,117,46,32,82,105,103,104,116,32,97,115,32,121,111,117,32,103,101,116,32,116,111,32,116,104,101,32,108,105,103,104,116,44,32,121,111,117,32,102,101,101,108,32,116,104,101,32,115,111,117,110,100,32,116,111,117,99,104,32,121,111,117,32,97,110,100,32,103,114,97,98,32,97,116,32,121,111,117,114,32,98,97,99,107,33])
        },
        "12":{
            "Data":new Uint8Array([66,117,116,32,121,111,117,32,109,97,100,101,32,105,116,59,32,121,111,117,32,108,101,116,32,111,102,102,32,97,32,115,105,103,104,32,111,102,32,114,101,108,105,101,102,32,97,110,100,32,102,101,108,108,32,116,111,32,116,104,101,32,102,108,111,111,114,32,102,114,111,109,32,114,117,110,110,105,110,103,32,115,111,32,109,117,99,104,46,32,66,117,116,32,97,115,32,121,111,117,32,102,97,108,108,32,116,111,32,116,104,101,32,102,108,111,111,114,44,32,121,111,117,32,102,101,101,108,32,97,32,115,104,97,114,112,32,112,97,105,110,32,105,110,32,121,111,117,114,32,98,97,99,107,46,32,89,111,117,32,102,105,110,100,32,97,32,109,105,114,114,111,114,59,32,121,111,117,32,117,115,101,32,105,116,32,116,111,32,108,111,111,107,32,97,116,32,121,111,117,114,32,98,97,99,107,46])
        },
        "13":{
            "Data":new Uint8Array([66,101,99,97,117,115,101,32,111,102,32,116,104,101,32,97,100,114,101,110,97,108,105,110,101,32,112,117,109,112,105,110,103,32,116,104,114,111,117,103,104,32,121,111,117,44,32,121,111,117,32,100,105,100,110,39,116,32,102,101,101,108,32,105,116,44,32,98,117,116,32,97,115,32,121,111,117,32,108,111,111,107,101,100,46,32,89,111,117,32,102,105,110,100,32,97,32,109,97,115,115,105,118,101,32,115,108,97,115,104,32,97,99,114,111,115,115,32,121,111,117,114,32,98,97,99,107,32,116,104,97,116,32,108,111,111,107,115,32,116,111,32,98,101,32,99,97,117,115,101,100,32,98,121,32,97,110,32,97,110,105,109,97,108,46,32,89,111,117,32,116,114,121,32,116,111,32,115,116,111,112,32,99,111,110,99,101,110,116,114,97,116,105,110,103,32,111,110,32,116,104,97,116,32,116,111,32,108,105,115,116,101,110,32,116,111,32,116,104,101,32,115,111,117,110,100,44,32,98,117,116,32,116,104,97,116,32,116,104,105,110,103,32,105,115,32,99,104,97,115,105,110,103,32,121,111,117,46])
        },
        "14":{
            "Data":new Uint8Array([65,115,32,121,111,117,32,102,97,108,108,32,115,105,108,101,110,116,44,32,121,111,117,32,104,101,97,114,32,118,101,114,121,32,104,101,97,118,121,32,102,111,111,116,115,116,101,112,115,59,32,121,111,117,32,99,97,110,39,116,32,116,101,108,108,32,105,102,32,105,116,39,115,32,99,111,109,105,110,103,32,116,111,119,97,114,100,32,121,111,117,32,111,114,32,119,97,108,107,105,110,103,32,97,119,97,121,46,32,65,115,32,121,111,117,32,116,114,121,32,116,111,32,108,105,115,116,101,110,44,32,121,111,117,32,104,101,97,114,32,115,111,109,101,116,104,105,110,103,32,101,108,115,101,59,32,121,111,117,32,99,97,110,39,116,32,116,101,108,108,32,119,104,97,116,32,105,116,32,105,115,44,32,98,117,116,32,105,116,32,105,115,32,99,111,109,105,110,103,32,116,111,119,97,114,100,32,121,111,117,46,84,104,101,32,115,104,97,114,112,32,112,97,105,110,32,103,111,105,110,103,32,116,104,114,111,117,103,104,32,121,111,117,114,32,98,97,99,107,32,109,97,107,101,115,32,105,116,32,118,101,114,121,32,104,97,114,100,32,116,111,32,115,116,97,121,32,113,117,105,101,116,46])
        },
        "15":{
            "Data":new Uint8Array([66,117,116,32,97,115,32,116,104,101,32,110,101,119,44,32,108,105,103,104,116,101,114,32,115,111,117,110,100,32,114,101,97,99,104,101,115,32,121,111,117,44,32,121,111,117,32,103,101,116,32,97,32,103,108,105,109,112,115,101,32,111,102,32,97,32,102,105,103,117,114,101,32,97,115,32,105,116,32,115,104,105,110,101,115,32,97,32,108,105,103,104,116,32,105,110,32,121,111,117,114,32,101,121,101,115,46,32,34,72,101,121,44,32,98,117,100,44,32,87,101,39,118,101,32,98,101,101,110,32,108,111,111,107,105,110,103,32,102,111,114,32,121,111,117,32,97,108,108,32,110,105,103,104,116,34,46,65,115,32,104,101,32,102,105,110,105,115,104,101,115,32,119,104,97,116,32,104,101,32,105,115,32,115,97,121,105,110,103,44,32,121,111,117,32,98,114,101,97,107,32,105,110,116,111,32,116,101,97,114,115,44,32,121,111,117,32,102,97,108,108,32,97,115,108,101,101,112,46])
        }
    },
    "3":{
        "1":{
            "Data":new Uint8Array([85,112,111,110,32,119,97,107,105,110,103,32,117,112,44,32,121,111,117,32,102,105,110,100,32,121,111,117,114,115,101,108,102,32,105,110,32,97,32,104,111,115,112,105,116,97,108,59,32,97,115,32,121,111,117,32,119,97,107,101,32,117,112,44,32,97,32,110,117,114,115,101,32,119,97,108,107,115,32,105,110,44,32,34,100,111,99,116,111,114,45,53,32,50,50,49,32,105,115,32,97,119,97,107,101,32,34,46,32,89,111,117,32,105,103,110,111,114,101,32,104,101,114,32,102,111,114,32,97,32,115,101,99,111,110,100,32,119,111,110,100,101,114,105,110,103,32,119,104,101,114,101,32,121,111,117,32,97,114,101,32,97,110,100,32,119,104,97,116,32,104,97,115,32,104,97,112,112,101,110,101,100,44,32,98,117,116,32,97,108,108,32,121,111,117,32,99,97,110,32,114,101,109,101,109,98,101,114,32,105,115,32,116,104,101,32,104,111,117,115,101,32,97,110,100,32,116,104,101,32,115,111,117,110,100,44,32,116,104,97,116,32,103,111,100,45,97,119,102,117,108,32,115,111,117,110,100,32,101,110,103,114,97,118,101,100,32,105,110,32,121,111,117,114,32,109,101,109,111,114,121,46])
        },
        "2":{
            "Data":new Uint8Array([89,111,117,32,112,97,110,105,99,32,97,115,32,116,104,101,32,110,117,114,115,101,32,116,114,105,101,115,32,116,111,32,99,97,108,109,32,121,111,117,32,100,111,119,110,44,32,97,110,100,32,97,102,116,101,114,32,115,111,109,101,32,116,105,109,101,44,32,121,111,117,32,102,105,110,97,108,108,121,32,99,97,108,109,32,100,111,119,110,32,97,110,100,32,114,101,108,97,120,32,97,32,108,105,116,116,108,101,32,98,105,116,46,32,89,111,117,32,108,111,111,107,32,97,116,32,116,104,101,32,110,117,114,115,101,32,97,110,100,32,97,115,107,44,32,34,119,104,97,116,32,116,105,109,101,32,105,115,32,105,116,63,34,32,83,104,101,32,108,111,111,107,115,32,98,97,99,107,32,99,97,108,109,108,121,32,97,110,100,32,115,97,121,115,44,32,34,105,116,32,105,115,32,49,58,52,51,32,112,109,34,46])
        },
        "3":{
            "Data":new Uint8Array([65,115,32,115,104,101,32,115,97,121,115,32,116,104,105,115,44,32,121,111,117,32,97,115,107,32,104,111,119,32,121,111,117,32,119,101,114,101,32,111,117,116,32,102,111,114,32,115,111,32,108,111,110,103,59,32,121,111,117,32,108,111,111,107,32,97,116,32,104,101,114,32,97,110,100,32,97,115,107,32,97,110,111,116,104,101,114,32,113,117,101,115,116,105,111,110,32,34,119,104,97,116,32,105,115,32,116,104,101,32,100,97,116,101,32,116,111,100,97,121,34,32,97,115,32,121,111,117,32,97,115,107,44,32,115,104,101,32,116,104,105,110,107,115,32,102,111,114,32,97,32,115,101,99,111,110,100,44,32,116,104,101,110,32,99,104,101,99,107,115,32,104,101,114,32,112,104,111,110,101,32,97,110,100,32,116,104,101,110,32,114,101,112,108,105,101,115,44,32,34,105,116,32,105,115,32,74,117,108,121,32,55,44,32,49,57,54,56,34])
        },
        "4":{
            "Data":new Uint8Array([121,111,117,32,115,116,97,114,116,32,116,104,105,110,107,105,110,103,32,97,98,111,117,116,32,116,104,101,32,116,114,105,112,32,116,104,97,116,32,121,111,117,32,104,97,100,32,108,101,102,116,32,97,32,119,101,101,107,32,97,103,111,32,97,110,100,32,119,104,121,32,105,116,32,104,97,112,112,101,110,101,100,46,32,89,111,117,32,97,114,101,32,116,104,101,114,101,32,99,111,110,116,101,109,112,108,97,116,105,110,103,32,116,104,105,110,103,115,44,32,116,104,101,110,32,115,117,100,100,101,110,108,121,44,32,121,111,117,32,106,111,108,116,32,39,119,97,105,116,32,97,32,119,101,101,107,33,39,32,121,111,117,32,116,104,111,117,103,104,116,46,32,66,117,116,32,121,111,117,32,116,114,121,32,116,111,32,115,116,97,121,32,99,97,108,109,44,32,98,117,116,32,116,104,101,32,119,104,105,115,112,101,114,115,32,115,116,97,114,116,32,116,111,32,114,101,116,117,114,110,44,32,98,117,116,32,121,111,117,32,99,97,110,32,109,97,107,101,32,111,117,116,32,119,104,97,116,32,116,104,101,121,32,97,114,101,32,115,97,121,105,110,103,32,116,104,105,115,32,116,105,109,101,32,34,103,111,44,32,114,101,116,117,114,110,32,116,111,32,121,111,117,114,32,110,97,116,117,114,101,34,46])
        },
        "5":{
            "Data":new Uint8Array([70,114,101,97,107,105,110,103,32,111,117,116,44,32,121,111,117,32,116,114,121,32,116,111,32,102,105,103,117,114,101,32,111,117,116,32,119,104,97,116,32,116,104,101,121,32,109,101,97,110,46,32,84,104,101,32,108,105,103,104,116,115,32,103,111,32,111,117,116,32,97,115,32,116,104,101,32,108,105,103,104,116,115,32,116,117,114,110,32,111,102,102,44,32,97,110,100,32,116,101,114,114,111,114,32,102,105,108,108,115,32,121,111,117,114,32,98,111,100,121,46,32,89,111,117,32,113,117,105,101,116,108,121,32,119,104,105,115,112,101,114,44,32,34,105,116,32,102,111,108,108,111,119,101,100,32,109,101,59,32,119,101,39,114,101,32,100,101,97,100,44,32,119,101,39,114,101,32,97,108,108,32,100,101,97,100,34,59,32,101,118,101,114,121,111,110,101,32,101,108,115,101,32,105,110,32,116,104,101,32,114,111,111,109,32,108,111,111,107,115,32,97,116,32,121,111,117,32,108,105,107,101,32,121,111,117,32,97,114,101,32,99,114,97,122,121,44,32,98,117,116,32,116,104,101,32,115,111,117,110,100,32,115,116,97,114,116,115,32,105,110,32,116,104,101,32,118,101,114,121,32,114,111,111,109,32,121,111,117,32,97,114,101,32,105,110,59])
        },
        "6":{
            "Data":new Uint8Array([121,111,117,32,119,97,116,99,104,32,116,104,101,32,104,117,109,97,110,111,105,100,32,102,105,103,117,114,101,32,107,105,108,108,32,97,110,100,32,115,116,97,114,116,32,101,97,116,105,110,103,32,116,104,101,32,112,101,111,112,108,101,32,105,110,32,121,111,117,114,32,114,111,111,109,32,117,110,116,105,108,32,105,116,32,108,111,111,107,115,32,97,116,32,121,111,117,32,97,110,100,32,119,97,108,107,115,32,97,119,97,121,32,116,111,32,116,104,101,32,110,101,120,116,32,114,111,111,109,46,32,67,114,121,105,110,103,32,111,117,116,32,111,102,32,102,101,97,114,44,32,121,111,117,32,104,105,100,101,32,105,110,32,116,104,101,32,99,111,114,110,101,114,44,32,102,101,97,114,105,110,103,32,116,104,97,116,32,116,104,101,32,102,105,103,117,114,101,32,84,72,65,84,32,84,72,73,78,71,32,105,115,32,115,97,118,105,110,103,32,121,111,117,32,102,111,114,32,108,97,115,116,32,97,110,100,32,116,104,97,116,32,105,116,32,119,97,110,116,115,32,121,111,117,32,116,111,32,108,105,115,116,101,110,32,97,110,100,32,119,97,116,99,104,46])
        },
        "7":{
            "Data":new Uint8Array([89,111,117,32,115,105,116,32,116,104,101,114,101,32,113,117,105,101,116,108,121,32,99,114,121,105,110,103,59,32,97,102,116,101,114,32,97,32,108,111,110,103,32,116,105,109,101,44,32,105,116,32,114,101,116,117,114,110,115,32,97,110,100,32,100,114,97,103,115,32,121,111,117,32,97,114,111,117,110,100,32,116,111,32,108,111,111,107,32,97,116,32,105,116,115,32,119,111,114,107,32,108,105,107,101,32,105,116,32,119,97,110,116,115,32,121,111,117,32,116,111,32,101,110,106,111,121,32,105,116,32,116,111,111,46,32,84,101,114,114,105,102,105,101,100,44,32,121,111,117,32,108,111,111,107,32,97,116,32,105,116,32,119,105,116,104,32,97,32,102,111,114,99,101,100,32,110,105,99,101,32,108,111,111,107,44,32,98,117,116,32,105,116,32,100,111,101,115,110,39,116,32,115,101,101,109,32,115,97,116,105,115,102,105,101,100,32,119,105,116,104,32,116,104,101,32,108,111,111,107,32,121,111,117,32,103,105,118,101,32,105,116,115,32,119,111,114,107,46,32,73,116,32,119,97,110,116,115,32,121,111,117,32,116,111,32,106,111,105,110,32,105,116,59])
        },
        "8":{
            "Data":new Uint8Array([116,104,101,32,102,105,103,117,114,101,32,119,97,110,116,115,32,121,111,117,32,116,111,32,104,101,108,112,32,105,116,32,105,110,32,116,104,101,32,34,108,105,110,101,32,111,102,32,119,111,114,107,34,46,32,89,111,117,32,100,111,110,39,116,32,119,97,110,116,32,116,111,32,104,101,108,112,32,105,116,44,32,97,110,100,32,121,111,117,32,114,101,102,117,115,101,44,32,119,97,110,116,105,110,103,32,116,111,32,107,105,108,108,32,116,104,101,32,102,105,103,117,114,101,32,105,110,115,116,101,97,100,32,111,102,32,104,101,108,112,105,110,103,32,105,116,46,32,66,117,116,32,108,117,99,107,32,105,115,32,111,110,32,121,111,117,114,32,115,105,100,101,59,32,121,111,117,32,102,105,110,100,32,97,32,115,99,97,108,112,101,108,32,111,110,32,116,104,101,32,103,114,111,117,110,100,59,32,97,115,32,121,111,117,32,103,101,116,32,100,114,97,103,103,101,100,32,112,97,115,116,32,105,116,44,32,121,111,117,32,112,105,99,107,32,105,116,32,117,112,59])
        },
        "9":{
            "Data":new Uint8Array([32,116,104,101,32,102,105,103,117,114,101,32,110,111,116,105,99,101,115,32,116,104,105,115,32,98,117,116,32,100,111,101,115,110,39,116,32,115,116,111,112,32,121,111,117,46,32,65,98,111,117,116,32,53,32,109,105,110,117,116,101,115,32,108,97,116,101,114,44,32,121,111,117,32,102,105,110,100,32,115,111,109,101,32,112,101,111,112,108,101,44,32,97,110,100,32,116,104,101,32,102,105,103,117,114,101,32,119,97,110,116,115,32,121,111,117,32,116,111,32,100,111,32,116,104,101,105,114,32,100,105,114,116,121,32,119,111,114,107,46,32,89,111,117,32,103,114,105,112,32,116,104,101,32,115,99,97,108,112,101,108,32,117,112,115,105,100,101,32,100,111,119,110,32,97,110,100,32,113,117,105,99,107,108,121,32,116,117,114,110,32,97,114,111,117,110,100,46,32,89,111,117,32,115,116,97,98,32,97,110,100,32,116,104,114,97,115,104,32,97,116,32,116,104,101,32,102,105,103,117,114,101,44,32,111,110,108,121,32,102,111,114,32,105,116,32,116,111,32,98,101,32,117,110,102,97,122,101,100,46])
        }  
    }

}


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
    console.log(Data)
    if(Data.target.getAttribute("class") == "note"){
        console.log("Note")
        Data.target.remove()
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

