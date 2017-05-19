/*
Aufgabe: 8 - Inheritance: Blumen und Bienen
Name: Jonas Fehrenbach
Datum: 19.05.2017
Matrikel: 254667

Hiermit versichere ich, dass ich diesen Code selbst geschrieben habe. Er wurde nicht kopiert und auch nicht diktiert.
*/

namespace L8_Inheritance {
    export class FlowerLittle extends Superflower {

        constructor() {
            super();
            console.log("Create little flower");
        }

        draw(): void {
            //petals
            crc2.fillStyle = this.petalColor;
            crc2.beginPath();
            crc2.arc(this.x, this.y - 5, 5, 0, 2 * Math.PI);
            crc2.fill();

            crc2.beginPath();
            crc2.arc(this.x - 5, this.y, 5, 0, 2 * Math.PI);
            crc2.fill();

            crc2.beginPath();
            crc2.arc(this.x + 5, this.y, 5, 0, 2 * Math.PI);
            crc2.fill();

            crc2.beginPath();
            crc2.arc(this.x, this.y + 5, 5, 0, 2 * Math.PI);
            crc2.fill();

            //center
            crc2.beginPath();
            crc2.arc(this.x, this.y, 5, 0, 2 * Math.PI);
            crc2.fillStyle = "#ffffff";
            crc2.fill();
        }
    }
}