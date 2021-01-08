//Part 1 

function switchText(string){
    document.querySelector(".button-fight h1").innerHTML = string;
}

//Part 4

function checkPassword(){
    var password = document.getElementById('password').value;
    if(password == "12345678"){
        document.getElementById("form-title").innerText = "You logged in successfully!";
    }
    else{
        alert("Your password is incorrect");
    }
    return false; //needed to stop the submission from reloading the page
}