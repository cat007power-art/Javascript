function exchange(sumUAH, currencyValues, exchangeCurrency) {
    const currencyObj = currencyValues.find(
        item => item.currency === exchangeCurrency
    );
    if (currencyObj) {
        return sumUAH / currencyObj.value;
    }
    return 'not found';
}
console.log(
    exchange(10000, [{ currency: 'USD', value: 25 }, { currency: 'EUR', value: 42 }], 'USD')
);


