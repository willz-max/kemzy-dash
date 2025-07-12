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


  function addSampleTrade() {
            const tbody = document.getElementById('tradeTableBody');
            const emptyState = document.querySelector('.empty-state');
            
            const sampleTrades = [
                {
                    trx: 'TRX001',
                    orderDate: '2024-01-15',
                    pair: 'BTC/USDT',
                    tradeDate: '2024-01-15',
                    trader: 'John Trader',
                    amount: '$1,000.00',
                    profit: '+$150.00',
                    profitClass: 'profit-positive',
                    status: 'Completed',
                    statusClass: 'status-completed'
                },
                {
                    trx: 'TRX002',
                    orderDate: '2024-01-14',
                    pair: 'ETH/USDT',
                    tradeDate: '2024-01-14',
                    trader: 'Jane Smith',
                    amount: '$500.00',
                    profit: '-$25.00',
                    profitClass: 'profit-negative',
                    status: 'Completed',
                    statusClass: 'status-completed'
                },
                {
                    trx: 'TRX003',
                    orderDate: '2024-01-13',
                    pair: 'ADA/USDT',
                    tradeDate: '2024-01-13',
                    trader: 'Mike Johnson',
                    amount: '$750.00',
                    profit: '$0.00',
                    profitClass: 'profit-neutral',
                    status: 'Pending',
                    statusClass: 'status-pending'
                }
            ];

            // If you want to show sample data, uncomment the following:
            /*
            sampleTrades.forEach(trade => {
                const row = document.createElement('tr');
                row.innerHTML = `
                    <td>${trade.trx}</td>
                    <td>${trade.orderDate}<br><small>${trade.pair}</small></td>
                    <td>${trade.tradeDate}</td>
                    <td>${trade.trader}</td>
                    <td>${trade.amount}</td>
                    <td class="${trade.profitClass}">${trade.profit}</td>
                    <td><span class="status-badge ${trade.statusClass}">${trade.status}</span></td>
                `;
                tbody.appendChild(row);
            });
            
            emptyState.style.display = 'none';
            */
        }

        // Function to update stats
        function updateStats(profits, investment) {
            const profitElement = document.querySelector('.stat-card.profits .stat-value');
            const investmentElement = document.querySelector('.stat-card.investment .stat-value');
            
            profitElement.textContent = `$${profits.toFixed(2)}`;
            investmentElement.textContent = `$${investment.toFixed(2)}`;
        }

        // Initialize the page
        document.addEventListener('DOMContentLoaded', function() {
            // You can call addSampleTrade() here if you want to show sample data
            // addSampleTrade();
            
            // Update stats with real data
            updateStats(0, 0);
        });

        // ongoing
                const sampleTrades = [
            {
                trx: "TRX001",
                orderDate: "2024-01-15",
                pair: "EURUSD",
                entryDate: "2024-01-15",
                trader: "John Doe",
                amount: "$1,000",
                currentPnL: "+$45.50",
                entryPrice: "1.0854",
                status: "active"
            },
            {
                trx: "TRX002",
                orderDate: "2024-01-14",
                pair: "GBPUSD",
                entryDate: "Pending",
                trader: "Jane Smith",
                amount: "$500",
                currentPnL: "$0.00",
                entryPrice: "1.2650",
                status: "pending"
            }
        ];

        // Function to render trades (you can call this when you have data)
        function renderTrades(trades) {
            const tableBody = document.querySelector('.table-body');
            
            if (trades.length === 0) {
                tableBody.innerHTML = `
                    <div class="empty-state">
                        <div class="empty-icon">📊</div>
                        <div class="empty-text">No ongoing trades</div>
                    </div>
                `;
                return;
            }

            const tradesHTML = trades.map(trade => `
                <div class="trade-row">
                    <div>${trade.trx}</div>
                    <div class="pair-cell">${trade.orderDate} | ${trade.pair}</div>
                    <div>${trade.entryDate}</div>
                    <div>${trade.trader}</div>
                    <div class="amount-cell">${trade.amount}</div>
                    <div class="${trade.currentPnL.includes('+') ? 'profit-positive' : trade.currentPnL.includes('-') ? 'profit-negative' : 'profit-neutral'}">${trade.currentPnL}</div>
                    <div>${trade.entryPrice}</div>
                    <div>
                        <span class="status-badge status-${trade.status}">
                            <span class="status-dot"></span>
                            ${trade.status.charAt(0).toUpperCase() + trade.status.slice(1)}
                        </span>
                    </div>
                </div>
            `).join('');

            tableBody.innerHTML = tradesHTML;
        }

        // Update stats
        function updateStats(activeTrades, pendingOrders) {
            // document.querySelector('.stat-card.active .stat-value').textContent = activeTrades;
            // document.querySelector('.stat-card.pending .stat-value').textContent = pendingOrders;
        }

        // Example of how to use with sample data (uncomment to test)
        // renderTrades(sampleTrades);
        // updateStats(1, 1);

        document.querySelector('.trade-btn').addEventListener('click', function() {
            window.history.back();
        } );


        // ai bot