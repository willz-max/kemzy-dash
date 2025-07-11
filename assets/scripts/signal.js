   function openModal(signalName, gain, risk, trades, invCapital) {
            document.getElementById('modalSignalName').textContent = signalName;
            document.getElementById('modalUsername').textContent = signalName;
            document.getElementById('modalGain').textContent = gain;
            document.getElementById('modalTrades').textContent = trades;
            document.getElementById('modalRisk').textContent = risk;
            document.getElementById('requiredDeposit').textContent = invCapital;
            
            // Update risk styling
            const riskElement = document.getElementById('modalRisk');
            riskElement.className = 'risk-level risk-' + risk;
            
            document.getElementById('subscribeModal').style.display = 'block';
        }

        function closeModal() {
            document.getElementById('subscribeModal').style.display = 'none';
        }

        // Close modal when clicking outside
        window.onclick = function(event) {
            const modal = document.getElementById('subscribeModal');
            if (event.target === modal) {
                closeModal();
            }
        }

        // Add smooth scrolling and animations
        document.addEventListener('DOMContentLoaded', function() {
            // Animate cards on scroll
            const cards = document.querySelectorAll('.signal-card');
            
            const observer = new IntersectionObserver((entries) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        entry.target.style.animation = 'fadeInUp 0.6s ease forwards';
                    }
                });
            });

            cards.forEach(card => {
                observer.observe(card);
            });

            // Add CSS for fadeInUp animation
            const style = document.createElement('style');
            style.textContent = `
                @keyframes fadeInUp {
                    from {
                        opacity: 0;
                        transform: translateY(30px);
                    }
                    to {
                        opacity: 1;
                        transform: translateY(0);
                    }
                }
            `;
            document.head.appendChild(style);
        });

        // Chat button functionality
        // document.querySelector('.chat-button').addEventListener('click', function() {
        //     alert('Chat functionality would be implemented here');
        // });

        // Notification icons functionality
        document.querySelectorAll('.notification-icon').forEach(icon => {
            icon.addEventListener('click', function() {
                this.style.background = 'rgba(0, 123, 255, 0.3)';
                setTimeout(() => {
                    this.style.background = 'rgba(255, 255, 255, 0.2)';
                }, 300);
            });
        });