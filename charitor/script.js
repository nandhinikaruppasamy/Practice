function validate(){
    let name = document.getElementById("name").value;
    let pass = document.getElementById("password").value;
    let amount = document.getElementById("amount").value;
    if (name === "") {
        alert("Please enter your name.");
        return false;
    }
    else if (pass === "") {
        alert("Please enter your password.");
        return false;
    }
    else if (amount === "") {
        alert("Please enter amount.");
        return false;
    }
    else{
        return true;
    }


}