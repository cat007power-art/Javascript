const data = [];
for (let i = 1; i <= 100; i++) {
    data.push({ id: i, value: `object ${i}` });
}
const listDiv = document.getElementById("list");
const prevBtn = document.getElementById("prev");
const nextBtn = document.getElementById("next");

let currentPage = 0;
const pageSize = 10;

function renderPage() {
    listDiv.innerHTML = "";
    const start = currentPage * pageSize;
    const end = start + pageSize;
    const pageItems = data.slice(start, end);

    pageItems.forEach(item => {
        const div = document.createElement("div");
        div.className = "item";
        div.textContent = `${item.id}: ${item.value}`;
        listDiv.appendChild(div);
    });
}


nextBtn.addEventListener("click", () => {
    if ((currentPage + 1) * pageSize < data.length) {
        currentPage++;
        renderPage();
    }
});
prevBtn.addEventListener("click", () => {
    if (currentPage > 0) {
        currentPage--;
        renderPage();
    }
});

renderPage();
