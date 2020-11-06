function admin(){
var email = document.getElementById("email").value;
var password = document.getElementById("password").value;
if ( email == "admin@gmail.com" && password == "admin#123"){
alert ("Login successfully");
window.location.href="userbookings.html"; // Redirecting to other page.
localStorage.setItem("ADMIN_LOGGED_IN",JSON.stringify(obj));
localStorage.getItem("ADMIN_LOGGED_IN");
return false;
}
else{
    alert("invalid");
}
}

