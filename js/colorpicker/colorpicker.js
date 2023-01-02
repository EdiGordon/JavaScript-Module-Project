import { Utils } from './utils.js';
export class Color {
    r;
    g;
    b;
    timeStamp;
    constructor(r, g, b) {
        this.r = r;
        this.g = g;
        this.b = b;
        this.timeStamp = Utils.currentDateString();
    }
    hex() {
        const redHex = this.r.toString(16).padStart(2, "0");
        const greenHex = this.g.toString(16).padStart(2, "0");
        const blueHex = this.b.toString(16).padStart(2, "0");
        const hexColor = `HEX(#${redHex}${greenHex}${blueHex})`.toUpperCase();
        return hexColor;
    }
    rgb() {
        return `RGB(${this.r},${this.g}, ${this.b})`;
    }
}
export function capValue(value) {
    let r = Math.min(value, 255);
    r = Math.max(r, 0);
    return r;
}
export function capRGB(r, g, b) {
    let red = capValue(r);
    let green = capValue(g);
    let blue = capValue(b);
    return [red, green, blue];
}
