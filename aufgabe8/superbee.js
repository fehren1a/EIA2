/*
Aufgabe: 8 - Inheritance: Blumen und Bienen
Name: Jonas Fehrenbach
Datum: 19.05.2017
Matrikel: 254667

Hiermit versichere ich, dass ich diesen Code selbst geschrieben habe. Er wurde nicht kopiert und auch nicht diktiert.
*/
var L8_Inheritance;
(function (L8_Inheritance) {
    class Superbee {
        constructor(_x, _y) {
            this.setRandomStyle();
            this.x = _x;
            this.y = _y;
        }
        update() {
            this.move();
            this.draw();
        }
        move() { }
        setRandomStyle() {
            this.size = Math.random() * 3.3 + 3;
            this.color = "hsl(" + Math.random() * 360 + ", 100%, 50%)";
        }
        draw() { }
    }
    L8_Inheritance.Superbee = Superbee;
})(L8_Inheritance || (L8_Inheritance = {}));
//# sourceMappingURL=superbee.js.map