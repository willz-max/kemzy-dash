document.querySelector('.refresh-btn').addEventListener('click',refreshTransactions);
document.querySelector('.back-btn').addEventListener('click',goBack)

function filterTransactions(type) {
           
            document.querySelectorAll('.filter-tab').forEach(tab => {
                tab.classList.remove('active');
            });
            event.target.classList.add('active');

            
            const transactions = document.querySelectorAll('.transaction-item');
            const emptyState = document.getElementById('emptyState');
            let visibleCount = 0;

            transactions.forEach(transaction => {
                const transactionType = transaction.getAttribute('data-type');
                if (type === 'all' || transactionType === type) {
                    transaction.classList.remove('hidden');
                    visibleCount++;
                } else {
                    transaction.classList.add('hidden');
                }
            });

          
            if (visibleCount === 0) {
                emptyState.classList.remove('hidden');
            } else {
                emptyState.classList.add('hidden');
            }
        }

        function goBack() {
            window.history.back();
        }

        

        function refreshTransactions() {
           
            const refreshBtn = document.querySelector('.refresh-btn');
            const refreshIcon = document.querySelector('.refresh-icon');
            
            refreshBtn.style.opacity = '0.6';
            refreshIcon.style.animationDuration = '0.5s';
            
            setTimeout(() => {
                refreshBtn.style.opacity = '1';
                refreshIcon.style.animationDuration = '2s';
                console.log('Transactions refreshed');
            }, 1000);
        }

      
        document.addEventListener('DOMContentLoaded', function() {
            
            document.querySelectorAll('.transaction-item').forEach(item => {
                item.addEventListener('click', function(e) {
                    const ripple = document.createElement('div');
                    ripple.style.position = 'absolute';
                    ripple.style.borderRadius = '50%';
                    ripple.style.background = 'rgba(255, 255, 255, 0.1)';
                    ripple.style.transform = 'scale(0)';
                    ripple.style.animation = 'ripple 0.6s linear';
                    ripple.style.left = (e.clientX - item.offsetLeft) + 'px';
                    ripple.style.top = (e.clientY - item.offsetTop) + 'px';
                    
                    item.style.position = 'relative';
                    item.appendChild(ripple);
                    
                    setTimeout(() => {
                        ripple.remove();
                    }, 600);
                });
            });
        });

    
        const style = document.createElement('style');
        style.textContent = `
            @keyframes ripple {
                to {
                    transform: scale(4);
                    opacity: 0;
                }
            }
        `;
        document.head.appendChild(style);