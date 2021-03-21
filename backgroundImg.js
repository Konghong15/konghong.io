const body = document.querySelector("body");

const randomNum = Math.floor(Math.random()*3);
const image = new Image()
image.src = `${randomNum}.jpg`;
image.classList.add("bgImage");
body.prepend(image);