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
            this.p1x = 205; //Ausgangsposition des Panels
        }
        update() {
            this.draw();
        }
        draw() {
            //Zeichnen des Panels
            L12_final.crx.fillStyle = this.color;
            L12_final.crx.beginPath();
            L12_final.crx.fillRect(this.p1x, this.p1y, this.pwidth, this.pheight);
            L12_final.crx.fill();
        }
        //Das Panel springt zur geklickten Position, die Mitte des Panels entspricht dem x-Wert des Klicks (Event)
        move(_x) {
            console.log("clicked");
            this.p1x = _x - (this.pwidth / 2);
        }
    }
    L12_final.Panel = Panel;
})(L12_final || (L12_final = {}));
//# sourceMappingURL=panel.js.map