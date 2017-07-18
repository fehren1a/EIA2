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
    let count = 0;
    let counter = 0;
    console.log(counter);
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
            L12_final.ball[i] = new L12_final.MovingBall();
        }
        //ball = new MovingBall();
        L12_final.canvas.addEventListener("click", onClick);
        L12_final.canvas.addEventListener("touch", onClick);
        window.setTimeout(animate, 20);
    }
    function animate() {
        L12_final.crc2.putImageData(saveBackgroundData, 0, 0);
        writeCounter();
        for (let i = 0; i < L12_final.amount; i++) {
            let s = L12_final.ball[i];
            if (s.yspeed > 0 && s.bx > L12_final.p.p1x && s.bx < (L12_final.p.p1x + L12_final.p.pwidth) && s.by > (L12_final.p.p1y - L12_final.p.pheight)) {
                counter += 1;
                writeCounter();
            }
            if (s.gameOver) {
                if (count < 100) {
                    console.log(count);
                    L12_final.b.writeGameOver();
                    count++;
                }
                else {
                    count = 0;
                    L12_final.ball[i] = new L12_final.MovingBall();
                }
            }
            else {
                s.update();
            }
        } //Ende for-Schleife
        L12_final.p.draw();
        window.setTimeout(animate, 20);
    }
    function writeCounter() {
        L12_final.crc2.fillStyle = "#ffffff";
        L12_final.crc2.font = "20px Arial";
        L12_final.crc2.fillText("Points: " + (counter), 10, 25);
    }
    function onClick(_event) {
        L12_final.p.move(_event.offsetX);
    }
})(L12_final || (L12_final = {}));
//# sourceMappingURL=main.js.map