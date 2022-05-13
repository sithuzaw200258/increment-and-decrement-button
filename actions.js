const minus = document.querySelector(".minus"),
    num = document.querySelector(".num"),
    plus = document.querySelector(".plus");

let quantity = 1;

minus.addEventListener("click", () => {
    if (quantity > 1) {
        quantity--;
        quantity = (quantity < 10) ? "0" + quantity : quantity;
        num.innerText = quantity;
    }
})

plus.addEventListener("click", () => {
    quantity++;
    quantity = (quantity < 10) ? "0" + quantity : quantity;
    num.innerText = quantity;
})