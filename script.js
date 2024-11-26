function validateForm() {
    
    var name = document.getElementById("name").value;
    var email = document.getElementById("email").value;
    var phone = document.getElementById("phone").value;
    var position = document.getElementById("position").value;
    var resume = document.getElementById("resume").value;

    if (name === "" || email === "" || phone === "" || position === "" || resume === "") {
        alert("All fields are required.");
        return false; 
    }

    var emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    if (!emailPattern.test(email)) {
        alert("Please enter a valid email address.");
        return false;
    }

    var phonePattern = /^[0-9]{10}$/;
    if (!phonePattern.test(phone)) {
        alert("Please enter a valid phone number (10 digits).");
        return false;
    }

    alert("Your application has been submitted successfully!");
    return true; 
}
