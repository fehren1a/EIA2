/*
Aufgabe: 8 - Inheritance: Blumen und Bienen
Name: Jonas Fehrenbach
Datum: 19.05.2017
Matrikel: 254667

Hiermit versichere ich, dass ich diesen Code selbst geschrieben habe. Er wurde nicht kopiert und auch nicht diktiert.
*/

namespace L8_Inheritance {
    export class Superflower {
        x: number;
        y: number;
        petalColor: string;
        centerColor: string;
        style: number;

        constructor() {
            this.setRandomPosition();
            this.setRandomColor();
            this.setRandomStyle();
        }

        draw(): void {}

        setRandomStyle(): void {
            this.style = Math.floor((Math.random() * 2)) + 1;
        }

        setRandomPosition(): void {
            this.x = (Math.random() * (580 - 5)) + 20;
            this.y = (Math.random() * (500 - 255)) + 230;
        }

        setRandomColor(): void {
            let colorList: string[] = [
                "#c94dff", "#8db0f2", "#e68a00"
            ];
            this.petalColor = colorList[Math.floor(Math.random() * colorList.length)];
        }
    }
}