document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('registrationForm');
    const username = document.getElementById('username');
    const email = document.getElementById('email');
    const password = document.getElementById('password');
    const confirmPassword = document.getElementById('confirmPassword');

    form.addEventListener('submit', function(e) {
        e.preventDefault();
        validateForm();
    });

    function validateForm() {
        // Reset error messages
        resetErrors();

        // Validate username
        if (username.value.trim() === '') {
            setError('usernameError', 'Username is required');
        } else if (username.value.length < 3) {
            setError('usernameError', 'Username must be at least 3 characters');
        }

        // Validate email
        if (email.value.trim() === '') {
            setError('emailError', 'Email is required');
        } else if (!isValidEmail(email.value)) {
            setError('emailError', 'Please enter a valid email');
        }

        // Validate password
        if (password.value === '') {
            setError('passwordError', 'Password is required');
        } else if (password.value.length < 6) {
            setError('passwordError', 'Password must be at least 6 characters');
        }

        // Validate confirm password
        if (confirmPassword.value === '') {
            setError('confirmPasswordError', 'Please confirm your password');
        } else if (confirmPassword.value !== password.value) {
            setError('confirmPasswordError', 'Passwords do not match');
        }

        // If no errors, form is valid
        if (!document.querySelector('.error-message').textContent) {
            alert('Registration successful!');
            form.reset();
        }
    }

    function setError(id, message) {
        document.getElementById(id).textContent = message;
    }

    function resetErrors() {
        document.querySelectorAll('.error-message').forEach(error => error.textContent = '');
    }

    function isValidEmail(email) {
        const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return re.test(String(email).toLowerCase());
    }
});