/*
Aufgabe: Abschluss - Freie Arbeit
Name: Jonas Fehrenbach
Datum: 21.07.2017
Matrikel: 254667

Hiermit versichere ich, dass ich diesen Code selbst geschrieben habe. Er wurde nicht kopiert und auch nicht diktiert.
*/
namespace L12_final {
    export class MovingBall {
        bx: number; //x-Wert des Balles (zu Beginn bei 125)
        by: number;  //y-Wert des Balles (zu Beginn bei 10)
        size: number = 10; //Größe des Balles
        xspeed: number = 1;
        yspeed: number = 1;
        color: string;
        gameOver: boolean;
        counter: number = 0;

        constructor() {
            console.log("Create ball");
            this.setRandomColor();
            this.gameOver = false;
            if (Math.random() > 0.5) {
                this.xspeed = 1;
            }
            else {
                this.xspeed = -1;
            }

            this.bx = (Math.random() * 480) + 20;
            this.by = (Math.random() * 40) + 10;
        }

        draw(): void {
            crc2.fillStyle = this.color;
            crc2.beginPath();
            //crc2.fillRect(this.bx - this.bd / 2, this.by, this.bd, this.bd);
            crc2.arc(this.bx - this.size / 2, this.by, this.size, 0, 2 * Math.PI);
            crc2.fill();
        }

        move(): void {
            //Zu den x- und y-Koordinaten wird die Bewegung bzw. Geschwindigkeit dazugerechnet    
            this.bx += this.xspeed;
            this.by += this.yspeed;

            crc2.fillText("" + (this.counter), 200, 200);

            if (this.yspeed > 0 && this.bx > p.p1x && this.bx < (p.p1x + p.pwidth) && this.by > (p.p1y - p.pheight)) {
                this.yspeed = -this.yspeed;
                this.counter += 1;

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

        //Random Farbe wird generiert
        setRandomColor(): void {
            this.color = "hsl(" + Math.random() * 360 + ", 100%, 50%)";
        }

        update(): void {
            this.move();
            this.draw();
        }
    }
}