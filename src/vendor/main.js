const cardBtn = document.getElementById("card__btn");
const activeBtn = document.getElementById("active__btn");

const toogle = (btn) => {
  const active = document.getElementById("active");
  btn.addEventListener("click", () => {
    active.classList.toggle("active");
  });
};

toogle(cardBtn);
toogle(activeBtn);
