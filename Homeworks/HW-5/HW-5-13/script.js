const exchange = (sumUAH, currencyValues, exchangeCurrency) => {
    const rateObj = currencyValues.find(item => item.currency === exchangeCurrency);
    if (rateObj) {
        return sumUAH / rateObj.value;
    }
    return null;
};
const result = exchange(
    10000,
    [{ currency: 'USD', value: 40 }, { currency: 'EUR', value: 42 }],
    'USD'
);
console.log(result);
