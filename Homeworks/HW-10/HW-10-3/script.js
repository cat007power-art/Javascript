let sessionsList = JSON.parse(localStorage.getItem("sessionsList")) || [];

const now = new Date();
sessionsList.push(now.toLocaleString());

localStorage.setItem("sessionsList", JSON.stringify(sessionsList));

