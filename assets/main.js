let ratingSection = document.querySelector(".rate");
let thanksSection = document.querySelector(".thanks");

let rateBtns = document.querySelectorAll(".btn--rate");
let thanksRating = document.querySelector(".thanks--rating"),
  displayRate = thanksRating.querySelector("span");

let yourRate;

rateBtns.forEach((btn) => {
  btn.addEventListener("click", () => {
    btn.classList.toggle("selected");
    yourRate = btn.innerHTML;
  });
});

const showThanks = () => {
  if (yourRate != "") {
    ratingSection.style.display = "none";
    thanksSection.style.display = "block";
    displayRate.textContent = yourRate;
  }

  setTimeout(() => {
    ratingSection.style.display = "block";
    thanksSection.style.display = "none";
    rateBtns.forEach((btn) => btn.classList.remove("selected"));
    yourRate = "";
  }, 6000);
};
