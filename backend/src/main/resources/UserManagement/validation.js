function validateRegistrationForm() {
    const username = document.getElementById("username").value.trim();
    const email = document.getElementById("email").value.trim();
    const password = document.getElementById("password").value.trim();
    const confirmPassword = document.getElementById("confirmPassword").value.trim();
    const error = document.getElementById("error");

    error.textContent = "";

    if (!username) {
        error.textContent = "Username is required.";
        return false;
    }
    if (!email) {
        error.textContent = "Email is required.";
        return false;
    }
    if (password.length < 6) {
        error.textContent = "Password must be at least 6 characters.";
        return false;
    }
    if (password !== confirmPassword) {
        error.textContent = "Passwords do not match.";
        return false;
    }

    return true;
}

function validateLoginForm() {
    const username = document.getElementById("username").value.trim();
    const password = document.getElementById("password").value.trim();
    const error = document.getElementById("error");

    error.textContent = "";

    if (!username || !password) {
        error.textContent = "All fields are required.";
        return false;
    }

    return true;
}
