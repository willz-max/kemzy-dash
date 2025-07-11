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

        // for the heeader

        function toggleDropdown() {
            const dropdown = document.getElementById('dropdownMenu');
            const arrow = document.querySelector('.dropdown-arrow');

            dropdown.classList.toggle('show');
            arrow.classList.toggle('open');
        }

        
        document.addEventListener('click', function (event) {
            const dropdown = document.querySelector('.profile-dropdown');
            const menu = document.getElementById('dropdownMenu');

            if (!dropdown.contains(event.target)) {
                menu.classList.remove('show');
                document.querySelector('.dropdown-arrow').classList.remove('open');
            }
        });


        document.addEventListener('DOMContentLoaded', function() {
    
    const urlBar = document.querySelector('.url-bar');

    
    if (urlBar) {
    
        urlBar.addEventListener('click', function() {
    
            const textToCopy = urlBar.textContent.trim(); 

            if (navigator.clipboard && navigator.clipboard.writeText) {
                navigator.clipboard.writeText(textToCopy)
                    .then(() => {
                     
                        const originalText = urlBar.textContent;
                        urlBar.textContent = 'Copied to clipboard!'; 
                        setTimeout(() => {
                            urlBar.textContent = originalText; 
                        }, 1500);
                        console.log('Text copied to clipboard successfully!');
                    })
                    .catch(err => {
                        console.error('Failed to copy text using navigator.clipboard: ', err);
                       
                        fallbackCopyToClipboard(textToCopy);
                    });
            } else {
                
                fallbackCopyToClipboard(textToCopy);
            }
        });
    }

    

    
    function fallbackCopyToClipboard(text) {
        const textArea = document.createElement("textarea");
        textArea.value = text;

        
        textArea.style.position = "fixed";
        textArea.style.left = "-9999px";
        textArea.style.top = "0";

        document.body.appendChild(textArea);
        textArea.focus();
        textArea.select(); 

        try {
            const successful = document.execCommand('copy');
            const msg = successful ? 'successful' : 'unsuccessful';
            console.log('Fallback copy command was ' + msg);

            const originalText = urlBar.textContent;
            urlBar.textContent = 'Copied!';
            setTimeout(() => {
                urlBar.textContent = originalText;
            }, 1500);

        } catch (err) {
            console.error('Oops, unable to copy using fallback', err);
            
        } finally {
            document.body.removeChild(textArea); 
        }
    }
});


document.querySelector(".profile-trigger").addEventListener("click", toggleDropdown); 
document.querySelector(".trade-btn").addEventListener('click',()=>{window.location.href = 'signal_history.html'});