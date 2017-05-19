/*
Aufgabe: 8 - Inheritance: Blumen und Bienen
Name: Jonas Fehrenbach
Datum: 19.05.2017
Matrikel: 254667

Hiermit versichere ich, dass ich diesen Code selbst geschrieben habe. Er wurde nicht kopiert und auch nicht diktiert.
*/

namespace L8_Inheritance {
    export class FlowerBig extends Superflower {

        constructor() {
            super();
        }

        draw(): void {
            //leafe left
            crc2.beginPath();
            crc2.fillStyle = this.petalColor;
            crc2.arc(this.x - 8, this.y + 0, 5, 0, 2 * Math.PI);
            crc2.closePath();
            crc2.fill();

            //leafe right
            crc2.beginPath();
            crc2.fillStyle = this.petalColor;
            crc2.arc(this.x + 8, this.y + 0, 5, 0, 2 * Math.PI);
            crc2.closePath();
            crc2.fill();

            //leafe bottom left
            crc2.beginPath();
            crc2.fillStyle = this.petalColor;
            crc2.arc(this.x - 4, this.y + 6, 5, 0, 2 * Math.PI);
            crc2.closePath();
            crc2.fill();

            //leafe top right
            crc2.beginPath();
            crc2.fillStyle = this.petalColor;
            crc2.arc(this.x + 3, this.y - 7, 5, 0, 2 * Math.PI);
            crc2.closePath();
            crc2.fill();

            //leafe bottom right
            crc2.beginPath();
            crc2.fillStyle = this.petalColor;
            crc2.arc(this.x + 4, this.y + 6, 5, 0, 2 * Math.PI);
            crc2.closePath();
            crc2.fill();

            //leafe top left
            crc2.beginPath();
            crc2.fillStyle = this.petalColor;
            crc2.arc(this.x - 5, this.y - 7, 5, 0, 2 * Math.PI);
            crc2.closePath();
            crc2.fill();

            //leafe center
            crc2.beginPath();
            crc2.fillStyle = "#331a00";
            crc2.arc(this.x + 0, this.y + 0, 5.5, 0, 2 * Math.PI);
            crc2.closePath();
            crc2.fill();
        }
    }
}