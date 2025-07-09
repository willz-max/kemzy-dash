// const priceElem = document.getElementById('btc-price');
// const highElem = document.getElementById('high');
// const lowElem = document.getElementById('low');
// const volumeElem = document.getElementById('volume');
// const marketcapElem = document.getElementById('marketcap');
// const supplyElem = document.getElementById('supply');

// let btcChart;

// async function fetchBTCData(days = 7) {
//   const marketRes = await fetch(`https://api.coingecko.com/api/v3/coins/bitcoin/market_chart?vs_currency=usd&days=${days}`);
//   const data = await marketRes.json();

//   const labels = data.prices.map(p => {
//     const date = new Date(p[0]);
//     return days === 1 ? `${date.getHours()}:00` : date.toLocaleDateString();
//   });

//   const prices = data.prices.map(p => p[1]);

//   if (btcChart) btcChart.destroy();

//   const ctx = document.getElementById('btcChart').getContext('2d');
//   btcChart = new Chart(ctx, {
//     type: 'line',
//     data: {
//       labels,
//       datasets: [{
//         label: 'BTC Price',
//         data: prices,
//         borderColor: '#00ffcc',
//         tension: 0.3,
//         fill: false
//       }]
//     },
//     options: {
//       plugins: {
//         legend: { display: false }
//       },
//       scales: {
//         x: { display: true },
//         y: { display: true }
//       }
//     }
//   });
// }

// async function fetchBTCSummary() {
//   const res = await fetch('https://api.coingecko.com/api/v3/coins/bitcoin');
//   const data = await res.json();
//   const market = data.market_data;
//   console.log(market);
  

//   priceElem.textContent = `$${market.current_price.usd.toLocaleString()}`;
//   highElem.textContent = `$${market.high_24h.usd.toLocaleString()}`;
//   lowElem.textContent = `$${market.low_24h.usd.toLocaleString()}`;
//   volumeElem.textContent = `$${market.total_volume.usd.toLocaleString()}`;
//   marketcapElem.textContent = `$${market.market_cap.usd.toLocaleString()}`;
//   supplyElem.textContent = `${market.circulating_supply.toLocaleString()} BTC`;
// }

// document.getElementById('btn-7d').addEventListener('click', () => {
//   fetchBTCData(7);
// });

// document.getElementById('btn-1d').addEventListener('click', () => {
//   fetchBTCData(1);
// });

// window.onload = () => {
//   fetchBTCSummary();
//   fetchBTCData(7);
// };


// second test

document.addEventListener('DOMContentLoaded', function() {
    const dropdown = document.querySelector('.dropdown');
    const dropbtn = document.querySelector('.dropbtn');
    const dropdownContent = document.querySelector('.dropdown-content');

    // Toggle dropdown on click
    dropbtn.addEventListener('click', function(event) {
        event.preventDefault(); // Prevent default link behavior
        dropdown.classList.toggle('active');
    });

    // Close the dropdown if the user clicks outside of it
    document.addEventListener('click', function(event) {
        if (!dropdown.contains(event.target)) {
            dropdown.classList.remove('active');
        }
    });

    // Optional: Close dropdown when a dropdown item is clicked
    dropdownContent.querySelectorAll('a').forEach(item => {
        item.addEventListener('click', function() {
            dropdown.classList.remove('active');
        });
    });
});