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
        // ### Der Highscore sollte nicht von einem Ball gezählt werden, da sonst wenn du mehrere Bälle hast mehrere Highscores existieren. ###
        //counter: number = 0; //Punktezähler

        constructor() {
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

        update(): void {
            this.move();
            this.draw();
        }
        
        draw(): void {
            crc2.fillStyle = this.color;
            crc2.beginPath();
            crc2.arc(this.bx - this.size / 2, this.by, this.size, 0, 2 * Math.PI);
            crc2.fill();
        }

        move(): void {
            //Zu den x- und y-Koordinaten wird die Bewegung bzw. Geschwindigkeit dazugerechnet    
            this.bx += this.xspeed;
            this.by += this.yspeed;

            // ### Nicht Aufgabe des Balls, sondern des Spiels ###
            //Punkteanzahl wird auf den Canvas geschrieben
            //crc2.font = "20px Arial";
            //crc2.fillText("Points: " + (this.counter), 10, 25);

            //Ball prallt von Panel ab
            if (this.yspeed > 0 && this.bx > p.p1x && this.bx < (p.p1x + p.pwidth) && this.by > (p.p1y - p.pheight)) {
                this.yspeed = -this.yspeed; //die y-Richtung wird umgekehrt
                //this.counter += 1; //Bei jedem Abprallen wird die Punkteanzahl um 1 erhöht

                // ### Davon weis der der Ball nichts, das ist Spiellogik ###
                //Wenn die Punkteanzahl 2 entspricht, soll ein neuer Ball erzeugt werden
                /*if (this.counter == 2) {
                    let s: MovingBall = new MovingBall();
                    ball.push(s);
                    amount += 1;
                }*/
                
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

        //Random Farbe wird generiert
        setRandomColor(): void {
            this.color = "hsl(" + Math.random() * 360 + ", 100%, 50%)";
        }
    }
}