const images = ["1.jpg", "2.jpg", "3.jpg"];

const chosenImage = images[Math.floor(Math.random() * images.length)];

const bgImage = document.createElement("img");
bgImage.style.cssText =
  "height:100vh;box-sizing:border-box; width:100vw; position:absolute; top:0; left:0; z-index:-1;";

bgImage.src = `images/${chosenImage}`;
document.body.appendChild(bgImage);
