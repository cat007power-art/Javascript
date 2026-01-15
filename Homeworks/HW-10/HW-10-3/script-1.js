const sessionsList = JSON.parse(localStorage.getItem("sessionsList")) || [];

const listElement = document.getElementById("sessions");
sessionsList.forEach(session => {
    const li = document.createElement("li");
    li.textContent = session;
    listElement.appendChild(li);
});

