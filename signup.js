document.getElementById("submit-button").addEventListener("click", getuserInfo);
var dataArr = JSON.parse(localStorage.getItem("acc-data")) || [];
function getuserInfo(){
    event.preventDefault();
    var userName = document.getElementById("user-name").value;
    var email = document.getElementById("email-address").value;
    var password = document.getElementById("user-password").value;

    if(!userName){
        document.getElementById("enter-name").style.display = "inline";
    }else{
        document.getElementById("enter-name").style.display = "none";
    }
    
    if(!email){
        document.getElementById("enter-email").style.display = "inline";
    }else{
        document.getElementById("enter-email").style.display = "none";
    }
    if(!password){
        document.getElementById("enter-password").style.display = "inline";
    }else{
        document.getElementById("enter-password").style.display = "none";
    }

    if(!userName || !email || !password){
        return;
    }

    var dataObj = {userName:userName, email:email, password:password};
    if(dataArr.some(function(ele){
        return ele.email === email;
    })) {
        document.getElementById("email-exist").style.display = "inline";
        return;
    }else{
        document.getElementById("email-exist").style.display = "none";
    }

    function isValid(email){
        var emailRegex = /^\S+@\S+\.\S+$/;
        return emailRegex.test(email);
    }


    if(!isValid(email)){
        document.getElementById("email-error").style.display = "inline";
        return;

    }else{
        document.getElementById("email-error").style.display = "none";
    }


    dataArr.push(dataObj);
    document.querySelector("#user-name").value = "";
    document.querySelector("#email-address").value = "";
    document.querySelector("#user-password").value = "";
    localStorage.setItem("acc-data", JSON.stringify(dataArr));

    document.getElementById("account-creation").style.display = "inline";
    document.getElementById("account-creation").style.display = "block";
}