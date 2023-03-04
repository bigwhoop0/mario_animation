"use strict";

// Création mario
let img = new Image();
img.src = "img/frame0.png";
document.querySelector("#mario").append(img);
let mario = document.querySelector("#mario");
mario.style.paddingTop = "466px";

//bloc
let bloc = document.querySelector("#bloc");

// Mushroom 1up
let m1up = document.querySelector("#m1up");

// Animation
let fps = 0;
let anim = setInterval(() => (img.src = `img/frame${++fps % 3}.png`), 130);

// Déplacement
setTimeout(function () {
  mario.style.transition = "transform 3s linear";
  mario.style.transform = "translateX(575px)";
}, 1);

// Saut
setTimeout(function () {
  clearInterval(anim);
  img.src = "img/frame_saut.png";
  mario.style.paddingTop = "378px";
  document.querySelector("#blocImg").src = "img/bloc_vide.png";
  bloc.style.transform = "translateY(-25px)";
  m1up.style.transform = "translateY(-630px)";
}, 3000);

// Remise en place
setTimeout(function () {
  img.src = "img/frame0.png";
  mario.style.paddingTop = "466px";
  bloc.style.transform = "translateY(0px)";
}, 3200);

// Dernière ligne droite
setTimeout(function () {
  setInterval(() => (img.src = `img/frame${++fps % 3}.png`), 130);
}, 3800);

setTimeout(function () {
  mario.style.transform = "translateX(2000px)";
}, 4000);
