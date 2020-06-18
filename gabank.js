//DOM Strings/Object identifiers
var amount = document.querySelector('#number');
var withdraw = document.querySelector('#withdraw');
var deposit = document.querySelector('#deposit');
var balance = document.querySelector('#balance');

//Functions
var depositCash = function() {
	balance.textContent = Number(balance.textContent) + Number(amount.value);
	amount.value = ""
};

var withdrawCash = function() {
    var bal = Number(balance.textContent);
    var amt = Number(amount.value);

    if (amt > bal) {
		alert('Incorrect withdrawal - not enough funds!');
		amount.value = "";
    } else if (amt % 5 !== 0) {
		alert('Incorrect withdrawal - must be multiple of 5');
		amount.value = "";
	} else {	
		balance.textContent = Number(balance.textContent) - Number(amount.value);
		amount.value = "";
    }
};

//Events
deposit.addEventListener('click', depositCash);
withdraw.addEventListener('click', withdrawCash);