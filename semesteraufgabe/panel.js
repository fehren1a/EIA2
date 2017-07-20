/*
Aufgabe: Abschluss - Freie Arbeit
Name: Jonas Fehrenbach
Datum: 21.07.2017
Matrikel: 254667

Hiermit versichere ich, dass ich diesen Code selbst geschrieben habe. Er wurde nicht kopiert und auch nicht diktiert.
*/
var L14_final;
(function (L14_final) {
    class Panel {
        constructor() {
            this.pwidth = 90; //Breite des Panels
            this.pheight = 11; //Höhe des Panels
            this.color = "#000000";
            this.p1x = 255; //Ausgangsposition des Panels
            this.p1y = 670; //Ausgangsposition des Panels
        }
        draw() {
            //Zeichnen des Panels
            L14_final.crc2.fillStyle = this.color;
            L14_final.crc2.beginPath();
            L14_final.crc2.fillRect(this.p1x, this.p1y, this.pwidth, this.pheight);
        }
        //Das Panel springt zur geklickten Position, die Mitte des Panels entspricht dem x-Wert des Klicks (Event)
        move(_x) {
            console.log("clicked");
            this.p1x = _x - (this.pwidth / 2);
        }
    }
    L14_final.Panel = Panel;
})(L14_final || (L14_final = {}));
//# sourceMappingURL=panel.js.map