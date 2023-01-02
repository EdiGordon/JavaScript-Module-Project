import { Utils } from './utils.js';



export interface ColorType {
    r: number;
    g: number;
    b: number;
    timeStamp: string;
}

export class Color implements ColorType {
    r: number;
    g: number;
    b: number;
    timeStamp: string;
    constructor(r: number, g: number, b: number) {
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

export function capValue(value: number) {
    let r = Math.min(value, 255);
    r = Math.max(r, 0);
    return r;
}

export function capRGB(r: number, g: number, b: number) {
    let red = capValue(r);
    let green = capValue(g);
    let blue = capValue(b);

    return [red, green, blue];
}
