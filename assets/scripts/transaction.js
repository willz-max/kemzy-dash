        // Filter functionality
        const filterTabs = document.querySelectorAll('.filter-tab');
        const transactions = document.querySelectorAll('.transaction-item');
        document.querySelector('.failed-i').style.display = "none";
        document.querySelector('.success-i').style.display = "none";
        document.querySelector('.back-btn').addEventListener('click',goBack)

        filterTabs.forEach(tab => {
            tab.addEventListener('click', () => {
                filterTabs.forEach(t => t.classList.remove('active'));
                tab.classList.add('active');
                
                const filter = tab.dataset.filter;
                transactions.forEach(transaction => {
                    if (filter === 'all' || transaction.dataset.type === filter) {
                        transaction.style.display = 'flex';
                    } else {
                        transaction.style.display = 'none';
                    }
                });
            });
        });

        // Transaction click handler
        transactions.forEach(transaction => {
            transaction.addEventListener('click', () => {
                showReceipt(transaction);
            });
        });

        function showReceipt(transaction) {
            const modal = document.getElementById('receiptModal');
            const type = transaction.dataset.type;
            const currency = transaction.dataset.currency;
            const amount = transaction.dataset.amount;
            const usd = transaction.dataset.usd;
            const hash = transaction.dataset.hash;
            const date = transaction.dataset.date;
            // const fee = transaction.dataset.fee;

            // Update receipt content
            document.getElementById('receiptAmount').textContent = `${amount} ${currency}`;
            // document.getElementById('receiptNetwork').textContent = `${currency} Network`;
            document.getElementById('receiptTo').textContent = hash;
            document.getElementById('receiptDate').textContent = formatDate(date);
            // document.getElementById('receiptFee').textContent = fee;
            document.getElementById('receiptHash').textContent = `0xa9f3...bb78`;

            // Update status
            const statusEl = document.getElementById('receiptStatus');
            const statusValueEl = document.getElementById('receiptStatusValue');
            
            if (type === 'failed') {
                statusEl.textContent = 'Transaction Failed';
                statusEl.className = 'receipt-status failed';
                statusValueEl.textContent = 'Failed';
                statusValueEl.style.color = '#ff3b30';
                 document.querySelector('.success-i').style.display = "none";
                 document.querySelector('.failed-i').style.display = "flex";
            } else {
                statusEl.textContent = 'Transaction Successful';
                statusEl.className = 'receipt-status success';
                statusValueEl.textContent = 'Confirmed';
                statusValueEl.style.color = '#34c759';
                document.querySelector('.failed-i').style.display = "none";
                 document.querySelector('.success-i').style.display = "flex";
            }

            // Update amount color
            const amountEl = document.getElementById('receiptAmount');
            if (type === 'received') {
                amountEl.style.color = '#34c759';
            } else if (type === 'failed') {
                amountEl.style.color = '#ff3b30';
                amountEl.style.opacity = '0.6';
            } else {
                amountEl.style.color = '#ff3b30';
            }

            modal.classList.add('active');
        }

        function closeReceipt() {
            document.getElementById('receiptModal').classList.remove('active');
        }

        function copyToClipboard(elementId) {
            const element = document.getElementById(elementId);
            const text = element.textContent.replace('Copy', '').trim();
            
            navigator.clipboard.writeText(text).then(() => {
                // Show feedback (you could add a toast notification here)
                console.log('Copied to clipboard:', text);
            });
        }

        function formatDate(dateString) {
            if (dateString.includes('mins ago') || dateString.includes('hour ago') || dateString.includes('hours ago')) {
                const now = new Date();
                return `${now.toLocaleDateString('en-US', {month: 'short', day: 'numeric', year: 'numeric'})} ${now.toLocaleTimeString('en-US', {hour: '2-digit', minute: '2-digit'})}`;
            }
            return dateString;
        }

        // Close modal when clicking outside
        document.getElementById('receiptModal').addEventListener('click', (e) => {
            if (e.target.id === 'receiptModal') {
                closeReceipt();
            }
        });

        // Close modal with Escape key
        document.addEventListener('keydown', (e) => {
            if (e.key === 'Escape') {
                closeReceipt();
            }
        });
        function goBack() {
            window.history.back();
        }