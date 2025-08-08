function showError(fieldId, message) {
            const field = document.getElementById(fieldId);
            const errorElement = document.getElementById(fieldId + 'Error');
            
            field.closest('.form-group').classList.add('error');
            errorElement.textContent = message;
            errorElement.style.display = 'block';
        }

        function hideError(fieldId) {
            const field = document.getElementById(fieldId);
            const errorElement = document.getElementById(fieldId + 'Error');
            
            field.closest('.form-group').classList.remove('error');
            errorElement.style.display = 'none';
        }

        function validateField(fieldId, validationFn) {
            const field = document.getElementById(fieldId);
            const value = field.value.trim();
            
            if (validationFn(value)) {
                hideError(fieldId);
                return true;
            } else {
                return false;
            }
        }

        function checkPasswordStrength(password) {
            const strengthIndicator = document.getElementById('passwordStrength');
            let strength = 0;
            
            if (password.length >= 8) strength++;
            if (password.match(/[a-z]/) && password.match(/[A-Z]/)) strength++;
            if (password.match(/[0-9]/)) strength++;
            if (password.match(/[^a-zA-Z0-9]/)) strength++;
            
            if (strength < 2) {
                strengthIndicator.textContent = 'Weak password';
                strengthIndicator.className = 'password-strength strength-weak';
            } else if (strength < 4) {
                strengthIndicator.textContent = 'Medium password';
                strengthIndicator.className = 'password-strength strength-medium';
            } else {
                strengthIndicator.textContent = 'Strong password';
                strengthIndicator.className = 'password-strength strength-strong';
            }
        }

        function showPrivacyPolicy() {
            alert('Privacy Policy would be displayed here');
        }

        
        // Real-time validation
        document.getElementById('firstName').addEventListener('blur', function() {
            if (!this.value.trim()) {
                showError('firstName', 'Please enter your first name');
            } else {
                hideError('firstName');
            }
        });

        document.getElementById('lastName').addEventListener('blur', function() {
            if (!this.value.trim()) {
                showError('lastName', 'Please enter your last name');
            } else {
                hideError('lastName');
            }
        });

        document.getElementById('username').addEventListener('blur', function() {
            const username = this.value.trim();
            if (!username) {
                showError('username', 'Please choose a username');
            } else if (username.length < 3) {
                showError('username', 'Username must be at least 3 characters long');
            } else {
                hideError('username');
            }
        });

        document.getElementById('email').addEventListener('blur', function() {
            const email = this.value.trim();
            const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            if (!email) {
                showError('email', 'Please enter your email address');
            } else if (!emailRegex.test(email)) {
                showError('email', 'Please enter a valid email address');
            } else {
                hideError('email');
            }
        });

        document.getElementById('password').addEventListener('input', function() {
            const password = this.value;
            checkPasswordStrength(password);
            
            if (password.length < 8) {
                showError('password', 'Password must be at least 8 characters long');
            } else {
                hideError('password');
            }
        });

        document.getElementById('confirmPassword').addEventListener('input', function() {
            const password = document.getElementById('password').value;
            const confirmPassword = this.value;
            
            if (confirmPassword && password !== confirmPassword) {
                showError('confirmPassword', 'Passwords do not match');
            } else if (confirmPassword) {
                hideError('confirmPassword');
            }
        });

        document.getElementById('agreement').addEventListener('change', function() {
            if (this.checked) {
                hideError('agreement');
            }
        });

        document.getElementById('signupForm').addEventListener('submit', function(e) {
            e.preventDefault();
            
            // Reset all errors
            document.querySelectorAll('.error-message').forEach(el => el.style.display = 'none');
            document.querySelectorAll('.form-group').forEach(el => el.classList.remove('error'));
            
            let hasErrors = false;
            
            // Validate all fields
            const firstName = document.getElementById('firstName').value.trim();
            const lastName = document.getElementById('lastName').value.trim();
            const username = document.getElementById('username').value.trim();
            const email = document.getElementById('email').value.trim();
            const password = document.getElementById('password').value;
            const confirmPassword = document.getElementById('confirmPassword').value;
            const agreement = document.getElementById('agreement').checked;
            
            if (!firstName) {
                showError('firstName', 'Please enter your first name');
                hasErrors = true;
            }
            
            if (!lastName) {
                showError('lastName', 'Please enter your last name');
                hasErrors = true;
            }
            
            if (!username) {
                showError('username', 'Please choose a username');
                hasErrors = true;
            } else if (username.length < 3) {
                showError('username', 'Username must be at least 3 characters long');
                hasErrors = true;
            }
            
            if (!email) {
                showError('email', 'Please enter your email address');
                hasErrors = true;
            } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
                showError('email', 'Please enter a valid email address');
                hasErrors = true;
            }
            
            if (!password) {
                showError('password', 'Please enter a password');
                hasErrors = true;
            } else if (password.length < 8) {
                showError('password', 'Password must be at least 8 characters long');
                hasErrors = true;
            }
            
            if (!confirmPassword) {
                showError('confirmPassword', 'Please confirm your password');
                hasErrors = true;
            } else if (password !== confirmPassword) {
                showError('confirmPassword', 'Passwords do not match');
                hasErrors = true;
            }
            
            if (!agreement) {
                showError('agreement', 'Please agree to the Privacy Policy and Terms of Service');
                hasErrors = true;
            }
            
            if (hasErrors) {
                return;
            }
            
            // Add loading state
            const btn = document.querySelector('.signup-btn');
            btn.textContent = 'Creating account...';
            btn.disabled = true;
            
            // Simulate signup process
            setTimeout(() => {
                document.getElementById('successMessage').style.display = 'block';
                btn.textContent = 'Create Account';
                btn.disabled = false;
                
                // Reset form
                document.getElementById('signupForm').reset();
                document.getElementById('passwordStrength').textContent = '';
            }, 2000);
        });

        // Add focus animations
        document.querySelectorAll('input').forEach(input => {
            input.addEventListener('focus', function() {
                this.closest('.form-group').style.transform = 'scale(1.02)';
            });
            
            input.addEventListener('blur', function() {
                this.closest('.form-group').style.transform = 'scale(1)';
            });
        });