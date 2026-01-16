const kgInput = document.getElementById("kgInput");
const resultDiv = document.getElementById("result");

kgInput.addEventListener("input", function() {
    const kg = parseFloat(kgInput.value);
    if (!isNaN(kg)) {
        const pounds = (kg * 2.20462).toFixed(2);
        resultDiv.textContent = `${kg} кг = ${pounds} фунтів`;
    } else {
        resultDiv.textContent = "";
    }
});

