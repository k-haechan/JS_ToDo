const images = ["1.jpg","2.jpg","3.jpg","4.jpg"];
const bgImage = document.createElement("img");

bgImage.src=`img/${images[Math.floor(Math.random()*10/images.length)]}`;
document.body.appendChild(bgImage);