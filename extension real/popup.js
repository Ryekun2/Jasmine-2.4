
async function fetchTrendingCoins() {
  try {
    const response = await fetch('https://api.coingecko.com/api/v3/search/trending');
    const data = await response.json();
    const coinList = document.getElementById('coin-list');
    
    const topCoins = data.coins.slice(0, 5);
    
    topCoins.forEach(coin => {
      const listItem = document.createElement('li');
      listItem.innerHTML = `
        <strong>${coin.item.name}</strong> (${coin.item.symbol})
        <br>Rank: ${coin.item.market_cap_rank}
      `;
      coinList.appendChild(listItem);
    });
  } catch (error) {
    console.error('Error fetching coins:', error);
  }
}

fetchTrendingCoins();
