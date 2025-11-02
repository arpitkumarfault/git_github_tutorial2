 const form = document.getElementById('registerForm');
    const messageDiv = document.getElementById('message');

    form.addEventListener('submit', function(e) {
      e.preventDefault();
      messageDiv.textContent = '';
      messageDiv.classList.remove('error');

      const username = form.username.value.trim();
      const email = form.email.value.trim();
      const password = form.password.value;

      // Basic validation
      if (username.length < 3) {
        messageDiv.textContent = 'Username must be at least 3 characters long.';
        messageDiv.classList.add('error');
        return;
      }

      if (!validateEmail(email)) {
        messageDiv.textContent = 'Please enter a valid email address.';
        messageDiv.classList.add('error');
        return;
      }

      if (password.length < 6) {
        messageDiv.textContent = 'Password must be at least 6 characters long.';
        messageDiv.classList.add('error');
        return;
      }

      // If valid, show success
      messageDiv.textContent = 'Registration successful! Welcome, ' + username + '.';
      form.reset();
    });

    function validateEmail(email) {
      // Basic email regex pattern
      const pattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      return pattern.test(email);
    }