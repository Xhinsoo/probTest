const recruitBtn = document.querySelector(".btn");
const recruitBox = document.querySelector(".imgSrc");
const inventory = document.querySelector(".inventory");
const newUl = document.querySelector(".inventoryList");
const probBtn = document.querySelector(".probButton");

//recruit manager ()
function recruitManager() {
  let brilliantBlessing = Math.random().toFixed(2);

  let fiveIndex = imgFiveArray[Math.floor(Math.random() * imgFiveArray.length)];
  let fourIndex = imgFourArray[Math.floor(Math.random() * imgFourArray.length)];

  if (brilliantBlessing > 0.74) {
    recruitBox.src = `./assets/images/${fiveIndex}`;

    return fiveIndex;
  } else {
    recruitBox.src = `./assets/images/${fourIndex}`;

    return fourIndex;
  }
}
//array of recruits
const imgFiveArray = [
  "five1.jpg",
  "five2.jpg",
  "five3.jpg",
  "five4.jpg",
  "five5.jpg",
];
const imgFourArray = ["four1.jpg", "four2.jpg", "four3.jpg"];

//push to inv
function addToInventory() {
  const newLi = document.createElement("li");
  newLi.classList.add("list");
  newLi.innerText = `${recruitManager()}`;
  newUl.appendChild(newLi);
}
//tally
function probabilityChecker() {
  const newUlLength = document
    .querySelector(".inventoryList")
    .getElementsByTagName("li");
  let counter = 0;
  for (i = 0; i < newUlLength.length; i++) {
    console.log(newUlLength[i].innerText);
    counter++;
    console.log(counter);
  }
}

//execute 2 ()
recruitBtn.addEventListener("click", (e) => {
  e.preventDefault();
  recruitManager();
  addToInventory();
});

probBtn.addEventListener("click", (e) => {
  probabilityChecker();
});
