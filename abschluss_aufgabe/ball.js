/*
Aufgabe: Abschluss - Freie Arbeit
Name: Jonas Fehrenbach
Datum: 21.07.2017
Matrikel: 254667

Hiermit versichere ich, dass ich diesen Code selbst geschrieben habe. Er wurde nicht kopiert und auch nicht diktiert.
*/
var L12_final;
(function (L12_final) {
    class MovingBall {
        constructor() {
            this.bx = 125; //x-Wert des Balles (zu Beginn bei 125)
            this.by = 10; //y-Wert des Balles (zu Beginn bei 10)
            this.size = 10; //Größe des Balles
            this.xspeed = 3;
            this.yspeed = 3;
            console.log("Create ball");
            this.setRandomColor();
        }
        draw() {
            L12_final.crc2.fillStyle = this.color;
            L12_final.crc2.beginPath();
            //crc2.fillRect(this.bx - this.bd / 2, this.by, this.bd, this.bd);
            L12_final.crc2.arc(this.bx - this.size / 2, this.by, this.size, 0, 2 * Math.PI);
            L12_final.crc2.fill();
        }
        move() {
            //Zu den x- und y-Koordinaten wird die Bewegung bzw. Geschwindigkeit dazugerechnet    
            this.bx += this.xspeed;
            this.by += this.yspeed;
            if (this.yspeed > 0 && this.bx > L12_final.p.p1x && this.bx < (L12_final.p.p1x + L12_final.p.pwidth) && this.by > (L12_final.p.p1y - L12_final.p.pheight)) {
                this.yspeed = -this.yspeed;
            }
            //oberer Spielfeldrand
            if (this.by < 7 && this.yspeed < 0) {
                this.yspeed = -this.yspeed;
            }
            //unterer Spielfeldrand
            if (this.by > 593 && this.yspeed > 0) {
                this.yspeed = -this.yspeed;
            }
            //linker Spielfeldrand
            if (this.bx < 7 && this.xspeed < 0) {
                this.xspeed = -this.xspeed;
            }
            //rechter Spielfeldrand
            if (this.bx > 493 && this.xspeed > 0) {
                this.xspeed = -this.xspeed;
            }
        }
        //Random Farbe wird generiert
        setRandomColor() {
            this.color = "hsl(" + Math.random() * 360 + ", 100%, 50%)";
        }
        update() {
            this.move();
            this.draw();
        }
    }
    L12_final.MovingBall = MovingBall;
})(L12_final || (L12_final = {}));
//# sourceMappingURL=ball.js.map