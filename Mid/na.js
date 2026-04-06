let b = document.createElement("p");
b.innerHTML = " Hello!";
b.classList.add("text");

let div = document.createElement("div");
div.classList.add("div1");
div.appendChild(b);
document.body.appendChild(div);

