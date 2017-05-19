/*
Aufgabe: 8 - Inheritance: Blumen und Bienen
Name: Jonas Fehrenbach
Datum: 19.05.2017
Matrikel: 254667

Hiermit versichere ich, dass ich diesen Code selbst geschrieben habe. Er wurde nicht kopiert und auch nicht diktiert.
*/
var L8_Inheritance;
(function (L8_Inheritance) {
    class FlowerLittle extends L8_Inheritance.Superflower {
        constructor() {
            super();
            console.log("Create little flower");
        }
        draw() {
            //petals
            L8_Inheritance.crc2.fillStyle = this.petalColor;
            L8_Inheritance.crc2.beginPath();
            L8_Inheritance.crc2.arc(this.x, this.y - 5, 5, 0, 2 * Math.PI);
            L8_Inheritance.crc2.fill();
            L8_Inheritance.crc2.beginPath();
            L8_Inheritance.crc2.arc(this.x - 5, this.y, 5, 0, 2 * Math.PI);
            L8_Inheritance.crc2.fill();
            L8_Inheritance.crc2.beginPath();
            L8_Inheritance.crc2.arc(this.x + 5, this.y, 5, 0, 2 * Math.PI);
            L8_Inheritance.crc2.fill();
            L8_Inheritance.crc2.beginPath();
            L8_Inheritance.crc2.arc(this.x, this.y + 5, 5, 0, 2 * Math.PI);
            L8_Inheritance.crc2.fill();
            //center
            L8_Inheritance.crc2.beginPath();
            L8_Inheritance.crc2.arc(this.x, this.y, 5, 0, 2 * Math.PI);
            L8_Inheritance.crc2.fillStyle = "#ffffff";
            L8_Inheritance.crc2.fill();
        }
    }
    L8_Inheritance.FlowerLittle = FlowerLittle;
})(L8_Inheritance || (L8_Inheritance = {}));
//# sourceMappingURL=flowerLittle.js.map