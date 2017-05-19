/*
Aufgabe: 8 - Inheritance: Blumen und Bienen
Name: Jonas Fehrenbach
Datum: 19.05.2017
Matrikel: 254667

Hiermit versichere ich, dass ich diesen Code selbst geschrieben habe. Er wurde nicht kopiert und auch nicht diktiert.
*/
var L8_Inheritance;
(function (L8_Inheritance) {
    class Honeybee extends L8_Inheritance.Superbee {
        constructor(_x, _y) {
            super(_x, _y);
            this.speed = 0.04;
            this.setStartPosition();
            this.setRandomTargetPosition();
        }
        //getting the coordinates of a random special flower (target)
        setRandomTargetPosition() {
            let randomtargetflower = Math.round(Math.random() * (L8_Inheritance.flowers.length - 1));
            this.xTarget = L8_Inheritance.flowers[randomtargetflower].x;
            this.yTarget = L8_Inheritance.flowers[randomtargetflower].y;
        }
        setStartPosition() {
            this.x = 635;
            this.y = 310;
        }
        //moving a bee to a special flower (target)
        move() {
            let xDiff = this.xTarget - this.x;
            let yDiff = this.yTarget - this.y;
            if (Math.abs(xDiff) < 0.5 && Math.abs(yDiff) < 0.5)
                this.setRandomTargetPosition();
            else {
                this.x += xDiff * this.speed;
                this.y += yDiff * this.speed;
            }
        }
        draw() {
            //head
            L8_Inheritance.crc2.beginPath();
            L8_Inheritance.crc2.fillStyle = "#000000";
            L8_Inheritance.crc2.arc(this.x - 1, this.y + 2, this.size, 0, 2 * Math.PI);
            L8_Inheritance.crc2.fill();
            //eye
            L8_Inheritance.crc2.beginPath();
            L8_Inheritance.crc2.fillStyle = "white";
            L8_Inheritance.crc2.arc(this.x - 2, this.y + 1, 1, 0, 2 * Math.PI);
            L8_Inheritance.crc2.fill();
            //body
            L8_Inheritance.crc2.fillStyle = "#000000";
            L8_Inheritance.crc2.fillRect(this.x, this.y, 3, 10);
            L8_Inheritance.crc2.fillStyle = "yellow";
            L8_Inheritance.crc2.fillRect(this.x + 3, this.y, 3, 10);
            L8_Inheritance.crc2.fillStyle = "#000000";
            L8_Inheritance.crc2.fillRect(this.x + 6, this.y, 3, 10);
            L8_Inheritance.crc2.fillStyle = "yellow";
            L8_Inheritance.crc2.fillRect(this.x + 9, this.y, 3, 10);
            L8_Inheritance.crc2.fillStyle = "#000000";
            L8_Inheritance.crc2.fillRect(this.x + 12, this.y, 3, 10);
            //feeler 1
            L8_Inheritance.crc2.beginPath();
            L8_Inheritance.crc2.moveTo(this.x - 2, this.y);
            L8_Inheritance.crc2.strokeStyle = "#000000";
            L8_Inheritance.crc2.lineTo(this.x - 6, this.y - 6);
            L8_Inheritance.crc2.closePath();
            L8_Inheritance.crc2.stroke();
            //feeler 2
            L8_Inheritance.crc2.beginPath();
            L8_Inheritance.crc2.moveTo(this.x - 2, this.y);
            L8_Inheritance.crc2.strokeStyle = "#000000";
            L8_Inheritance.crc2.lineTo(this.x - 1, this.y - 6);
            L8_Inheritance.crc2.closePath();
            L8_Inheritance.crc2.stroke();
            //spike
            L8_Inheritance.crc2.beginPath();
            L8_Inheritance.crc2.moveTo(this.x + 15, this.y + 5);
            L8_Inheritance.crc2.strokeStyle = this.color;
            L8_Inheritance.crc2.lineTo(this.x + 18, this.y + 5);
            L8_Inheritance.crc2.closePath();
            L8_Inheritance.crc2.stroke();
        }
    }
    L8_Inheritance.Honeybee = Honeybee;
})(L8_Inheritance || (L8_Inheritance = {}));
//# sourceMappingURL=honeybee.js.map