function login(username, password) {
    return username === "admin" && password === "123";
}

if (typeof document !== "undefined") {
    const form = document.getElementById("loginForm");

    form.addEventListener("submit", function(event) {
        event.preventDefault();

        const username = document.getElementById("username").value;
        const password = document.getElementById("password").value;
        const message = document.getElementById("message");

        if (login(username, password)) {
            message.textContent = "Login successful!";
        } else {
            message.textContent = "Invalid username or password!";
        }
    });
}

if (typeof module !== "undefined") {
    module.exports = { login };
}
