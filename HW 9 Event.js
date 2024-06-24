// -----1----
// Напишіть такий JavaScript, щоб після натискання на кнопку button, елемент
// <div id="text"> зникав.

// let btn = document.querySelector(".btn");
// let text = document.getElementById("text");
// btn.addEventListener("click", () => (text.hidden = true));

// -----2----
// Напишіть такий код, щоб після натискання на кнопку, вона зникала.

// let btn = document.querySelector(".btn");
// btn.addEventListener("click", () => {
//   btn.style.display = "none";
// });

// -----3----
// Створіть дерево, яке показує/приховує дочірні вузли при кліці

// let menuElem = document.getElementsById("fruits");
// let titleElem = menuElem.querySelector(".title");
// titleElem.onclick = function () {
//   menuElem.classList.toggle("open");
// };

// 2 вариант

// let titleElem = document.querySelector(".title");
// let elemFruit = document.querySelector("fruit");
// titleElem.addEventListener("click", () => {
//   elemFruit.style.display = "none";
// });
