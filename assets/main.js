let ratingSection = document.querySelector(".rate");
let thanksSection = document.querySelector(".thanks");

let rateBtns = document.querySelectorAll(".btn--rate");
let thanksRating = document.querySelector(".thanks--rating"),
  displayRate = thanksRating.querySelector("span");

let yourRate;

rateBtns.forEach((btn) => {
  btn.addEventListener("click", () => {
    removeSelected();
    btn.classList.toggle("selected");
    yourRate = btn.innerHTML;
  });
});

const removeSelected = () => {
  rateBtns.forEach((btn) => {
    btn.classList.remove("selected");
  });
};

const showThanks = () => {
  //  rateBtns.map((x) => console.log(x));
  // console.log(rateBtns);
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
