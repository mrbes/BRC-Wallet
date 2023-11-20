
document.getElementById('fetch-blockchain-info').addEventListener('click', function() {
    fetchBlockchainInfo();
});

document.getElementById('fetch-wallet-balance').addEventListener('click', function() {
    fetchWalletBalance();
});

function fetchBlockchainInfo() {
    // ... existing code for fetching blockchain info ...
}

function fetchWalletBalance() {
    const address = document.getElementById('wallet-address').value;
    if (!address) {
        alert('Veuillez entrer une adresse BTC valide.');
        return;
    }

    const apiURL = `https://open-api.unisat.io/v1/indexer/address/${address}/balance`;
    const headers = {
        'Authorization': 'Bearer 2f82139a704b3a87befedba996c1d72c87b6f7e45e4cd953f09645641c68599d',
        'Content-Type': 'application/json'
    };

    fetch(apiURL, { headers: headers })
        .then(response => response.json())
        .then(data => {
            if (data && data.data && data.data.btcSatoshi !== undefined) {
                const balanceInBTC = data.data.btcSatoshi / 100000000; // Convert Satoshi to BTC
                document.getElementById('wallet-balance').textContent = 'Solde: ' + balanceInBTC + ' BTC';
            } else {
                document.getElementById('wallet-balance').textContent = 'Solde non disponible';
            }
        })
        .catch(error => {
            console.error('Error:', error);
            document.getElementById('wallet-balance').textContent = 'Erreur lors de la récupération du solde';
        });
}
