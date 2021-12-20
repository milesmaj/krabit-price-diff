let kraken = {};
let upbit = {};

let krakenPairs = {
    'XLM': 'XXLMZUSD',
    'TRX': 'TRXUSD',
    'EOS': 'EOSUSD'
}

let coins = ['XLM', 'TRX', 'EOS']

const getKraken = (coin) => {
    fetch("https://crossorigin.me/https://api.kraken.com/0/public/Trades?pair=" + krakenPairs[coin])
        .then(response => response.json())
        .then(data => kraken[coin] = data["result"][krakenPairs[coin]])
}