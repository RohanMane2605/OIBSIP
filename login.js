document.getElementById("login-form").addEventListener("submit", function(event) {
    event.preventDefault();

    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;

    // Here, you can perform authentication logic (e.g., send credentials to server, check against database)

    if (username === "Rohan Mane" && password === "2157") {
        // Redirect to dashboard or perform any other action upon successful login
        window.location.href = "dashboard.html";
    } else {
        document.getElementById("error-msg").innerText = "Invalid username or password";
    }
});