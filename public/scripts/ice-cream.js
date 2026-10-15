document.getElementById("order-form").onsubmit = () => {

    let isValid = true;

    // Clears error messages
    clearErrors();

    // Validates Name
    let name = document.getElementById("name").value.trim();
    if (name === "") {
        document.getElementById("err-name").style.display = "block";
        isValid = false;
    }

    // Validates Email
    let email = document.getElementById("email").value.trim();
    if (email === "") {
        document.getElementById("err-email").style.display = "block";
        isValid = false;
    }

    // Validates Flavor
    let flavorSelected = document.getElementById("flavor").value;
    if (flavorSelected == "none") {
        document.getElementById("err-flavor").style.display = "block";
        isValid = false;
    }

    // Validate Cone
    let coneSelected = false;
    let coneButtons = document.getElementsByName("method");
    for (let i = 0; i < coneButtons.length; i++) {
        if (coneButtons[i].checked) {
            coneSelected = true;
        }
    }

    if (!coneSelected) {
        document.getElementById("err-cone").style.display = "block";
        isValid = false;
    }

    // Do not submit form if form is not valid
    return isValid;

};

// Clears error messages for valid fields
function clearErrors() {
    let errors = document.getElementsByClassName("err");
    for (let i = 0; i < errors.length; i++) {
        errors[i].style.display = "none";
    }
}