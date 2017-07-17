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
            crc2.fillStyle = this.color;
            crc2.beginPath();
            crc2.fillRect(this.p1x, this.p1y, this.pwidth, this.pheight);
            crc2.fill();
        }

        //Das Panel springt zur geklickten Position, die Mitte des Panels entspricht dem x-Wert des Klicks (Event)
        move(_event: MouseEvent): void {
            p.p1x = _event.offsetX - (p.pwidth / 2);
        }
    }
}
