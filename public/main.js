// public/main.js
document.addEventListener('DOMContentLoaded', () => {
    const loginForm = document.querySelector('.login-box form');

    loginForm.addEventListener('submit', async (e) => {
        e.preventDefault();
        const email = e.target.querySelector('input[type="email"]').value;
        const password = e.target.querySelector('input[type="password"]').value;

        const response = await fetch('/auth/login', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ email, password })
        });

        const data = await response.json();
        if (response.ok) {
            alert('Login successful!');
            // Optionally, save the token to localStorage or redirect
            localStorage.setItem('token', data.token);
        } else {
            alert('Login failed: ' + data.error);
        }
    });

    // Add similar logic for registration and password recovery if needed
});
