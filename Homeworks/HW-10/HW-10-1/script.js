document.getElementById("submit-button").addEventListener("click", function() {
    const name = document.getElementById("name").value;
    const surname = document.getElementById("surname").value;
    const age = document.getElementById("age").value;

    const resultDiv = document.getElementById("result");
    resultDiv.textContent = `Ім'я: ${name}, Прізвище: ${surname}, Вік: ${age}`;
});

