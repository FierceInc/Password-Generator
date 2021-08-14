var passCode = document.getElementById('input');
var showCode = document.getElementById('show');
var sendCode = document.getElementById('submit');
var codeSuccess = document.getElementById('unlocked');
var codeFailed = document.getElementById('locked');
var codeFail = document.getElementById('lock')
var codePass = document.getElementById('unlock')


codeFail.addEventListener('click', function() {
    var tester = /^(?=.*[A-Z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\&\*])(?=.{8,15}$)/g;
    if(tester.test(passCode.value)){
        codeSuccess.style.display = "block";
        codeFailed.style.display = "none";
    }
    else{
        codeSuccess.style.display = "none";
        codeFailed.style.display = "block";
        codeFailed.classList.add("shaker");
        setTimeout(() => {
        codeFailed.classList.remove("shaker");
        }, 1000)
       
       
    }
})

showCode.addEventListener('click', function(){
    if(passCode.type === "password"){
        passCode.type = "text";
        document.getElementById("eye").classList ='fa fa-eye-slash';
        document.getElementById("shows").innerText = "Hide";

    }
    else if(passCode.type === "text"){
        passCode.type = "password";
         document.getElementById("eye").classList ='fa fa-eye';
         document.getElementById("shows").innerText = "Show";
    }
    else{
        passCode.type = "password"
    }

})
codePass.addEventListener('click', function(){
    codeSuccess.style.display = "none";
        codeFailed.style.display = "block";
        codeFailed.classList.add("shaker");
        passCode.value = "";
        setTimeout(() => {
            codeFailed.classList.remove("shaker");
            }, 1000)
})

sendCode.addEventListener('click', function() {
    var passChars = "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ!@#$%&*abcdefghijklmnopqrstuvwxyz";
    var passWord = 15
    var Password = Array(passWord).fill(passChars)
        .map(function(x) { 
            return x[Math.floor(Math.random() * x.length)]
         }).join('');
    var testing =  /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\&\*])(?=.{8,15}$)/g;
    if(testing.test(Password)){
        passCode.value = Password;
    }
    
})