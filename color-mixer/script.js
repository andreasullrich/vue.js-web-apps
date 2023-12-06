Vue.createApp({
  data() {
    return {
      red: 255,
      green: 0,
      blue: 0,
    };
  },
  computed: {
    displayColor() {
      return `rgb(${this.red}, ${this.green}, ${this.blue})`;
    },
  },
}).mount("#app");

/*
document.addEventListener("DOMContentLoaded", function () {
  const redSlider = document.getElementById("red");
  const greenSlider = document.getElementById("green");
  const blueSlider = document.getElementById("blue");
  const colorBox = document.getElementById("color-box");
  const colorValue = document.getElementById("color-value");

  function updateColor() {
    const redValue = redSlider.value;
    const greenValue = greenSlider.value;
    const blueValue = blueSlider.value;

    const color = `rgb(${redValue}, ${greenValue}, ${blueValue})`;
    colorBox.style.backgroundColor = color;
    colorValue.textContent = `Color: ${color}`;
  }

  redSlider.addEventListener("input", updateColor);
  greenSlider.addEventListener("input", updateColor);
  blueSlider.addEventListener("input", updateColor);

  // Initialize color on page load
  updateColor();
});

*/
