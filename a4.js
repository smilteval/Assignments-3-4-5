//Part 1 

function switchText(string){
    document.querySelector(".button-fight h1").innerHTML = string;
}

//Part 4

function checkPassword(){
    let password = document.getElementById("password").value;
    if(password == "12345678"){
        document.getElementById("form-title").innerHTML = "You logged in successfully!";
        document.getElementById("form-title").style.color = "green";
    }
    else{
        alert("Your password is incorrect");
    }
    return false; //needed to stop the submission from reloading the page
}

//BONUS

function calculateVolume(){
    let radius = document.getElementById("radius").value;
    if(radius >= 0){
        let volume = (4*Math.PI*radius*radius*radius)/3;
        volume = volume.toFixed(2);
        document.getElementById("answer").innerHTML = volume;
    }
    else{
        alert("Radius cannot be negative!");
    }
    return false;
}