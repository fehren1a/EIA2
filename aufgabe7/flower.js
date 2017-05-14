/*
Aufgabe: 7 - objektorientierte Programmierung
Name: Jonas Fehrenbach
Datum: 14.05.2017
Matrikel: 254667

Hiermit versichere ich, dass ich diesen Code selbst geschrieben habe. Er wurde nicht kopiert und auch nicht diktiert.
*/
var L7_Classes;
(function (L7_Classes) {
    class Flower {
        constructor() {
            console.log("flower");
            this.setRandomPosition();
            this.setRandomColor();
            this.setRandomStyle();
            this.draw();
        }
        draw() {
            if (this.style == 1) {
                this.drawLittleflower();
            }
            else {
                this.drawBigflower();
            }
        }
        setRandomStyle() {
            this.style = Math.floor((Math.random() * 2)) + 1;
        }
        setRandomPosition() {
            this.x = (Math.random() * (580 - 5)) + 20;
            this.y = (Math.random() * (500 - 255)) + 230;
        }
        setRandomColor() {
            let colorList = [
                "#c94dff", "#8db0f2", "#e68a00"
            ];
            this.petalColor = colorList[Math.floor(Math.random() * colorList.length)];
        }
        drawBigflower() {
            //leafe left
            L7_Classes.crc2.beginPath();
            L7_Classes.crc2.fillStyle = this.petalColor;
            L7_Classes.crc2.arc(this.x - 8, this.y + 0, 5, 0, 2 * Math.PI);
            L7_Classes.crc2.closePath();
            L7_Classes.crc2.fill();
            //leafe right
            L7_Classes.crc2.beginPath();
            L7_Classes.crc2.fillStyle = this.petalColor;
            L7_Classes.crc2.arc(this.x + 8, this.y + 0, 5, 0, 2 * Math.PI);
            L7_Classes.crc2.closePath();
            L7_Classes.crc2.fill();
            //leafe bottom left
            L7_Classes.crc2.beginPath();
            L7_Classes.crc2.fillStyle = this.petalColor;
            L7_Classes.crc2.arc(this.x - 4, this.y + 6, 5, 0, 2 * Math.PI);
            L7_Classes.crc2.closePath();
            L7_Classes.crc2.fill();
            //leafe top right
            L7_Classes.crc2.beginPath();
            L7_Classes.crc2.fillStyle = this.petalColor;
            L7_Classes.crc2.arc(this.x + 3, this.y - 7, 5, 0, 2 * Math.PI);
            L7_Classes.crc2.closePath();
            L7_Classes.crc2.fill();
            //leafe bottom right
            L7_Classes.crc2.beginPath();
            L7_Classes.crc2.fillStyle = this.petalColor;
            L7_Classes.crc2.arc(this.x + 4, this.y + 6, 5, 0, 2 * Math.PI);
            L7_Classes.crc2.closePath();
            L7_Classes.crc2.fill();
            //leafe top left
            L7_Classes.crc2.beginPath();
            L7_Classes.crc2.fillStyle = this.petalColor;
            L7_Classes.crc2.arc(this.x - 5, this.y - 7, 5, 0, 2 * Math.PI);
            L7_Classes.crc2.closePath();
            L7_Classes.crc2.fill();
            //leafe center
            L7_Classes.crc2.beginPath();
            L7_Classes.crc2.fillStyle = "#331a00";
            L7_Classes.crc2.arc(this.x + 0, this.y + 0, 5.5, 0, 2 * Math.PI);
            L7_Classes.crc2.closePath();
            L7_Classes.crc2.fill();
        }
        drawLittleflower() {
            //petals
            L7_Classes.crc2.fillStyle = this.petalColor;
            L7_Classes.crc2.beginPath();
            L7_Classes.crc2.arc(this.x, this.y - 5, 5, 0, 2 * Math.PI);
            L7_Classes.crc2.fill();
            L7_Classes.crc2.beginPath();
            L7_Classes.crc2.arc(this.x - 5, this.y, 5, 0, 2 * Math.PI);
            L7_Classes.crc2.fill();
            L7_Classes.crc2.beginPath();
            L7_Classes.crc2.arc(this.x + 5, this.y, 5, 0, 2 * Math.PI);
            L7_Classes.crc2.fill();
            L7_Classes.crc2.beginPath();
            L7_Classes.crc2.arc(this.x, this.y + 5, 5, 0, 2 * Math.PI);
            L7_Classes.crc2.fill();
            //center
            L7_Classes.crc2.beginPath();
            L7_Classes.crc2.arc(this.x, this.y, 5, 0, 2 * Math.PI);
            L7_Classes.crc2.fillStyle = "#ffffff";
            L7_Classes.crc2.fill();
        }
    }
    L7_Classes.Flower = Flower;
})(L7_Classes || (L7_Classes = {}));
//# sourceMappingURL=flower.js.map