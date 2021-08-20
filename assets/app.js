// update cost function
function updateMainCost(option, price){
    const previousCost = document.getElementById(option + '-cost');
    const previousCostNumber = parseInt(previousCost.innerText);

    previousCost.innerText = price;

    calculateTotalPrice(option, previousCostNumber);
}

// calculate total price function
function calculateTotalPrice(option, previousPrice){
    const previousTotal = document.getElementById('total-price');
    const previousTotalNumber = parseInt(previousTotal.innerText);

    const currentBaseCost = document.getElementById(option + '-cost');
    const currentPriceNumber = parseInt(currentBaseCost.innerText);

    let currentMainTotal = 0;

    console.log(previousPrice, parseInt(currentBaseCost.innerText));

    if (previousPrice < currentPriceNumber){
        currentMainTotal = previousTotalNumber + (currentPriceNumber - previousPrice);
    }
    else if (previousPrice > currentPriceNumber){
        currentMainTotal = previousTotalNumber - (previousPrice - currentPriceNumber);
    }
    else{
        currentMainTotal = previousTotalNumber;
    }
    
    previousTotal.innerText = currentMainTotal;

    //update TOTAL work here
    document.getElementById('total-final-price').innerText = currentMainTotal;
}

// using promo then calculate final price 
function applyPromo(code){
    const totalSetCost = document.getElementById('total-price');
    const totalCostNumber = parseFloat(totalSetCost.innerText);

    const finalMainPrice = document.getElementById('total-final-price');
    const finalMainPriceNumber = parseFloat(finalMainPrice.innerText);

    const promoInput = document.getElementById('promo-code');
    
    const afterApplyCode = finalMainPriceNumber - (finalMainPriceNumber * 0.2)

    if (code == promoInput.value && finalMainPriceNumber == totalCostNumber){
        finalMainPrice.innerText = afterApplyCode;
    }
    promoInput.value = '';
}

// memory even handaler
document.getElementById('memory-8GB').addEventListener('click', function(){

    updateMainCost('memory', 0);
})
document.getElementById('memory-16GB').addEventListener('click', function(){
    
    updateMainCost('memory', 180);
})

// ssd even handaler
document.getElementById('ssd-256BG').addEventListener('click', function(){
    
    updateMainCost('ssd', 0);
})
document.getElementById('ssd-512BG').addEventListener('click', function(){
    
    updateMainCost('ssd', 100);
})
document.getElementById('ssd-1TB').addEventListener('click', function(){
    
    updateMainCost('ssd', 180);
})

// delivery even handaler
document.getElementById('delivery-free').addEventListener('click', function () {
    
    updateMainCost('delivery', 0);
})
document.getElementById('delivery-pay').addEventListener('click', function () {
    
    updateMainCost('delivery', 20);
})

//promo code even handaler
document.getElementById('promo-button').addEventListener('click', function(){
    applyPromo('stevekaku');
})