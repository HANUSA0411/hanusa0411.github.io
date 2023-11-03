function validateForm() {
    var name = document.getElementById("name").value;
    var email = document.getElementById("email").value;


    if (name === ""){
        alert("Name must be filled out");
        return false;
    }

    var emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (email === "") {
        alert("Email must be filled out");
        return false;
    }

    if (!emailPattern.test(email)) {
        alert("Please enter a valid email address.");
        return false;
    }

    alert("Form submitted successfully");

    return true
}