document.getElementById("contactForm").addEventListener("submit", function(event) {
    event.preventDefault();

    let name = document.getElementById("name").value.trim();
    let email = document.getElementById("email").value.trim();
    let message = document.getElementById("message").value.trim();
    let result = document.getElementById("result");

    if (name === "" || email === "" || message === "") {
        result.style.color = "red";
        result.innerHTML = "Please fill all fields.";
        return;
    }

    let emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;

    if (!email.match(emailPattern)) {
        result.style.color = "red";
        result.innerHTML = "Enter a valid email.";
        return;
    }

    result.style.color = "green";
    result.innerHTML = "Form submitted successfully!";
});