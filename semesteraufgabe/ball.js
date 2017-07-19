/*
Aufgabe: Abschluss - Freie Arbeit
Name: Jonas Fehrenbach
Datum: 21.07.2017
Matrikel: 254667

Hiermit versichere ich, dass ich diesen Code selbst geschrieben habe. Er wurde nicht kopiert und auch nicht diktiert.
*/
var L14_final;
(function (L14_final) {
    class MovingBall {
        constructor() {
            this.size = 10; //Größe des Balles
            this.xspeed = 3;
            this.yspeed = 3;
            this.isHit = false;
            console.log("Create ball");
            this.setRandomColor();
            this.gameOver = false;
            //Ist die Zufallszahl größer als 0.5, dann bewegt sich der Ball in positive Richtung, d.h. nach rechts und falls die Zahl kleiner 0.5 ist entgegengesetzt, d.h. nach links
            if (Math.random() > 0.5) {
                this.xspeed = 3;
            }
            else {
                this.xspeed = -3;
            }
            //Zufällige x- und y-Werte werden für den Ball als Startposition ermittelt
            this.bx = (Math.random() * 480) + 20;
            this.by = (Math.random() * 40) + 10;
        }
        update() {
            this.move();
            this.draw();
        }
        draw() {
            L14_final.crc2.shadowBlur = 20;
            L14_final.crc2.shadowColor = "black";
            L14_final.crc2.fillStyle = this.color;
            L14_final.crc2.beginPath();
            L14_final.crc2.arc(this.bx - this.size / 2, this.by, this.size, 0, 2 * Math.PI);
            L14_final.crc2.fill();
        }
        move() {
            //Zu den x- und y-Koordinaten wird die Bewegung bzw. Geschwindigkeit dazugerechnet    
            this.bx += this.xspeed;
            this.by += this.yspeed;
            //Ball prallt von Panel ab
            if (this.yspeed > 0 && this.bx > L14_final.p.p1x && this.bx < (L14_final.p.p1x + L14_final.p.pwidth) && this.by > (L14_final.p.p1y - L14_final.p.pheight)) {
                this.yspeed = -this.yspeed; //die y-Richtung wird umgekehrt
                this.isHit = true;
                //Wenn die X-Geschwindigkeit größer als 0 ist beim Abprallen, so wird diese um den Wert 0.1 erhöht 
                if (this.xspeed > 0) {
                    this.xspeed = this.xspeed + 0.1;
                }
                else {
                    this.xspeed = this.xspeed - 0.1;
                }
                this.yspeed = this.yspeed - 0.1;
            }
            //oberer Spielfeldrand
            if (this.by < 7 && this.yspeed < 0) {
                this.yspeed = -this.yspeed;
            }
            //unterer Spielfeldrand
            if (this.by > 593 && this.yspeed > 0) {
                this.gameOver = true;
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
        getGameOver() {
            return this.gameOver;
        }
        setRandomColor() {
            this.color = "hsl(" + Math.random() * 360 + ", 100%, 50%)";
        }
    }
    L14_final.MovingBall = MovingBall;
})(L14_final || (L14_final = {}));
//# sourceMappingURL=ball.js.map