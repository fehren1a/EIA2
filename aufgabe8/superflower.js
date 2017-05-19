/*
Aufgabe: 8 - Inheritance: Blumen und Bienen
Name: Jonas Fehrenbach
Datum: 19.05.2017
Matrikel: 254667

Hiermit versichere ich, dass ich diesen Code selbst geschrieben habe. Er wurde nicht kopiert und auch nicht diktiert.
*/
var L8_Inheritance;
(function (L8_Inheritance) {
    class Superflower {
        constructor() {
            this.setRandomPosition();
            this.setRandomColor();
            this.setRandomStyle();
        }
        draw() { }
        setRandomStyle() {
            this.style = Math.floor((Math.random() * 2)) + 1;
        }
        setRandomPosition() {
            this.x = (Math.random() * (580 - 5)) + 20;
            this.y = (Math.random() * (500 - 255)) + 230;
        }
        setRandomColor() {
            let colorList = [
                "#c94dff", "#8db0f2", "#e68a00"
            ];
            this.petalColor = colorList[Math.floor(Math.random() * colorList.length)];
        }
    }
    L8_Inheritance.Superflower = Superflower;
})(L8_Inheritance || (L8_Inheritance = {}));
//# sourceMappingURL=superflower.js.map