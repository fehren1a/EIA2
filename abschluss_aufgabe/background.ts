/*
Aufgabe: Abschluss - Freie Arbeit
Name: Jonas Fehrenbach
Datum: 21.07.2017
Matrikel: 254667

Hiermit versichere ich, dass ich diesen Code selbst geschrieben habe. Er wurde nicht kopiert und auch nicht diktiert.
*/
namespace L12_final {
    export class Background {
        constructor() {
            //field
            crc2.fillStyle = "#009900"; //green
            crc2.fillRect(0, 0, crc2.canvas.width, crc2.canvas.height);

            //vetical line
            crc2.fillStyle = "#ffffff"; //green
            crc2.fillRect(246, 0, 8, crc2.canvas.height);

            //horizontal line
            crc2.fillStyle = "gray";
            crc2.fillRect(0, 296, crc2.canvas.width, 8);         
        }
    }
}