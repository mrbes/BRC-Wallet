
document.getElementById('fetch-data').addEventListener('click', function() {
    const address = document.getElementById('wallet-address').value;
    if (address) {
        fetchBlockchainInfo();
        fetchWalletBalance(address);
        fetchAddressHistory(address);
    } else {
        alert('Veuillez entrer une adresse BTC valide.');
    }
});

function fetchBlockchainInfo() {
    const apiURL = 'https://open-api.unisat.io/v1/indexer/blockchain/info';
    const headers = { 'Authorization': 'Bearer YOUR_API_KEY' };

    fetch(apiURL, { headers: headers })
        .then(response => response.json())
        .then(data => {
            document.getElementById('blockchain-info').textContent = JSON.stringify(data, null, 2);
        })
        .catch(error => console.error('Error fetching blockchain info:', error));
}

function fetchWalletBalance(address) {
    const apiURL = `https://open-api.unisat.io/v1/indexer/address/${address}/balance`;
    const headers = { 'Authorization': 'Bearer YOUR_API_KEY' };

    fetch(apiURL, { headers: headers })
        .then(response => response.json())
        .then(data => {
            document.getElementById('wallet-balance').textContent = JSON.stringify(data, null, 2);
        })
        .catch(error => console.error('Error fetching wallet balance:', error));
}

function fetchAddressHistory(address) {
    const apiURL = `https://open-api.unisat.io/v1/indexer/address/${address}/history`;
    const headers = { 'Authorization': 'Bearer YOUR_API_KEY' };

    fetch(apiURL, { headers: headers })
        .then(response => response.json())
        .then(data => {
            document.getElementById('address-history').textContent = JSON.stringify(data, null, 2);
        })
        .catch(error => console.error('Error fetching address history:', error));
}
