var basketPrice = 0;
Basket = [{name:'jacket', price:100}, {name:'coat', price:50}, {name:'shoes', price:100}];
Basket.push({name:'skirt', price:75});

function countBasketPrice(x) {
    for (var i = 0; i<Basket.length; i++) {
        basketPrice = basketPrice + Basket[i].price;
    }
    return basketPrice;
}

console.log(countBasketPrice());