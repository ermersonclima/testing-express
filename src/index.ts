/// <reference lib="dom" />

const button = document.getElementById("main-button");

let isOn = false;

const update = () => {
  if (!!button) {
    button.textContent = isOn ? "On" : "Off";
  }
};

const toggle = () => {
  isOn = !isOn;
  update();
};

if (button) {
  button.addEventListener("click", toggle);
}

update();
