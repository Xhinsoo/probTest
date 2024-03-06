const recruitBtn = document.querySelector(".btn");
const recruitBox = document.querySelector(".imgSrc");

function recruitManager() {
  let brilliantBlessing = Math.random().toFixed(2);
  if (brilliantBlessing > 0.7) {
    recruitBox.imgsrc = `./assets/images/${imgFiveArray[Math.floor(Math.random()*imgFiveArray.length)]}`;
    console.log(recruitBox.src);
  } else {
    recruitBox.src = `./assets/images/${imgFourArray[Math.floor(Math.random()*imgFourArray.length)]}`;
    console.log(recruitBox.src);
  }
}

const imgFiveArray = [
  "five1.jpg",
  "five2.jpg",
  "five3,jpg",
  "five4.jpg",
  "five5.jpg",
];
const imgFourArray = ["four1.jpg", "four2.jpg", "four3.jpg"];



recruitBtn.addEventListener("click", (e) => {
  recruitManager();
});
