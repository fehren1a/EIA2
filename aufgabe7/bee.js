/*
Aufgabe: 7 - objektorientierte Programmierung
Name: Jonas Fehrenbach
Datum: 14.05.2017
Matrikel: 254667

Hiermit versichere ich, dass ich diesen Code selbst geschrieben habe. Er wurde nicht kopiert und auch nicht diktiert.
*/
var L7_Classes;
(function (L7_Classes) {
    class Bee {
        constructor(_x, _y) {
            this.setRandomStyle();
            this.x = _x;
            this.y = _y;
        }
        update() {
            this.move();
            this.draw();
        }
        move() {
            this.x += Math.random() * -5 - 1;
            this.y += Math.random() * 6 - 3;
        }
        setRandomStyle() {
            this.size = Math.random() * 3.3 + 3;
            this.color = "hsl(" + Math.random() * 360 + ", 100%, 50%)";
        }
        draw() {
            //head
            L7_Classes.crc2.beginPath();
            L7_Classes.crc2.fillStyle = "#000000";
            L7_Classes.crc2.arc(this.x - 1, this.y + 2, this.size, 0, 2 * Math.PI);
            L7_Classes.crc2.fill();
            //eye
            L7_Classes.crc2.beginPath();
            L7_Classes.crc2.fillStyle = "white";
            L7_Classes.crc2.arc(this.x - 2, this.y + 1, 1, 0, 2 * Math.PI);
            L7_Classes.crc2.fill();
            //body
            L7_Classes.crc2.fillStyle = "#000000";
            L7_Classes.crc2.fillRect(this.x, this.y, 3, 10);
            L7_Classes.crc2.fillStyle = "yellow";
            L7_Classes.crc2.fillRect(this.x + 3, this.y, 3, 10);
            L7_Classes.crc2.fillStyle = "#000000";
            L7_Classes.crc2.fillRect(this.x + 6, this.y, 3, 10);
            L7_Classes.crc2.fillStyle = "yellow";
            L7_Classes.crc2.fillRect(this.x + 9, this.y, 3, 10);
            L7_Classes.crc2.fillStyle = "#000000";
            L7_Classes.crc2.fillRect(this.x + 12, this.y, 3, 10);
            //feeler 1
            L7_Classes.crc2.beginPath();
            L7_Classes.crc2.moveTo(this.x - 2, this.y);
            L7_Classes.crc2.strokeStyle = "#000000";
            L7_Classes.crc2.lineTo(this.x - 6, this.y - 6);
            L7_Classes.crc2.closePath();
            L7_Classes.crc2.stroke();
            //feeler 2
            L7_Classes.crc2.beginPath();
            L7_Classes.crc2.moveTo(this.x - 2, this.y);
            L7_Classes.crc2.strokeStyle = "#000000";
            L7_Classes.crc2.lineTo(this.x - 1, this.y - 6);
            L7_Classes.crc2.closePath();
            L7_Classes.crc2.stroke();
            //spike
            L7_Classes.crc2.beginPath();
            L7_Classes.crc2.moveTo(this.x + 15, this.y + 5);
            L7_Classes.crc2.strokeStyle = this.color;
            L7_Classes.crc2.lineTo(this.x + 18, this.y + 5);
            L7_Classes.crc2.closePath();
            L7_Classes.crc2.stroke();
        }
    }
    L7_Classes.Bee = Bee;
})(L7_Classes || (L7_Classes = {}));
//# sourceMappingURL=bee.js.map