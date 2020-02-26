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

const bitcoinName = document.querySelector('.bitcoinName');
const ethereumName = document.querySelector('.ethereumName');
const litecoinName = document.querySelector('.litecoinName');

const bitcoinPrice = document.querySelector('.bitcoinPrice');
const ethereumPrice = document.querySelector('.ethereumPrice');
const litecoinPrice = document.querySelector('.litecoinPrice');

const maxPrice = Math.max(crypto[0].price, crypto[1].price, crypto[2].price);

if(crypto[0].price == maxPrice) {
	var bitcoinWidth = '100%';
}else {
	var bitcoinWidth = crypto[0].price / maxPrice * 100;
}

if(crypto[1].price == maxPrice) {
	var ethereumWidth = '100%';
}else {
	var ethereumWidth = crypto[1].price / maxPrice * 100 +'%';
}

if(crypto[2].price == maxPrice) {
	var litecoinWidth = '100%';
}else {
	var litecoinWidth = crypto[2].price / maxPrice * 100 +'%';
}

bitcoin.style.width = bitcoinWidth;
ethereum.style.width = ethereumWidth;
litecoin.style.width = litecoinWidth;

bitcoinPrice.innerHTML = crypto[0].price;
ethereumPrice.innerHTML = crypto[1].price;
litecoinPrice.innerHTML = crypto[2].price;

bitcoinName.innerHTML = crypto[0].name;
ethereumName.innerHTML = crypto[1].name;
litecoinName.innerHTML = crypto[2].name;