

async function fetchBTCSummary() {
  const res = await fetch('https://api.coingecko.com/api/v3/coins/bitcoin');
  const data = await res.json();
  const market = data.market_data;
  const btc_current_price = market.current_price.usd;
  console.log(btc_current_price);
  const your_asset_btc = document.querySelector('.btc').innerHTML;
  const asset_value_btc = btc_current_price * Number(your_asset_btc);
  document.querySelector('.your_total_btc').textContent = asset_value_btc.toFixed(3)


  const res_eth = await fetch('https://api.coingecko.com/api/v3/coins/ethereum');
  const data_eth = await res_eth.json();
  const market_eth = data_eth.market_data;
  const eth_current_price = market_eth.current_price.usd;
  console.log(eth_current_price);
  const your_asset_eth = document.querySelector('.eth').innerHTML;
  const asset_value_eth = eth_current_price * Number(your_asset_eth);
  document.querySelector('.your_total_eth').textContent = asset_value_eth.toFixed(3)


  const res_bnb = await fetch('https://api.coingecko.com/api/v3/coins/binancecoin');
  const data_bnb = await res_bnb.json();
  const market_bnb = data_bnb.market_data;
  const bnb_current_price = market_bnb.current_price.usd;
  console.log(bnb_current_price);
  const your_asset_bnb = document.querySelector('.bnb').innerHTML;
  const asset_value_bnb = bnb_current_price * Number(your_asset_bnb);
  document.querySelector('.your_total_bnb').textContent = asset_value_bnb.toFixed(3)

  const res_usdt = await fetch('https://api.coingecko.com/api/v3/coins/tether');
  const data_usdt = await res_usdt.json();
  const market_usdt = data_usdt.market_data;
  const usdt_current_price = market_usdt.current_price.usd;
  console.log(usdt_current_price);
  const your_asset_usdt = document.querySelector('.usdt').innerHTML;
  const asset_value_usdt = usdt_current_price * Number(your_asset_usdt);
  document.querySelector('.your_total_usdt').textContent = asset_value_usdt.toFixed(3)

  const grandTotal = Number(asset_value_btc.toFixed(3)) + Number(asset_value_eth.toFixed(3)) + Number(asset_value_bnb.toFixed(3)) + Number(asset_value_usdt.toFixed(3));
  document.querySelector('.grandTotal').textContent = grandTotal.toFixed(3)  
//   console.log(grandtotal);
  
  

  

}

console.log(document.querySelector('.your_total_eth').innerHTML);




// window.onload = () => {
//   fetchBTCSummary();

// };

document.addEventListener('DOMContentLoaded', function() {
    const dropdown = document.querySelector('.dropdown');
    const dropbtn = document.querySelector('.dropbtn');
    const dropdownContent = document.querySelector('.dropdown-content');

    
    dropbtn.addEventListener('click', function(event) {
        event.preventDefault(); 
        dropdown.classList.toggle('active');
    });

    
    document.addEventListener('click', function(event) {
        if (!dropdown.contains(event.target)) {
            dropdown.classList.remove('active');
        }
    });

    
    dropdownContent.querySelectorAll('a').forEach(item => {
        item.addEventListener('click', function() {
            dropdown.classList.remove('active');
        });
    });
});