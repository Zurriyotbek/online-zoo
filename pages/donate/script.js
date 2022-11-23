let amountInput = document.getElementById("amount-input");
let amountLabel = document.querySelector(".donation-feed__form__amount");
let listAmount = document.querySelector(".donation-feed__amount__list");
let itemsListAmount = document.querySelectorAll(".donation-feed__amount__item");

amountInput.addEventListener("input", (e) => {
  if (e.target.value.length > 4) {
    amountLabel.classList.add("donation-feed__form__amount--invalid");
  }
  if (e.target.value.length <= 4) {
    amountLabel.classList.remove("donation-feed__form__amount--invalid");
  }
});
