        document.addEventListener('DOMContentLoaded', () => {
            const signalCardsContainer = document.getElementById('signal-cards-container');
            const subscriptionModal = document.getElementById('subscription-modal');
            const closeModalBtn = document.getElementById('close-modal-btn');
            const closeModalBtnBottom = document.getElementById('close-modal-btn-bottom');

            const modalSignalNameMain = document.getElementById('modal-signal-name-main');
            const modalSignalNameInner = document.getElementById('modal-signal-name-inner');
            const modalSignalUsernameInner = document.getElementById('modal-signal-username-inner');
            const modalSignalGain = document.getElementById('modal-signal-gain');
            const modalSignalRisk = document.getElementById('modal-signal-risk');
            const modalSignalTrades = document.getElementById('modal-signal-trades');
            const modalSignalInvCapital = document.getElementById('modal-signal-inv-capital');
            const modalRiskNo = document.getElementById('modal-risk-no'); // Assuming 'No.' refers to risk level again
            const modalCopiers = document.getElementById('modal-copiers');
            const modalDuration = document.getElementById('modal-duration');
            const modalDepositRequired = document.getElementById('modal-deposit-required');

            const signals = [
                {
                    name: "Edison Signal",
                    username: "@Edison Signal",
                    gain: "30.0%",
                    risk: 3,
                    trades: 1540,
                    invCapital: "$20000.00",
                    copiers: 105,
                    duration: "15 Days"
                },
                {
                    name: "BTC miner s10 data circuits",
                    username: "@BTC miner s10 data circuits",
                    gain: "8.0%",
                    risk: 3,
                    trades: 765,
                    invCapital: "$3000.00",
                    copiers: 181,
                    duration: "15 Days"
                },
                {
                    name: "Wall Street Signals",
                    username: "@Wall Street Signals",
                    gain: "10.0%",
                    risk: 2,
                    trades: 2500,
                    invCapital: "$10000.00",
                    copiers: 435,
                    duration: "30 Days"
                },
                {
                    name: "Trend signals",
                    username: "@Trend signals",
                    gain: "8.0%",
                    risk: 3,
                    trades: 411,
                    invCapital: "$5000.00",
                    copiers: 146,
                    duration: "7 Days"
                },
                {
                    name: "Pipmen Signals",
                    username: "@Pipmen Signals",
                    gain: "37.0%",
                    risk: 2,
                    trades: 876,
                    invCapital: "$50000.00",
                    copiers: 102,
                    duration: "60 Days"
                },
                {
                    name: "BTC Trend Signal",
                    username: "@BTC Trend Signal",
                    gain: "40.0%",
                    risk: 3,
                    trades: 265,
                    invCapital: "$100000.00",
                    copiers: 98,
                    duration: "90 Days"
                },
                {
                    name: "Breakout signal",
                    username: "@Breakout signal",
                    gain: "35.0%",
                    risk: 2,
                    trades: 1411,
                    invCapital: "$60000.00",
                    copiers: 139,
                    duration: "30 Days"
                },
                {
                    name: "Jonathan H. Wage",
                    username: "@Jonathan H. Wage",
                    gain: "20.0%",
                    risk: 3,
                    trades: 953854,
                    invCapital: "$50000.00",
                    copiers: 32,
                    duration: "180 Days"
                },
                {
                    name: "Golden Sweeps",
                    username: "@Golden Sweeps",
                    gain: "10.0%",
                    risk: 2,
                    trades: 5275000,
                    invCapital: "$10000.00",
                    copiers: 121,
                    duration: "45 Days"
                }
            ];

            function getRiskColorClass(riskLevel) {
                switch (riskLevel) {
                    case 1: return "text-green-500";
                    case 2: return "text-yellow-500";
                    case 3: return "text-red-500";
                    default: return "text-gray-400";
                }
            }

            // Function to create a signal card
            function createSignalCard(signal) {
                const cardDiv = document.createElement('div');
                cardDiv.className = "signal-card"; // Apply custom CSS class
                cardDiv.innerHTML = `
                    <div>
                        <h3>${signal.name}</h3>
                        <p class="username">${signal.username}</p>

                        <div class="stats-grid">
                            <div class="stat-item">
                                <span class="stat-value text-green-500">${signal.gain}</span>
                                <span class="stat-label">Gain</span>
                            </div>
                            <div class="stat-item">
                                <span class="stat-value ${getRiskColorClass(signal.risk)}">${signal.risk}</span>
                                <span class="stat-label">Risk</span>
                            </div>
                            <div class="stat-item">
                                <span class="stat-value text-gray-200">${signal.trades}</span>
                                <span class="stat-label">Trades</span>
                            </div>
                            <div class="stat-item">
                                <span class="stat-value text-gray-200">${signal.invCapital}</span>
                                <span class="stat-label">Inv. Capital</span>
                            </div>
                        </div>
                        <p class="copiers">${signal.copiers} Copiers</p>
                    </div>
                    <button class="subscribe-btn">
                        SUBSCRIBE
                    </button>
                `;

                const subscribeBtn = cardDiv.querySelector('.subscribe-btn');
                subscribeBtn.addEventListener('click', () => openSubscriptionModal(signal));

                return cardDiv;
            }

            // Function to populate and open the modal
            function openSubscriptionModal(signal) {
                modalSignalNameMain.textContent = `Subscribe to ${signal.name}`;
                modalSignalNameInner.textContent = signal.name;
                modalSignalUsernameInner.textContent = signal.username;
                modalSignalGain.textContent = signal.gain;
                modalSignalRisk.textContent = signal.risk;
                modalSignalRisk.className = `stat-value ${getRiskColorClass(signal.risk)}`; // Apply risk color class
                modalSignalTrades.textContent = signal.trades;
                modalSignalInvCapital.textContent = signal.invCapital;
                modalRiskNo.textContent = signal.risk; // Assuming 'No.' refers to risk level again
                modalRiskNo.className = `stat-value ${getRiskColorClass(signal.risk)}`;
                modalCopiers.textContent = signal.copiers;
                modalDuration.textContent = signal.duration || "N/A"; // Use a default if duration isn't found

                const requiredDeposit = parseFloat(signal.invCapital.replace(/[^0-9.-]+/g,""));
                modalDepositRequired.textContent = `You need to deposit $${requiredDeposit.toFixed(2)} to subscribe.`;

                subscriptionModal.classList.remove('hidden'); // Show the modal
            }

            // Function to close the modal
            function closeSubscriptionModal() {
                subscriptionModal.classList.add('hidden'); // Hide the modal
            }

            // Event listeners for closing the modal
            closeModalBtn.addEventListener('click', closeSubscriptionModal);
            closeModalBtnBottom.addEventListener('click', closeSubscriptionModal);

            // Close modal if clicking outside (optional)
            subscriptionModal.addEventListener('click', (e) => {
                if (e.target === subscriptionModal) {
                    closeSubscriptionModal();
                }
            });

            // Render all signal cards
            signals.forEach(signal => {
                signalCardsContainer.appendChild(createSignalCard(signal));
            });
        });