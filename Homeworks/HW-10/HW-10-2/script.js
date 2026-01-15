let count = localStorage.getItem("counter");

if (count === null) {
    count = 0;
}
count++;
localStorage.setItem("counter", count);

document.getElementById("counter").textContent = count;

