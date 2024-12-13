document.addEventListener("DOMContentLoaded", () => {
    const form = document.getElementById("registrationForm");
    const usernameInput = document.getElementById("username");
    const emailInput = document.getElementById("email");
    const passwordInput = document.getElementById("password");
    const confirmPasswordInput = document.getElementById("confirmPassword");
    const phoneInput = document.getElementById("phone");

    // Error messages
    const usernameError = document.getElementById("usernameError");
    const emailError = document.getElementById("emailError");
    const passwordError = document.getElementById("passwordError");
    const confirmPasswordError = document.getElementById("confirmPasswordError");
    const phoneError = document.getElementById("phoneError");

    form.addEventListener("submit", (e) => {
        let isValid = true;

        // Validate username (3+ characters)
        if (usernameInput.value.length < 3) {
            usernameError.textContent = "Username must be at least 3 characters.";
            usernameInput.style.borderColor = "red";
            isValid = false;
        } else {
            usernameError.textContent = "";
            usernameInput.style.borderColor = "";
        }

        // Validate email format
        if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(emailInput.value)) {
            emailError.textContent = "Invalid email format.";
            emailInput.style.borderColor = "red";
            isValid = false;
        } else {
            emailError.textContent = "";
            emailInput.style.borderColor = "";
        }

        // Validate password (at least 8 characters, must contain a number and a special character)
        if (!/(?=.*\d)(?=.*[!@#$%^&*])[A-Za-z\d!@#$%^&*]{8,}/.test(passwordInput.value)) {
            passwordError.textContent = "Password must be at least 8 characters, include a number and a special character.";
            passwordInput.style.borderColor = "red";
            isValid = false;
        } else {
            passwordError.textContent = "";
            passwordInput.style.borderColor = "";
        }

        // Confirm passwords match
        if (passwordInput.value !== confirmPasswordInput.value) {
            confirmPasswordError.textContent = "Passwords do not match.";
            confirmPasswordInput.style.borderColor = "red";
            isValid = false;
        } else {
            confirmPasswordError.textContent = "";
            confirmPasswordInput.style.borderColor = "";
        }

        // Validate phone number format (XXX-XXX-XXXX)
        if (!/^\d{3}-\d{3}-\d{4}$/.test(phoneInput.value)) {
            phoneError.textContent = "Invalid phone number format.";
            phoneInput.style.borderColor = "red";
            isValid = false;
        } else {
            phoneError.textContent = "";
            phoneInput.style.borderColor = "";
        }

        // Prevent form submission if validation fails
        if (!isValid) {
            e.preventDefault();
        } else {
            alert("Form submitted successfully!");
        }
    });
});
