// Fonctionnalité 1
const footer1 = document.querySelector('footer');
let a = 0;
footer1.addEventListener('click', function printClick(){
    console.log(`clic numéro ${++a}`);
});


// Fonctionnalité 2
const hamburger = document.querySelector(".navbar-toggler");
console.log(hamburger);

const onClickBtn = function () {
  let class_to_toggle = document.getElementById("navbarHeader");
  console.log(class_to_toggle);
  class_to_toggle.classList.toggle("collapse");
};

hamburger.addEventListener("click", onClickBtn);


// Fonctionnalité 3
const cardText = document.querySelector("body > main > div > div > div > div:nth-child(1) > div > div > p")
console.log(cardText)
const editButton = document.querySelector("body > main > div > div > div > div:nth-child(1) > div > div > div > div > button.btn.btn-sm.btn-outline-secondary")
console.log(editButton)

const onClickBtnEdit = function () {
  cardText.style.color = "red"
};
editButton.addEventListener("click", onClickBtnEdit);


// Fonctionnalité 4
const cardTextTwo = document.querySelector("body > main > div > div > div > div:nth-child(2) > div > div > p")
console.log(cardTextTwo)
const editButtonTwo = document.querySelector("body > main > div > div > div > div:nth-child(2) > div > div > div > div > button.btn.btn-sm.btn-outline-secondary")
console.log(editButtonTwo)

const onClickBtnEditTwo = function () {
  if (cardTextTwo.style.color === 'green') {
    cardTextTwo.style.color = '';
  } else {
    cardTextTwo.style.color = 'green';
  }
};
editButtonTwo.addEventListener("click", onClickBtnEditTwo);