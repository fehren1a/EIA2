/*
Aufgabe: 8 - Inheritance: Blumen und Bienen
Name: Jonas Fehrenbach
Datum: 19.05.2017
Matrikel: 254667

Hiermit versichere ich, dass ich diesen Code selbst geschrieben habe. Er wurde nicht kopiert und auch nicht diktiert.
*/

namespace L8_Inheritance {
    export class Superbee {
        x: number;
        y: number;
        size: number;
        color: string;

        constructor(_x: number, _y: number) {
            this.setRandomStyle();
            this.x = _x;
            this.y = _y;
        }

        update(): void {
            this.move();
            this.draw();
        }

        move(): void {}

        setRandomStyle(): void {
            this.size = Math.random() * 3.3 + 3;
            this.color = "hsl(" + Math.random() * 360 + ", 100%, 50%)";
        }

        draw(): void {}
    }
}