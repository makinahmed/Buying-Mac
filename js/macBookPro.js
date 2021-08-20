
// getting defaultPrices

function defaultPrice(productOrService) {
    let productOrServiceElement = document.getElementById(productOrService + '-cost');
    productOrServiceElement.innerText = 0;

}

document.getElementById('defalut-memory-price').addEventListener('click', function () {
    defaultPrice('memory')
    updateTotal()
})
document.getElementById('defalut-storage-price').addEventListener('click', function () {
    defaultPrice('storage')
    updateTotal()
})
document.getElementById('free-delivery-cost').addEventListener('click', function () {
    defaultPrice('delivery')
    updateTotal()
})

 

// updating memo

function settingPrice(productOrService, productOrServiceTypes) {
    let productOrServiceElement = document.getElementById(productOrService + '-cost')
    if (productOrServiceTypes == '16gbMemory') {
        productOrServiceElement.innerText = 180;

    }
    else if (productOrServiceTypes == '512gbSsd') {
        productOrServiceElement.innerText = 100;

    }
    else if (productOrServiceTypes == '1tbSsd') {
        productOrServiceElement.innerText = 180;

    }
    else if (productOrServiceTypes == 'service') {
        productOrServiceElement.innerText = 20;

    }

}

//getting total 


function updateTotal() {
    let bestPrice = document.getElementById('best-price')
    let memoryCost = document.getElementById('memory-cost')
    let storageCost = document.getElementById('storage-cost')
    let deliveryCost = document.getElementById('delivery-cost')
    let totalPrice = document.getElementById('total-price')
    let withOrWithoutTotal = document.getElementById('withOrwithout-promo-code-total-price')

    let totalAmount = parseInt(memoryCost.innerText) + parseInt(storageCost.innerText) + parseInt(deliveryCost.innerText) + parseInt(bestPrice.innerText)
    totalPrice.innerText = totalAmount;
    withOrWithoutTotal.innerText = totalAmount;
    return totalAmount;

}

document.getElementById('unified-memory-16GB').addEventListener('click', function () {
    settingPrice('memory', '16gbMemory')
    updateTotal()
})

document.getElementById('ssd-storage-512gb').addEventListener('click', function () {
    settingPrice('storage', '512gbSsd')
    updateTotal()
})
document.getElementById('ssd-storage-1tb').addEventListener('click', function () {
    settingPrice('storage', '1tbSsd')
    updateTotal()
})
document.getElementById('early-delivery').addEventListener('click', function () {
    settingPrice('delivery', 'service')
    updateTotal()
})

// promo code 

document.getElementById('promo-code-submit-btn').addEventListener('click', function () {
    let promoTotalPrice = document.getElementById('withOrwithout-promo-code-total-price');
    let promoCodeInput = document.getElementById('promo-code')
    let totalPriceWithoutPromoCode = updateTotal()
    let reduce20Percent = (totalPriceWithoutPromoCode * (20 / 100))
    if (promoCodeInput.value = 'stevekaku') {
        promoTotalPrice.innerText = totalPriceWithoutPromoCode - reduce20Percent;
        promoCodeInput.value = ''
    }
})