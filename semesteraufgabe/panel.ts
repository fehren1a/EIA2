/*
Aufgabe: Abschluss - Freie Arbeit
Name: Jonas Fehrenbach
Datum: 21.07.2017
Matrikel: 254667

Hiermit versichere ich, dass ich diesen Code selbst geschrieben habe. Er wurde nicht kopiert und auch nicht diktiert.
*/
namespace L14_final {
    export class Panel {
        p1x: number;
        p1y: number;
        pwidth: number = 90;  //Breite des Panels
        pheight: number = 11;  //Höhe des Panels
        color: string = "#000000";

        constructor() {
            this.p1x = 255; //Ausgangsposition des Panels
            this.p1y = 670; //Ausgangsposition des Panels
        }

        draw(): void {
            //Zeichnen des Panels
            crc2.fillStyle = this.color;
            crc2.beginPath();
            crc2.fillRect(this.p1x, this.p1y, this.pwidth, this.pheight);
        }

        //Das Panel springt zur geklickten Position, die Mitte des Panels entspricht dem x-Wert des Klicks (Event)
        move(_x: number): void {
            console.log("clicked");
            this.p1x = _x - (this.pwidth / 2);
        }
    }
}
