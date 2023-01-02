import { Color, capRGB, capValue } from "./colorpicker.js";


const redInput = document.getElementById("red-input") as HTMLInputElement;
const greenInput = document.getElementById("green-input") as HTMLInputElement;
const blueInput = document.getElementById("blue-input") as HTMLInputElement;
const colorDrawButton = document.getElementById("btn-draw") as HTMLButtonElement;


const box = document.getElementById("box") as HTMLDivElement;

const allInputs = [redInput, greenInput, blueInput];




function rgb() {
    const [red, green, blue] = capRGB(
        Number(redInput.value),
        Number(greenInput.value),
        Number(blueInput.value)
    );

    const c = new Color(red, green, blue);
    const hexColor = c.hex()
    const rgbColor = c.rgb()
    box.innerHTML = rgbColor + "<br>" + hexColor;

    box.style.background = rgbColor;

    return c;

}

colorDrawButton.addEventListener('click', () => {
    allInputs.forEach((i) => {
        rgb();
    });




    const colorDiv = document.createElement("div");



    colorDiv.addEventListener('click', () => {
        colorDiv.remove();//למחוק מלבן שלא רצוי בדף
        //index of rect
        //so we can remove it
    })

    //add the box div:
    box.appendChild(colorDiv);
    allInputs.push();
    localStorage.setItem('allInputs', JSON.stringify(allInputs));

});


const d = new Date();
const str = d.toLocaleDateString("he-IL", {//המרת של תאריך למחרוזת
    year: "numeric",
    month: "numeric",
    day: "2-digit",
    hour: 'numeric',
    minute: 'numeric',
    second: 'numeric',
    fractionalSecondDigits: 3,

});