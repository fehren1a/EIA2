/*
Aufgabe: Abschluss - Freie Arbeit
Name: Jonas Fehrenbach
Datum: 21.07.2017
Matrikel: 254667

Hiermit versichere ich, dass ich diesen Code selbst geschrieben habe. Er wurde nicht kopiert und auch nicht diktiert.
*/
var L12_final;
(function (L12_final) {
    class Panel {
        constructor() {
            this.p1y = 580;
            this.pwidth = 90;
            this.pheight = 11;
            this.color = "#000000";
            this.p1x = 205;
            //
        }
        draw() {
            //Zeichnen des Panels
            L12_final.crc2.fillStyle = this.color;
            L12_final.crc2.beginPath();
            L12_final.crc2.fillRect(this.p1x, this.p1y, this.pwidth, this.pheight);
            L12_final.crc2.fill();
        }
        move(_event) {
            L12_final.p.p1x = _event.offsetX - (L12_final.p.pwidth / 2);
            //
        }
        reset() {
            //
        }
        update() {
            this.draw();
        }
    }
    L12_final.Panel = Panel;
})(L12_final || (L12_final = {}));
//# sourceMappingURL=panel.js.map