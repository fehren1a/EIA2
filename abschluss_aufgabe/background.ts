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
            crx.fillStyle = "#009900"; //green
            crx.fillRect(0, 0, crx.canvas.width, crx.canvas.height);

            //vetical line
            crx.fillStyle = "#ffffff"; //weiß
            crx.fillRect(246, 0, 8, crx.canvas.height);

            //horizontal line
            crx.fillStyle = "gray";
            crx.fillRect(0, 296, crx.canvas.width, 8);
        }
        
        //"Game Over" wird auf das Spielfeld geschrieben
        writeGameOver(): void {
            crx.fillStyle = "#ffffff";
            crx.font = "40px Arial";
            crx.fillText("Game Over", 270, 285);
        }

    }
}