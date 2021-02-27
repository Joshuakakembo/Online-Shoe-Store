

let covid19data;

(function onLoad()
{
    // set a function for each button
    setButtonFunctions();

    // fetch from each API when the page loads

    getCurrencyExchangeRates();

    verifyProduct();
    
})();

function setButtonFunctions()
{
    document.getElementById('buttonVerify').onclick = verifyProduct;
    
    document.getElementById('buttonCurrency').onclick = getCurrencyExchangeRates;
    
   
}


// Currency Exchange rates
async function getCurrencyExchangeRates()
{
    var from = document.getElementById('inputCurrencyFrom').value;
    var to = document.getElementById('inputCurrencyTo').value;
    var amount = document.getElementById('amount').value;
    await fetch(`https://fixer-fixer-currency-v1.p.rapidapi.com/convert?from=${from}&to=${to}&amount=${amount}`, {
        "method": "GET",
        "headers": {
            "x-rapidapi-key": "bba26e8b4amsh8e0728636054391p18de23jsn678f21bfc383",
            "x-rapidapi-host": "fixer-fixer-currency-v1.p.rapidapi.com"
        }
    })
    .then(response => response.json())
    .then(response => {
        console.log("Currency Exchange API object:");
        console.log(response);
        console.log("\n");

        // display data
        document.getElementById('currencyResult').innerHTML = 'Result: ' + response.result;
        document.getElementById('rate').innerHTML = 'Rate: ' + response.info.rate;
        document.getElementById('date').innerHTML = 'Date: ' + response.date;
        
    })
    .catch(err => {
        console.log(err);
    });
}

// VERIFY PRODUCT

async function verifyProduct()
{
  
    var barcode = document.getElementById('barcode').value;
    await fetch(`https://ean-lookup.p.rapidapi.com/api?op=barcode-lookup&ean=${barcode}&format=json`, {
	"method": "GET",
	"headers": {
		"x-rapidapi-key": "bba26e8b4amsh8e0728636054391p18de23jsn678f21bfc383",
		"x-rapidapi-host": "ean-lookup.p.rapidapi.com"
	}
})
.then(response => response.json())

    .then(response => 

          
        {
        console.log("Verify Product:");
        console.log(response);
        console.log("\n");

    
        // display data
        document.getElementById('barcode').innerHTML = 'Barcode: ' + response[0].barcode;
        document.getElementById('name').innerHTML = 'Name: ' + response[0].name;

        document.getElementById('country').innerHTML = 'IssuingCountry: ' + response[0].issuingCountry;
        
})
.catch(err => {
	console.error(err);
});
}

