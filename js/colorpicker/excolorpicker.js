import { Color, capRGB } from "./colorpicker.js";
const redInput = document.getElementById("red-input");
const greenInput = document.getElementById("green-input");
const blueInput = document.getElementById("blue-input");
const colorDrawButton = document.getElementById("btn-draw");
const colorSaveButton = document.getElementById("btn-save");
const box = document.getElementById("box");
const previousColorBox = document.getElementById("previousColorBox");
const favourites = document.getElementById("favourites");

const container = document.getElementById("container")
const allInputs = [redInput, greenInput, blueInput];
let previousColor = null;
let currentColor = null;
let index = 1;
function rgb() {
    const [red, green, blue] = capRGB(Number(redInput.value), Number(greenInput.value), Number(blueInput.value));
    const c = new Color(red, green, blue);
    const hexColor = c.hex();
    const rgbColor = c.rgb();
    box.innerHTML = rgbColor + "<br>" + hexColor;
    box.style.background = rgbColor;

    currentColor = new Color(red, green, blue);
    return c;
}
function saveFavouriteColorToLocalStorage() {
    const [red, green, blue] = capRGB(Number(redInput.value), Number(greenInput.value), Number(blueInput.value));
    const c = new Color(red, green, blue);
    localStorage.setItem(index, JSON.stringify(c));
    const colorDiv = document.createElement("button");
    colorDiv.innerHTML = index;
    // colorDiv.style.background = c.rgb();
    colorDiv.onclick = function () {
        const json = JSON.parse(localStorage.getItem(colorDiv.innerHTML))
        const color = new Color(json.r, json.g, json.b);
        box.innerHTML = color.rgb() + "<br>" + color.hex();
        box.style.background = color.rgb();
        console.log(JSON.parse(localStorage.getItem(colorDiv.innerHTML)))
    }
    favourites.appendChild(colorDiv);
    index++;


}

colorSaveButton.addEventListener('click', () => {
    saveFavouriteColorToLocalStorage();
});

colorDrawButton.addEventListener('click', () => {
    allInputs.forEach((i) => {
        rgb();
    });


    if (previousColor) {
        previousColorBox.innerHTML = previousColor.rgb() + "<br>" + previousColor.hex();
        previousColorBox.style.background = previousColor.rgb();

    }
    previousColor = currentColor;
    const colorDiv = document.createElement("div");
    colorDiv.addEventListener('click', () => {
        colorDiv.remove(); //למחוק מלבן שלא רצוי בדף
        //index of rect
        //so we can remove it
    });
    //add the box div:
    box.appendChild(colorDiv);
});
const d = new Date();
const str = d.toLocaleDateString("he-IL", {
    year: "numeric",
    month: "numeric",
    day: "2-digit",
    hour: 'numeric',
    minute: 'numeric',
    second: 'numeric',
    fractionalSecondDigits: 3,
});
