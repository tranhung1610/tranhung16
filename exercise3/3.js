document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('subscriptionForm');

    form.addEventListener('submit', function(e) {
        e.preventDefault();

        const name = document.getElementById('name').value;
        const email = document.getElementById('email').value;
        const gender = document.querySelector('input[name="gender"]:checked');
        const tos = document.getElementById('tos').checked;

        if (!name || !email || !gender || !tos) {
            alert('Name must be at least 3 character');
        
            return;

        }

        if (!isValidEmail(email)) {
            alert('Email must be contain @ and domain.');
            return;
        }

        if  (!choosesub(radio)) {
            alert('At least one interest must be selected.');
        }

       
            alert(`successful.`);
            form.reset();
    });

    function isValidEmail(email) {
        const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return re.test(email);
    }
});