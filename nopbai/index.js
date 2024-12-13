// JavaScript for client-side form validation

document.addEventListener("DOMContentLoaded", () => {
    const form = document.getElementById("registrationForm");
    const usernameInput = document.getElementById("username");
    const emailInput = document.getElementById("email");
    const passwordInput = document.getElementById("password");
    const confirmPasswordInput = document.getElementById("confirmPassword");

    // Error messages
    const usernameError = document.getElementById("usernameError");
    const emailError = document.getElementById("emailError");
    const passwordError = document.getElementById("passwordError");
    const confirmPasswordError = document.getElementById("confirmPasswordError");

    form.addEventListener("submit", (e) => {
        let isValid = true;

        // Validate username (3-15 alphanumeric characters)
        if (!/^[a-zA-Z0-9]{3,15}$/.test(usernameInput.value)) {
            usernameError.textContent = "Username must be 3-15 alphanumeric characters.";
            isValid = false;
        } else {
            usernameError.textContent = "";
        }

        // Validate email format
        if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(emailInput.value)) {
            emailError.textContent = "Invalid email format.";
            isValid = false;
        } else {
            emailError.textContent = "";
        }

        // Validate password (at least 6 characters)
        if (passwordInput.value.length < 6) {
            passwordError.textContent = "Password must be at least 6 characters.";
            isValid = false;
        } else {
            passwordError.textContent = "";
        }

        // Confirm passwords match
        if (passwordInput.value !== confirmPasswordInput.value) {
            confirmPasswordError.textContent = "Passwords do not match.";
            isValid = false;
        } else {
            confirmPasswordError.textContent = "";
        }

        // Prevent form submission if validation fails
        if (!isValid) {
            e.preventDefault();
        }
    });
});
