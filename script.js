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
const card = document.querySelector("body > main > div > div > div > div:nth-child(1) > div")
console.log(card)

function changerCouleur()
{
    this.style.backgroundColor = '#FF0000';
}