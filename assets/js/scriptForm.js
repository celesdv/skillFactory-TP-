function captura(){
    var user = document.getElementById("user").value;
    console.log("User: ", user);
    var email = document.getElementById("email").value;
    console.log("Email: ", email);
    var comment = document.getElementById("comment").value;
    console.log("Comment: ", comment);

    alert("Your name is: "+user+", your email is: "+email+", and your comment is: "+comment);
}

