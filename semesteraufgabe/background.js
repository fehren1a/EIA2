/*
Aufgabe: Abschluss - Freie Arbeit
Name: Jonas Fehrenbach
Datum: 21.07.2017
Matrikel: 254667

Hiermit versichere ich, dass ich diesen Code selbst geschrieben habe. Er wurde nicht kopiert und auch nicht diktiert.
*/
var L14_final;
(function (L14_final) {
    class Background {
        constructor() {
            //field
            L14_final.crc2.fillStyle = "#009900"; //green
            L14_final.crc2.fillRect(0, 0, L14_final.crc2.canvas.width, L14_final.crc2.canvas.height);
            //vetical line
            L14_final.crc2.fillStyle = "#ffffff"; //weiß
            L14_final.crc2.fillRect(246, 0, 8, L14_final.crc2.canvas.height);
            //horizontal line
            L14_final.crc2.fillStyle = "gray";
            L14_final.crc2.fillRect(0, 296, L14_final.crc2.canvas.width, 8);
        }
        //"Game Over" wird auf das Spielfeld geschrieben
        writeGameOver() {
            L14_final.crc2.fillStyle = "#ffffff";
            L14_final.crc2.font = "40px Arial";
            L14_final.crc2.fillText("Game Over", 270, 285);
        }
    }
    L14_final.Background = Background;
})(L14_final || (L14_final = {}));
//# sourceMappingURL=background.js.map