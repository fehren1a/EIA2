/*
Aufgabe: 8 - Inheritance: Blumen und Bienen
Name: Jonas Fehrenbach
Datum: 19.05.2017
Matrikel: 254667

Hiermit versichere ich, dass ich diesen Code selbst geschrieben habe. Er wurde nicht kopiert und auch nicht diktiert.
*/
var L8_Inheritance;
(function (L8_Inheritance) {
    class FlowerBig extends L8_Inheritance.Superflower {
        constructor() {
            super();
        }
        draw() {
            //leafe left
            L8_Inheritance.crc2.beginPath();
            L8_Inheritance.crc2.fillStyle = this.petalColor;
            L8_Inheritance.crc2.arc(this.x - 8, this.y + 0, 5, 0, 2 * Math.PI);
            L8_Inheritance.crc2.closePath();
            L8_Inheritance.crc2.fill();
            //leafe right
            L8_Inheritance.crc2.beginPath();
            L8_Inheritance.crc2.fillStyle = this.petalColor;
            L8_Inheritance.crc2.arc(this.x + 8, this.y + 0, 5, 0, 2 * Math.PI);
            L8_Inheritance.crc2.closePath();
            L8_Inheritance.crc2.fill();
            //leafe bottom left
            L8_Inheritance.crc2.beginPath();
            L8_Inheritance.crc2.fillStyle = this.petalColor;
            L8_Inheritance.crc2.arc(this.x - 4, this.y + 6, 5, 0, 2 * Math.PI);
            L8_Inheritance.crc2.closePath();
            L8_Inheritance.crc2.fill();
            //leafe top right
            L8_Inheritance.crc2.beginPath();
            L8_Inheritance.crc2.fillStyle = this.petalColor;
            L8_Inheritance.crc2.arc(this.x + 3, this.y - 7, 5, 0, 2 * Math.PI);
            L8_Inheritance.crc2.closePath();
            L8_Inheritance.crc2.fill();
            //leafe bottom right
            L8_Inheritance.crc2.beginPath();
            L8_Inheritance.crc2.fillStyle = this.petalColor;
            L8_Inheritance.crc2.arc(this.x + 4, this.y + 6, 5, 0, 2 * Math.PI);
            L8_Inheritance.crc2.closePath();
            L8_Inheritance.crc2.fill();
            //leafe top left
            L8_Inheritance.crc2.beginPath();
            L8_Inheritance.crc2.fillStyle = this.petalColor;
            L8_Inheritance.crc2.arc(this.x - 5, this.y - 7, 5, 0, 2 * Math.PI);
            L8_Inheritance.crc2.closePath();
            L8_Inheritance.crc2.fill();
            //leafe center
            L8_Inheritance.crc2.beginPath();
            L8_Inheritance.crc2.fillStyle = "#331a00";
            L8_Inheritance.crc2.arc(this.x + 0, this.y + 0, 5.5, 0, 2 * Math.PI);
            L8_Inheritance.crc2.closePath();
            L8_Inheritance.crc2.fill();
        }
    }
    L8_Inheritance.FlowerBig = FlowerBig;
})(L8_Inheritance || (L8_Inheritance = {}));
//# sourceMappingURL=flowerBig.js.map