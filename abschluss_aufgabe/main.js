/*
Aufgabe: Abschluss - Freie Arbeit
Name: Jonas Fehrenbach
Datum: 21.07.2017
Matrikel: 254667

Hiermit versichere ich, dass ich diesen Code selbst geschrieben habe. Er wurde nicht kopiert und auch nicht diktiert.
*/
var L12_final;
(function (L12_final) {
    window.addEventListener("load", init);
    let saveBackgroundData;
    L12_final.ball = []; //Array, um variabel Bälle hinzufügen zu können
    L12_final.amount = 1;
    function init(_event) {
        L12_final.canvas = document.getElementsByTagName("canvas")[0];
        L12_final.canvas.style.marginLeft = "10px";
        console.log(L12_final.canvas);
        L12_final.crc2 = L12_final.canvas.getContext("2d");
        console.log(L12_final.crc2);
        //Erzeugen des Hintergrundes (Tischtennisplatte)
        L12_final.b = new L12_final.Background();
        //Hintergrund-Daten speichern
        saveBackgroundData = L12_final.crc2.getImageData(0, 0, L12_final.canvas.width, L12_final.canvas.height);
        //Erzeugen des Panels
        L12_final.p = new L12_final.Panel();
        //Erzeugen des Balles
        for (let i = 0; i < L12_final.amount; i++) {
            var s = new L12_final.MovingBall();
            L12_final.ball[i] = s;
        }
        //ball = new MovingBall();
        L12_final.canvas.addEventListener("click", L12_final.p.move);
        L12_final.canvas.addEventListener("touch", L12_final.p.move);
        window.setTimeout(animate, 0.01);
    }
    let count = 0;
    function animate() {
        L12_final.crc2.putImageData(saveBackgroundData, 0, 0);
        for (var i = 0; i < L12_final.amount; i++) {
            var s = L12_final.ball[i];
            if (s.gameOver) {
                if (count < 300) {
                    console.log(count);
                    L12_final.b.writeGameOver();
                    count++;
                }
                else {
                    count = 0;
                    s = new L12_final.MovingBall();
                }
            }
            else {
                s.update();
                L12_final.p.draw();
            }
            window.setTimeout(animate, 0.01);
        } //Ende for-Schleife
    }
})(L12_final || (L12_final = {}));
//# sourceMappingURL=main.js.map