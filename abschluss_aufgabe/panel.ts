/*
Aufgabe: Abschluss - Freie Arbeit
Name: Jonas Fehrenbach
Datum: 21.07.2017
Matrikel: 254667

Hiermit versichere ich, dass ich diesen Code selbst geschrieben habe. Er wurde nicht kopiert und auch nicht diktiert.
*/
namespace L12_final {
    export class Panel {
        p1x: number = 205;
        p1y: number = 580;
        pwidth: number = 90;
        pheight: number = 11;
        color: string = "#000000";

        constructor() {
        }

        draw(): void {
            //Zeichnen des Panels
            crc2.fillStyle = this.color;
            crc2.beginPath();
            crc2.fillRect(this.p1x, this.p1y, this.pwidth, this.pheight);
            crc2.fill();
        }

        move(_event: Event): void {

            let e: HTMLCanvasElement = <HTMLCanvasElement>_event;
            console.log(_event.target.clientX);
            //
        }

        reset(): void {
            //
        }

        update(): void {
            this.draw();
        }
    }
}
