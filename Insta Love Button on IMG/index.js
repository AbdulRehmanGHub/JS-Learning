let clickImg = document.querySelector("#img");
let likeEffect = document.querySelector("#like-effect");

console.log(clickImg);
console.log(likeEffect);

clickImg.addEventListener("dblclick", () => {
  likeEffect.style.transform = "translate(-50%, -50%) scale(1.1)";
  setTimeout(()=> {
    likeEffect.style.transform = "translate(-50%, -50%) scale(0)";
  }, 3000);
});

// like button with text
let likeBtn = document.querySelector("#like-btn");
let likeText = document.querySelector("#like-text");

// console.log(likeBtn);
// console.log(likeText);

let flag = 0;
likeBtn.addEventListener("click", () => {
  if (flag == 0) {
    likeBtn.style.fontSize = 30 + "px";
    likeBtn.style.color = "red";

    likeText.innerHTML = "Liked";
    likeText.style.fontSize = 24 + "px";

    flag = 1;
  } else {
    likeBtn.style.fontSize = 24 + "px";
    likeBtn.style.color = "white";

    likeText.innerHTML = "Like";
    likeText.style.fontSize = 24 + "px";

    flag = 0;
  }
});
