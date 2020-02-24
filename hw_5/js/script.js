let crypto = [  
	{    
		name : "Bitcoin",    
		price: 1388.37  
	},  
	{  
		name : "Ethereum",    
		price: 716  
	},  
	{    
		name : "Litecoin",    
		price: 140  
	}
]

const bitcoin = document.querySelector('.bitcoin');
const ethereum = document.querySelector('.ethereum');
const litecoin = document.querySelector('.litecoin');

const bitcoinWidth = crypto[0].price+'px';
const ethereumWidth = crypto[1].price+'px';
const litecoinWidth = crypto[2].price+'px';

const bitcoinPrice = document.querySelector('.bitcoinPrice');
const ethereumPrice = document.querySelector('.ethereumPrice');
const litecoinPrice = document.querySelector('.litecoinPrice');

bitcoin.style.width = bitcoinWidth;
ethereum.style.width = ethereumWidth;
litecoin.style.width = litecoinWidth;

bitcoinPrice.innerHTML = crypto[0].price;
ethereumPrice.innerHTML = crypto[1].price;
litecoinPrice.innerHTML = crypto[2].price;