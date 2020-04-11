function showPass (form) {

    var user = form.username.value;
    var pass = form.pwd.value;
    var user1 = "MPS" //This is your username.
    var pass1 = "Prime News" //This is your password

    if(user == user1 && pass == pass1 ){

      location.href = "home.html";
     }          
    else{
      window.location.replace("wrongpwd.html");  
    }     
}

function myFunction() {
var x = document.getElementById("myInput");
if (x.type === "password") {
  x.type = "text";
} else {
  x.type = "password";
}
}