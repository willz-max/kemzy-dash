 function togglePassword() {
            const passwordInput = document.getElementById('password');
            const toggleBtn = document.querySelector('.password-toggle');
            
            if (passwordInput.type === 'password') {
                passwordInput.type = 'text';
                toggleBtn.innerHTML = '<i class="fa fa-eye-slash" aria-hidden="true"></i>';
            } else {
                passwordInput.type = 'password';
                toggleBtn.innerHTML = '<i class="fa fa-eye" aria-hidden="true"></i>';
            }
        }

     

        document.getElementById('loginForm').addEventListener('submit', function(e) {
            e.preventDefault();
            const email = document.getElementById('email').value;
            const password = document.getElementById('password').value;
            
            if (email && password) {
                // Add loading state
                const btn = document.querySelector('.login-btn');
                btn.textContent = 'Signing in...';
                btn.disabled = true;
                
                // Simulate login process
                setTimeout(() => {
                    btn.textContent = 'Sign In';
                    btn.disabled = false;
                }, 2000);
            }
        });

        // Add focus animations
        document.querySelectorAll('input').forEach(input => {
            input.addEventListener('focus', function() {
                this.parentElement.style.transform = 'scale(1.02)';
            });
            
            input.addEventListener('blur', function() {
                this.parentElement.style.transform = 'scale(1)';
            });
        });