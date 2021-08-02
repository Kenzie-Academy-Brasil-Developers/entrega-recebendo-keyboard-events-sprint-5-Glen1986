
let boxTop = 200;
let boxLeft = 200;

const suma = () => {
  boxTop -= 10;
  return boxTop;
};
const resta = () => {
  boxTop += 10;
  return boxTop;
};
const left = () => {
  boxLeft -= 10;
  return boxLeft;
};
const right = () => {
  boxLeft += 10;
  return boxLeft;
};
const box = document.getElementById("box");

const key = document.addEventListener("keydown", (event) => {
  let keyName = event.key;
  if (keyName == "ArrowUp") {
    suma();
  }
  if (keyName == "ArrowDown") {
    resta();
  }
  if (keyName == "ArrowLeft") {
    left();
  }
  if (keyName == "ArrowRight") {
    right();
  }

  box.style.top = boxTop + "px";
  box.style.left = boxLeft + "px";
  console.log("key: " + keyName);
});
