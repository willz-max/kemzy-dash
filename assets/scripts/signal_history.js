  const sampleData = [
            {
                traderName: "Edison Signal",
                investmentAmount: 1000,
                profitEarned: 150,
                startDate: "2024-01-15",
                endDate: "2024-02-15",
                status: "completed"
            },
            {
                traderName: "Wall Street Signals",
                investmentAmount: 500,
                profitEarned: 75,
                startDate: "2024-02-01",
                endDate: "2024-03-01",
                status: "active"
            },
            {
                traderName: "Pipmen Signals",
                investmentAmount: 2000,
                profitEarned: -100,
                startDate: "2024-01-20",
                endDate: "2024-02-20",
                status: "closed"
            },
            {
                traderName: "BTC Trend Signal",
                investmentAmount: 750,
                profitEarned: 200,
                startDate: "2024-02-10",
                endDate: "2024-03-10",
                status: "active"
            },
            {
                traderName: "Golden Sweeps",
                investmentAmount: 1500,
                profitEarned: 300,
                startDate: "2024-01-25",
                endDate: "2024-02-25",
                status: "completed"
            }
        ];

        let currentData = [];
        let filteredData = [];

        function formatCurrency(amount) {
            return new Intl.NumberFormat('en-US', {
                style: 'currency',
                currency: 'USD'
            }).format(amount);
        }

        function formatDate(dateString) {
            return new Date(dateString).toLocaleDateString('en-US', {
                year: 'numeric',
                month: 'short',
                day: 'numeric'
            });
        }

        function getStatusBadge(status) {
            const statusClasses = {
                'active': 'status-active',
                'completed': 'status-completed',
                'closed': 'status-closed'
            };
            return `<span class="status-badge ${statusClasses[status] || 'status-closed'}">${status}</span>`;
        }

        function getProfitClass(profit) {
            if (profit > 0) return 'profit-positive';
            if (profit < 0) return 'profit-negative';
            return 'profit-neutral';
        }

        function updateSummaryCards() {
            const totalInvestment = filteredData.reduce((sum, item) => sum + item.investmentAmount, 0);
            const totalProfit = filteredData.reduce((sum, item) => sum + item.profitEarned, 0);

            document.querySelector('.profits-card .card-amount').textContent = formatCurrency(totalProfit);
            document.querySelector('.investment-card .card-amount').textContent = formatCurrency(totalInvestment);
        }

        function renderTable() {
            const tbody = document.getElementById('historyTableBody');
            const emptyState = document.getElementById('emptyState');

            if (filteredData.length === 0) {
                tbody.innerHTML = '';
                emptyState.style.display = 'block';
                return;
            }

            emptyState.style.display = 'none';
            
            tbody.innerHTML = filteredData.map(item => `
                <tr>
                    <td>${item.traderName}</td>
                    <td>${formatCurrency(item.investmentAmount)}</td>
                    <td class="${getProfitClass(item.profitEarned)}">${formatCurrency(item.profitEarned)}</td>
                    <td>${formatDate(item.startDate)}</td>
                    <td>${formatDate(item.endDate)}</td>
                    <td>${getStatusBadge(item.status)}</td>
                </tr>
            `).join('');
        }

        function applyFilters() {
            const statusFilter = document.getElementById('statusFilter').value;
            const dateFilter = document.getElementById('dateFilter').value;

            filteredData = currentData.filter(item => {
                // Status filter
                if (statusFilter !== 'all' && item.status !== statusFilter) {
                    return false;
                }

                // Date filter
                if (dateFilter !== 'all') {
                    const itemDate = new Date(item.startDate);
                    const now = new Date();
                    
                    switch(dateFilter) {
                        case 'today':
                            return itemDate.toDateString() === now.toDateString();
                        case 'week':
                            const weekAgo = new Date(now.getTime() - 7 * 24 * 60 * 60 * 1000);
                            return itemDate >= weekAgo;
                        case 'month':
                            return itemDate.getMonth() === now.getMonth() && itemDate.getFullYear() === now.getFullYear();
                        case 'year':
                            return itemDate.getFullYear() === now.getFullYear();
                    }
                }

                return true;
            });

            renderTable();
            updateSummaryCards();
        }

        function refreshData() {
            // Simulate API call
            const refreshBtn = document.querySelector('.refresh-btn');
            refreshBtn.innerHTML = '🔄 Refreshing...';
            refreshBtn.disabled = true;

            setTimeout(() => {
                // In a real app, this would fetch from an API
                loadData();
                refreshBtn.innerHTML = '🔄 Refresh';
                refreshBtn.disabled = false;
            }, 1000);
        }

        function loadData() {
            // In a real application, this would be an API call
            currentData = [...sampleData];
            filteredData = [...currentData];
            renderTable();
            updateSummaryCards();
        }

        // Initialize
        document.addEventListener('DOMContentLoaded', function() {
            loadData();

            // Add event listeners for filters
            document.getElementById('statusFilter').addEventListener('change', applyFilters);
            document.getElementById('dateFilter').addEventListener('change', applyFilters);
        });

        // For demonstration, you can uncomment the line below to show empty state
        // currentData = [];
        // filteredData = [];