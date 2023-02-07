const form = document.querySelector(".form");
const input = document.querySelector(".input");
const button = document.querySelector(".button");
const list = document.querySelector("ul");
const body = document.querySelector("body");
const modal = document.querySelector(".modal");
const input2 = document.querySelector(".input2");
const form2 = document.querySelector("form2");
const button2 = document.querySelector(".button2");

// linear-gradient
const values = [
  "0",
  "1",
  "2",
  "3",
  "4",
  "5",
  "6",
  "7",
  "8",
  "9",
  "a",
  "b",
  "c",
  "d",
  "e",
  "f",
];

function getGradient() {
  let color = "#";
  for (let i = 0; i < 6; i++) {
    const randomNumber = Math.trunc(Math.random() * values.length);
    color += values[randomNumber];
  }

  return color;
}

function setGradient() {
  const color1 = getGradient();
  const color2 = getGradient();
  const randomDeg = Math.trunc(Math.random() * 360);
  const bgColor = `linear-gradient(
  ${randomDeg}deg,
  ${color1},
  ${color2}
)`;

  body.style.background = bgColor;
}
setGradient();

// Buttons
button.addEventListener("click", (e) => {
  setGradient();
  e.preventDefault();
  input.value;
  let li = document.createElement("li");
  li.textContent = input.value;
  list.appendChild(li);
  li.style.listStyle = "none";

  let img = document.createElement("img");
  img.setAttribute("src", "delete.svg");
  img.style = `width:20px; height:16px; position: absolute;
  right: 7px;`;
  li.appendChild(img);

  // img 2
  let img2 = document.createElement("img");
  img2.setAttribute("src", "edit.svg");
  img2.style = `width:20px; height:16px; position: absolute;
  right: 40px;`;
  li.appendChild(img2);
  img2.addEventListener("click", () => {
    modal.classList.remove("hidden");
  });
  button2.addEventListener("click", (e) => {
    e.preventDefault();
    li.textContent = input2.value;
  });

  // dblclick
  let add = true;
  li.addEventListener("dblclick", () => {
    if (add) {
      li.style.color = "gold";
      li.style.background = "rgb(61 61 61 / 50%)";
    } else {
      li.style.color = "#fff";
      li.style.background = "rgba(204, 204, 204, 0.5)";
    }
    add = !add;
  });

  img.addEventListener("click", () => {
    li.remove();
  });

  li.style = `
  list-style: none;
    margin-bottom: 10px;
    background: rgb(204, 204, 204, 0.5);
    width: 300px;
    height: 50px;
    border: 2px solid #866339;
    border-radius: 10px;
    padding: 10px;
    color: #fff;
    font-size: 20px;`;
});
