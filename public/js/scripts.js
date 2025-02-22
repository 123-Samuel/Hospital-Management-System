document.getElementById('loginForm').addEventListener('submit', async (e) => {
    e.preventDefault();
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    try {
        const response = await fetch('/api/auth/login', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ username, password }),
        });
        const result = await response.json();

        if (response.ok) {
            alert('Login successful!');
            window.location.href = 'dashboard.html';
        } else {
            alert(result.message || 'Login failed!');
        }
    } catch (error) {
        console.error('Error:', error);
        alert('An error occurred during login.');
    }
});
