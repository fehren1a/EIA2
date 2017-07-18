/*
Aufgabe: Abschluss - Freie Arbeit
Name: Jonas Fehrenbach
Datum: 21.07.2017
Matrikel: 254667

Hiermit versichere ich, dass ich diesen Code selbst geschrieben habe. Er wurde nicht kopiert und auch nicht diktiert.
*/
namespace L12_final {
    export class Panel {
        p1x: number;
        p1y: number = 580;
        pwidth: number = 90;
        pheight: number = 11;
        color: string = "#000000";

        constructor() {
            this.p1x = 205; //Ausgangsposition des Panels
        }

        update(): void {
            this.draw();
        }

        draw(): void {
            //Zeichnen des Panels
            crx.fillStyle = this.color;
            crx.beginPath();
            crx.fillRect(this.p1x, this.p1y, this.pwidth, this.pheight);
            crx.fill();
        }

        //Das Panel springt zur geklickten Position, die Mitte des Panels entspricht dem x-Wert des Klicks (Event)
        move(_x: number): void {
            console.log("clicked");
            this.p1x = _x - (this.pwidth / 2);
        }
    }
}
