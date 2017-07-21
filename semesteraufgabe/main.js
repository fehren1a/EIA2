/*
Aufgabe: Abschluss - Freie Arbeit
Name: Jonas Fehrenbach
Datum: 21.07.2017
Matrikel: 254667

Hiermit versichere ich, dass ich diesen Code selbst geschrieben habe. Er wurde nicht kopiert und auch nicht diktiert.
*/
var L14_final;
(function (L14_final) {
    window.addEventListener("load", start); //Start-Bildschirm wird aufgerufen
    let saveBackgroundData;
    L14_final.ball = []; //Array, um variabel Bälle hinzufügen zu können
    L14_final.amount = 1; //Anzahl Bälle
    let count = 0;
    L14_final.points = 0;
    let isRunning = true;
    //Start Bildschirm
    function start(_event) {
        let canvas;
        canvas = document.getElementsByTagName("canvas")[0];
        console.log(canvas);
        canvas.style.marginTop = "20px";
        canvas.style.marginLeft = "20px";
        //Bei Klick auf den Canvas wird "startScreen2" aufgerufen
        canvas.addEventListener("click", startScreen2);
        //Bei Touch auf den Canvas wird "startScreen2Mobile" aufgerufen 
        canvas.addEventListener("touchstart", startScreen2Mobile);
        L14_final.crc2 = canvas.getContext("2d");
        console.log(L14_final.crc2);
        //Hintergrund
        L14_final.crc2.fillStyle = "#d9d9d9";
        L14_final.crc2.fillRect(0, 0, L14_final.crc2.canvas.width, L14_final.crc2.canvas.height);
        //grüner Kreis
        L14_final.crc2.fillStyle = "#008000";
        L14_final.crc2.beginPath();
        L14_final.crc2.arc(35, 280, 55, 0, 2 * Math.PI);
        L14_final.crc2.fill();
        //Startmenü 
        L14_final.crc2.stroke();
        L14_final.crc2.fillStyle = "black";
        L14_final.crc2.font = "55px Arial";
        L14_final.crc2.fillText("PONG - THE GAME", 50, 300);
        L14_final.crc2.font = "20px Arial";
        L14_final.crc2.fillText("Klicken Sie um das Spiel zu starten.", 140, 360);
        L14_final.crc2.font = "12px Arial";
        L14_final.crc2.fillText("© by Jonas Fehrenbach", 460, 688);
    }
    //--------------------------------------------------------------------------   
    //Hinweise zur Bedienung
    function startScreen2(_event) {
        let canvas;
        canvas = document.getElementsByTagName("canvas")[0];
        console.log(canvas);
        canvas.style.marginTop = "20px";
        canvas.style.marginLeft = "20px";
        //Entfernt Eventlistener von "startScreen2" vom Canvas 
        canvas.removeEventListener("click", startScreen2);
        canvas.removeEventListener("touchstart", startScreen2Mobile);
        //Bei Klick auf den Canvas wird init aufgerufen und damit das Spiel gestartet
        canvas.addEventListener("click", init);
        L14_final.crc2 = canvas.getContext("2d");
        console.log(L14_final.crc2);
        //Hintergrund
        L14_final.crc2.fillStyle = "#d9d9d9";
        L14_final.crc2.fillRect(0, 0, L14_final.crc2.canvas.width, L14_final.crc2.canvas.height);
        //Hinweis-Text
        L14_final.crc2.fillStyle = "black";
        L14_final.crc2.font = "45px Arial";
        L14_final.crc2.fillText("PONG - THE GAME", 80, 140);
        L14_final.crc2.font = "20px Arial";
        L14_final.crc2.fillText("Halten Sie den Ball im Spiel, indem Sie ", 80, 230);
        L14_final.crc2.fillText("das schwarze Panel mit einem Mausklick ", 80, 260);
        L14_final.crc2.fillText("in die gewünschte Richtung bewegen. ", 80, 290);
        L14_final.crc2.fillText("Verlässt der Ball den unteren Spielfeldrand, ", 80, 320);
        L14_final.crc2.fillText("ist das Spiel verloren. ", 80, 350);
        L14_final.crc2.fillText("Nach wenigen Sekunden gibt es einen Neustart. ", 80, 380);
        L14_final.crc2.fillStyle = "#008000";
        L14_final.crc2.font = "30px Arial";
        L14_final.crc2.fillText("Tippe um das Spiel zu starten.", 80, 480);
    }
    ;
    //--------------------------------------------------------------------------   
    //Hinweise zur Bedienung für Mobilgeräte
    function startScreen2Mobile(_event) {
        let canvas;
        canvas = document.getElementsByTagName("canvas")[0];
        console.log(canvas);
        canvas.style.marginTop = "20px";
        canvas.style.marginLeft = "20px";
        //EventListener für die Hinweis-Seite werden entfernt 
        canvas.removeEventListener("touchstart", startScreen2Mobile);
        canvas.removeEventListener("touchend", startScreen2Mobile);
        canvas.removeEventListener("click", startScreen2);
        //Bei Touch auf den Canvas wird das Spiel aufgerufen
        canvas.addEventListener("touchstart", init);
        L14_final.crc2 = canvas.getContext("2d");
        console.log(L14_final.crc2);
        //Hintergrund
        L14_final.crc2.fillStyle = "#d9d9d9";
        L14_final.crc2.fillRect(0, 0, L14_final.crc2.canvas.width, L14_final.crc2.canvas.height);
        //Hinweis-Text
        L14_final.crc2.fillStyle = "black";
        L14_final.crc2.font = "45px Arial";
        L14_final.crc2.fillText("PONG - THE GAME", 80, 140);
        L14_final.crc2.font = "20px Arial";
        L14_final.crc2.fillText("Halten Sie den Ball im Spiel, indem Sie ", 80, 230);
        L14_final.crc2.fillText("das schwarze Panel mit einem Mausklick ", 80, 260);
        L14_final.crc2.fillText("in die gewünschte Richtung bewegen. ", 80, 290);
        L14_final.crc2.fillText("Verlässt der Ball den unteren Spielfeldrand, ", 80, 320);
        L14_final.crc2.fillText("ist das Spiel verloren. ", 80, 350);
        L14_final.crc2.fillText("Nach wenigen Sekunden gibt es einen Neustart. ", 80, 380);
        L14_final.crc2.fillStyle = "#008000";
        L14_final.crc2.font = "30px Arial";
        L14_final.crc2.fillText("Tippe um das Spiel zu starten.", 80, 480);
    }
    ;
    //Spiele-Funktionalität
    function init(_event) {
        L14_final.canvas = document.getElementsByTagName("canvas")[0];
        L14_final.canvas.style.marginTop = "20px";
        L14_final.canvas.style.marginLeft = "20px";
        console.log(L14_final.canvas);
        L14_final.canvas.removeEventListener("click", init);
        L14_final.canvas.removeEventListener("touchstart", init);
        L14_final.canvas.removeEventListener("touchend", init);
        L14_final.crc2 = L14_final.canvas.getContext("2d");
        console.log(L14_final.crc2);
        //Erzeugen des Hintergrundes (Tischtennisplatte)
        L14_final.b = new L14_final.Background();
        //Hintergrund-Daten speichern
        saveBackgroundData = L14_final.crc2.getImageData(0, 0, L14_final.canvas.width, L14_final.canvas.height);
        //Erzeugen des Panels
        L14_final.p = new L14_final.Panel();
        //Erzeugen des Balles
        for (let z = 0; z < L14_final.amount; z++) {
            L14_final.ball[z] = new L14_final.MovingBall();
        }
        L14_final.canvas.addEventListener("click", onClick);
        L14_final.canvas.addEventListener("touch", onClick);
        window.setTimeout(animate, 20);
    }
    function animate() {
        L14_final.crc2.putImageData(saveBackgroundData, 0, 0);
        writepoints();
        for (let i = 0; i < L14_final.amount; i++) {
            let s = L14_final.ball[i];
            updatepoints(i);
            //Im Falle von Game Over, d.h. wenn der Ball den unteren Spielfeldrand verlässt
            if (s.gameOver) {
                //Zähle bis 100 und starte danach das Spiel neu
                if (count < 100) {
                    console.log(count);
                    L14_final.b.writeGameOver();
                    isRunning = false;
                    count++;
                }
                else {
                    count = 0;
                    L14_final.points = 0; //Reset der Punkteanzahl
                    L14_final.p = new L14_final.Panel();
                    isRunning = true;
                    L14_final.ball.splice(0, L14_final.ball.length);
                    L14_final.ball[0] = new L14_final.MovingBall();
                    L14_final.amount = 1;
                }
            }
            else {
                s.update();
            }
        } //Ende for-Schleife
        L14_final.p.draw();
        window.setTimeout(animate, 20);
    }
    function updatepoints(_i) {
        //Falls der Ball vom Panel abprallt, dann führe folgendes aus:
        if (L14_final.ball[_i].isHit) {
            L14_final.points += 1;
            L14_final.ball[_i].isHit = false;
            //Entspricht die Punktezahl 5, wird ein neuer Ball hinzugefügt
            if (L14_final.points == 5) {
                let m = new L14_final.MovingBall();
                L14_final.ball.push(m);
                L14_final.amount += 1;
            }
            //Entspricht die Punktezahl 10, wird ein neuer Ball hinzugefügt
            if (L14_final.points == 10) {
                let m = new L14_final.MovingBall();
                L14_final.ball.push(m);
                L14_final.amount += 1;
            }
        }
    }
    //Funktion zum Schreiben der Punktezahl auf den Canvas
    function writepoints() {
        L14_final.crc2.fillStyle = "#ffffff";
        L14_final.crc2.font = "27px Arial";
        L14_final.crc2.fillText("Points: " + (L14_final.points), 10, 37);
    }
    function onClick(_event) {
        if (isRunning) {
            L14_final.p.move(_event.offsetX);
        }
    }
})(L14_final || (L14_final = {}));
//# sourceMappingURL=main.js.map