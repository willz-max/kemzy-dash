 document.querySelector('.back-button').addEventListener('click',goBack);
 function goBack() {
            window.history.back();
        }

        document.querySelector('.copy-button').addEventListener('click',copyAddress);

        function copyAddress() {
            const address = "0x7F5D2F7f99177f4a9D2f7f99177f";
            navigator.clipboard.writeText(address).then(() => {
                showCopyNotification();
            }).catch(() => {
                const textArea = document.createElement('textarea');
                textArea.value = address;
                document.body.appendChild(textArea);
                textArea.select();
                document.execCommand('copy');
                document.body.removeChild(textArea);
                showCopyNotification();
            });
        }

        function showCopyNotification() {
            const notification = document.getElementById('copyNotification');
            notification.classList.add('show');
            setTimeout(() => {
                notification.classList.remove('show');
            }, 2000);
        }

        // function editProfile() {
        //     alert('Edit Profile functionality would be implemented here');
        // }

        // function openSecurity() {
        //     alert('Security settings would open here');
        // }

        // function openNotifications() {
        //     alert('Notification settings would open here');
        // }

        // function openPaymentMethods() {
        //     alert('Payment methods would open here');
        // }

        // function openPreferences() {
        //     alert('Preferences would open here');
        // }

        // function openHelp() {
        //     alert('Help & Support would open here');
        // }

        // function logout() {
        //     if (confirm('Are you sure you want to logout?')) {
        //         alert('Logout functionality would be implemented here');
        //     }
        // }

      
        document.querySelectorAll('.menu-item').forEach(item => {
            item.addEventListener('click', function() {
                this.style.transform = 'scale(0.98)';
                setTimeout(() => {
                    this.style.transform = 'scale(1)';
                }, 100);
            });
        });