const block = document.createElement("div");
block.classList.add("wrap", "collapse", "alpha", "beta");
block.textContent = "lorem";

document.body.appendChild(block);

const clone = block.cloneNode(true);
clone.textContent = "lorem2";

document.body.appendChild(clone);


