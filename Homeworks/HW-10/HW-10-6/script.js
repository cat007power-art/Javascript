document.getElementById("generate").addEventListener("click", function() {
    const rows = parseInt(document.getElementById("rows").value);
    const cells = parseInt(document.getElementById("cells").value);
    const content = document.getElementById("content").value;

    const table = document.createElement("table");

    for (let i = 0; i < rows; i++) {
        const tr = document.createElement("tr");
        for (let j = 0; j < cells; j++) {
            const td = document.createElement("td");
            td.textContent = content;
            tr.appendChild(td);
        }
        table.appendChild(tr);
    }


    const container = document.getElementById("tableContainer");
    container.innerHTML = ""; // очищаємо попередню таблицю
    container.appendChild(table);
});

