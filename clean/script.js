
function showAvatar(){
    var x = document.getElementById("avatarImg");
    x.style.display = "block";

}
function hideAvatar(){
    var x = document.getElementById("avatarImg");
    x.style.display = "none";
}
function showRegister(){
    var x = document.getElementById("registerBtn");
    x.style.display = "block";

}
function hideRegister(){
    var x = document.getElementById("registerBtn");
    x.style.display = "none";
}
function registerButtonClicked(){
    showAvatar();
    hideRegister();
    
}
function documentLoaded(){
    hideAvatar();

    
}