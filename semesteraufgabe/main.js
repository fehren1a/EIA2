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
    L14_final.amount = 1;
    let count = 0;
    L14_final.counter = 0;
    let isRunning = true;
    console.log("Punktezahl: " + L14_final.counter);
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
        //Startmenü 
        L14_final.crc2.stroke();
        L14_final.crc2.fillStyle = "black";
        L14_final.crc2.font = "40px Arial";
        L14_final.crc2.fillText("PONG - THE GAME", 60, 250);
        L14_final.crc2.font = "20px Arial";
        L14_final.crc2.fillText("Klicken Sie um das Spiel zu starten.", 60, 310);
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
        // Schrift
        L14_final.crc2.strokeStyle = "#008000";
        L14_final.crc2.moveTo(13, 80);
        L14_final.crc2.lineTo(487, 80);
        L14_final.crc2.stroke();
        L14_final.crc2.fillStyle = "black";
        L14_final.crc2.font = "40px Arial";
        L14_final.crc2.textBaseline = "bottom";
        L14_final.crc2.fillText("PONG - THE GAME", 71, 80);
        L14_final.crc2.font = "20px Arial";
        L14_final.crc2.fillText("Halte Sie den Ball im Spiel, indem Sie ", 20, 170);
        L14_final.crc2.fillText("das schwarze Panel mit einem Mausklick ", 20, 200);
        L14_final.crc2.fillText("in die gewünschte Richtung bewegen. ", 20, 230);
        L14_final.crc2.fillText("Verlässt der Ball den unteren Spielfeldrand, ", 20, 260);
        L14_final.crc2.fillText("ist das Spiel verloren. ", 20, 290);
        L14_final.crc2.fillText("Nach wenigen Sekunden gibt es einen Neustart. ", 20, 320);
        L14_final.crc2.fillStyle = "#008000";
        L14_final.crc2.font = "30px Arial";
        L14_final.crc2.fillText("Tippe um das Spiel zu starten.", 20, 420);
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
        // Schrift
        L14_final.crc2.strokeStyle = "#004d00";
        L14_final.crc2.moveTo(13, 80);
        L14_final.crc2.lineTo(487, 80);
        L14_final.crc2.stroke();
        L14_final.crc2.fillStyle = "black";
        L14_final.crc2.font = "40px Arial";
        L14_final.crc2.textBaseline = "bottom";
        L14_final.crc2.fillText("PONG - THE GAME", 71, 80);
        L14_final.crc2.font = "20px Arial";
        L14_final.crc2.fillText("Halte Sie den Ball im Spiel, indem Sie ", 20, 170);
        L14_final.crc2.fillText("das schwarze Panel mit einem Mausklick ", 20, 200);
        L14_final.crc2.fillText("in die gewünschte Richtung bewegen. ", 20, 230);
        L14_final.crc2.fillText("Verlässt der Ball den unteren Spielfeldrand, ", 20, 260);
        L14_final.crc2.fillText("ist das Spiel verloren. ", 20, 290);
        L14_final.crc2.fillText("Nach wenigen Sekunden gibt es einen Neustart. ", 20, 320);
        L14_final.crc2.fillStyle = "#008000";
        L14_final.crc2.font = "30px Arial";
        L14_final.crc2.fillText("Tippe um das Spiel zu starten.", 20, 420);
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
        writeCounter();
        for (let i = 0; i < L14_final.amount; i++) {
            let s = L14_final.ball[i];
            updateCounter(i);
            if (s.gameOver) {
                if (count < 100) {
                    console.log(count);
                    L14_final.b.writeGameOver();
                    isRunning = false;
                    L14_final.counter = 0;
                    count++;
                }
                else {
                    count = 0;
                    L14_final.p = new L14_final.Panel();
                    isRunning = true;
                    L14_final.ball[i] = new L14_final.MovingBall();
                }
            }
            else {
                s.update();
            }
        } //Ende for-Schleife
        L14_final.p.draw();
        window.setTimeout(animate, 20);
    }
    function updateCounter(_i) {
        if (L14_final.ball[_i].isHit) {
            L14_final.counter += 1;
            L14_final.ball[_i].isHit = false;
            if (L14_final.counter == 1) {
                let m = new L14_final.MovingBall();
                L14_final.ball.push(m);
                L14_final.amount += 1;
            }
            if (L14_final.counter == 7) {
                let m = new L14_final.MovingBall();
                L14_final.ball.push(m);
                L14_final.amount += 1;
            }
        }
    }
    function writeCounter() {
        L14_final.crc2.fillStyle = "#ffffff";
        L14_final.crc2.font = "20px Arial";
        L14_final.crc2.fillText("Points: " + (L14_final.counter), 10, 25);
    }
    function onClick(_event) {
        if (isRunning) {
            L14_final.p.move(_event.offsetX);
        }
    }
})(L14_final || (L14_final = {}));
//# sourceMappingURL=main.js.map