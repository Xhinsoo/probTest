const recruitBtn = document.querySelector(".btn");
const recruitBox = document.querySelector(".imgSrc");
const inventory = document.querySelector(".inventory");
const newUl = document.querySelector(".inventoryList");

function recruitManager() {
  let brilliantBlessing = Math.random().toFixed(2);
  if (brilliantBlessing > 0.7) {
    recruitBox.src = `./assets/images/${
      imgFiveArray[Math.floor(Math.random() * imgFiveArray.length)]
    }`;
    return recruitBox.src;
  } else {
    recruitBox.src = `./assets/images/${
      imgFourArray[Math.floor(Math.random() * imgFourArray.length)]
    }`;
    return recruitBox.src;
  }
}

const imgFiveArray = [
  "five1.jpg",
  "five2.jpg",
  "five3.jpg",
  "five4.jpg",
  "five5.jpg",
];
const imgFourArray = ["four1.jpg", "four2.jpg", "four3.jpg"];

function addToInventory() {
  const newLi = document.createElement("LI");
  newLi.innerText = `${recruitManager()}`;
  newUl.appendChild(newLi);
}

recruitBtn.addEventListener("click", (e) => {
  e.preventDefault();
  recruitManager();
  addToInventory();
});
