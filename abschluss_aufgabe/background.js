/*
Aufgabe: Abschluss - Freie Arbeit
Name: Jonas Fehrenbach
Datum: 21.07.2017
Matrikel: 254667

Hiermit versichere ich, dass ich diesen Code selbst geschrieben habe. Er wurde nicht kopiert und auch nicht diktiert.
*/
var L12_final;
(function (L12_final) {
    class Background {
        constructor() {
            //field
            L12_final.crx.fillStyle = "#009900"; //green
            L12_final.crx.fillRect(0, 0, L12_final.crx.canvas.width, L12_final.crx.canvas.height);
            //vetical line
            L12_final.crx.fillStyle = "#ffffff"; //weiß
            L12_final.crx.fillRect(246, 0, 8, L12_final.crx.canvas.height);
            //horizontal line
            L12_final.crx.fillStyle = "gray";
            L12_final.crx.fillRect(0, 296, L12_final.crx.canvas.width, 8);
        }
        //"Game Over" wird auf das Spielfeld geschrieben
        writeGameOver() {
            L12_final.crx.fillStyle = "#ffffff";
            L12_final.crx.font = "40px Arial";
            L12_final.crx.fillText("Game Over", 270, 285);
        }
    }
    L12_final.Background = Background;
})(L12_final || (L12_final = {}));
//# sourceMappingURL=background.js.map