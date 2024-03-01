const cardArray = [
  {
    name: "bird",
    img: "images/nature-bird-wing-pen-wildlife-beak-919521-pxhere.com.jpg",
  },
  {
    name: "bear",
    img: "images/nature-black-and-white-white-sweet-atmosphere-animal-1116888-pxhere.com.jpg",
  },
  {
    name: "rodent",
    img: "images/nature-cute-wildlife-fur-brown-mammal-926826-pxhere.com.jpg",
  },
  {
    name: "ladybug",
    img: "images/nature-grass-leaf-flower-environment-green-1147971-pxhere.com.jpg",
  },
  {
    name: "horse",
    img: "images/nature-pasture-horse-mammal-stallion-mane-1116607-pxhere.com.jpg",
  },
  {
    name: "butterfly",
    img: "images/nature-wing-white-photography-animal-green-1151931-pxhere.com.jpg",
  },
  //   {
  //     name: "random",
  //     img: "images/pattern-line-geometric-geometry-umbrella-stripe-1294-pxhere.com.jpg",
  //   },
  //   {
  //     name: "correct",
  //     img: "images/grungy-wood-texture-plank-leaf-number-1057048-pxhere.com.jpg",
  //   },
  {
    name: "bird",
    img: "images/nature-bird-wing-pen-wildlife-beak-919521-pxhere.com.jpg",
  },
  {
    name: "bear",
    img: "images/nature-black-and-white-white-sweet-atmosphere-animal-1116888-pxhere.com.jpg",
  },
  {
    name: "rodent",
    img: "images/nature-cute-wildlife-fur-brown-mammal-926826-pxhere.com.jpg",
  },
  {
    name: "ladybug",
    img: "images/nature-grass-leaf-flower-environment-green-1147971-pxhere.com.jpg",
  },
  {
    name: "horse",
    img: "images/nature-pasture-horse-mammal-stallion-mane-1116607-pxhere.com.jpg",
  },
  {
    name: "butterfly",
    img: "images/nature-wing-white-photography-animal-green-1151931-pxhere.com.jpg",
  },
];
let cardsChosen = [];
let cardsChosenIds = [];
const cardsWon = [];
const cardMatchImg =
  "images/grungy-wood-texture-plank-leaf-number-1057048-pxhere.com.jpg";
const cardResetImg =
  "images/pattern-line-geometric-geometry-umbrella-stripe-1294-pxhere.com.jpg";

cardArray.sort(() => 0.5 - Math.random());

const gridDisplay = document.querySelector("#grid");
const resultDisplay = document.querySelector("#result");

const createBoard = () => {
  for (let i = 0; i < cardArray.length; i++) {
    const card = document.createElement("img");

    card.setAttribute("src", cardResetImg);
    card.setAttribute("dataId", i);
    card.addEventListener("click", flipCard);

    gridDisplay.appendChild(card);
  }
};

const checkMatch = () => {
  const cards = document.querySelectorAll("img");
  const optionOne = cardsChosenIds[0];
  const optionTwo = cardsChosenIds[1];

  if (optionOne == optionTwo) alert("You have clicked the same image");

  if (cardsChosen[0] === cardsChosen[1] && optionOne != optionTwo) {
    cards[optionOne].setAttribute("src", cardMatchImg);
    cards[optionTwo].setAttribute("src", cardMatchImg);

    cards[optionOne].removeEventListener("click", flipCard);
    cards[optionTwo].removeEventListener("click", flipCard);
    cardsWon.push(cardsChosen);
  } else {
    cards[optionOne].setAttribute("src", cardResetImg);
    cards[optionTwo].setAttribute("src", cardResetImg);
  }

  cardsChosen = [];
  cardsChosenIds = [];

  if (cardsWon.length === cardArray.length / 2) {
    resultDisplay.innerHTML = "All pairs found!";
  } else if (cardsWon.length !== 0) {
    resultDisplay.innerHTML = `${cardsWon.length} pair/s`;
  }
};

function flipCard() {
  const cardId = this.getAttribute("dataId");
  const card = cardArray[cardId];

  cardsChosen.push(card.name);
  cardsChosenIds.push(cardId);

  this.setAttribute("src", card.img);
  if (cardsChosen.length === 2) {
    setTimeout(checkMatch, 500);
  }
}

createBoard();
