/*
Aufgabe: Abschluss - Freie Arbeit
Name: Jonas Fehrenbach
Datum: 21.07.2017
Matrikel: 254667

Hiermit versichere ich, dass ich diesen Code selbst geschrieben habe. Er wurde nicht kopiert und auch nicht diktiert.
*/
namespace L14_final {
    window.addEventListener("load", start); //Start-Bildschirm wird aufgerufen

    //Deklarationen
    export let crc2: CanvasRenderingContext2D;
    let saveBackgroundData: ImageData;
    export let ball: MovingBall[] = []; //Array, um variabel Bälle hinzufügen zu können
    export let p: Panel;
    export let canvas: HTMLCanvasElement;
    export let b: Background;
    export let amount: number = 1; //Anzahl Bälle
    let count: number = 0;
    export let points: number = 0;
    let isRunning: boolean = true;

    //Start Bildschirm
    function start(_event: Event): void {
        let canvas: HTMLCanvasElement;
        canvas = document.getElementsByTagName("canvas")[0];
        console.log(canvas);
        canvas.style.marginTop = "20px";
        canvas.style.marginLeft = "20px";
        //Bei Klick auf den Canvas wird "startScreen2" aufgerufen
        canvas.addEventListener("click", startScreen2);
        //Bei Touch auf den Canvas wird "startScreen2Mobile" aufgerufen 
        canvas.addEventListener("touchstart", startScreen2Mobile);
        crc2 = canvas.getContext("2d");
        console.log(crc2);

        //Hintergrund
        crc2.fillStyle = "#d9d9d9";
        crc2.fillRect(0, 0, crc2.canvas.width, crc2.canvas.height);

        //grüner Kreis
        crc2.fillStyle = "#008000";
        crc2.beginPath();
        crc2.arc(35, 280, 55, 0, 2 * Math.PI);
        crc2.fill();

        //Startmenü 
        crc2.stroke();
        crc2.fillStyle = "black";
        crc2.font = "55px Arial";
        crc2.fillText("PONG - THE GAME", 50, 300);
        crc2.font = "20px Arial";
        crc2.fillText("Klicken Sie um das Spiel zu starten.", 140, 360);
        crc2.font = "12px Arial";
        crc2.fillText("© by Jonas Fehrenbach", 460, 688);
    }
    
    //--------------------------------------------------------------------------   
    //Hinweise zur Bedienung
    function startScreen2(_event: Event): void {

        let canvas: HTMLCanvasElement;
        canvas = document.getElementsByTagName("canvas")[0];
        console.log(canvas);
        canvas.style.marginTop = "20px";
        canvas.style.marginLeft = "20px";
        //Entfernt Eventlistener von "startScreen2" vom Canvas 
        canvas.removeEventListener("click", startScreen2);
        canvas.removeEventListener("touchstart", startScreen2Mobile);
        //Bei Klick auf den Canvas wird init aufgerufen und damit das Spiel gestartet
        canvas.addEventListener("click", init);
        crc2 = canvas.getContext("2d");
        console.log(crc2);

        //Hintergrund
        crc2.fillStyle = "#d9d9d9";
        crc2.fillRect(0, 0, crc2.canvas.width, crc2.canvas.height);

        //Hinweis-Text
        crc2.fillStyle = "black";
        crc2.font = "45px Arial";
        crc2.fillText("PONG - THE GAME", 80, 140);
        crc2.font = "20px Arial";
        crc2.fillText("Halten Sie den Ball im Spiel, indem Sie ", 80, 230);
        crc2.fillText("das schwarze Panel mit einem Mausklick ", 80, 260);
        crc2.fillText("in die gewünschte Richtung bewegen. ", 80, 290);
        crc2.fillText("Verlässt der Ball den unteren Spielfeldrand, ", 80, 320);
        crc2.fillText("ist das Spiel verloren. ", 80, 350);
        crc2.fillText("Nach wenigen Sekunden gibt es einen Neustart. ", 80, 380);
        crc2.fillStyle = "#008000";
        crc2.font = "30px Arial";
        crc2.fillText("Tippe um das Spiel zu starten.", 80, 480);
    };

    //--------------------------------------------------------------------------   
    //Hinweise zur Bedienung für Mobilgeräte
    function startScreen2Mobile(_event: Event): void {

        let canvas: HTMLCanvasElement;
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
        crc2 = canvas.getContext("2d");
        console.log(crc2);

        //Hintergrund
        crc2.fillStyle = "#d9d9d9";
        crc2.fillRect(0, 0, crc2.canvas.width, crc2.canvas.height);

        //Hinweis-Text
        crc2.fillStyle = "black";
        crc2.font = "45px Arial";
        crc2.fillText("PONG - THE GAME", 80, 140);
        crc2.font = "20px Arial";
        crc2.fillText("Halten Sie den Ball im Spiel, indem Sie ", 80, 230);
        crc2.fillText("das schwarze Panel mit einem Mausklick ", 80, 260);
        crc2.fillText("in die gewünschte Richtung bewegen. ", 80, 290);
        crc2.fillText("Verlässt der Ball den unteren Spielfeldrand, ", 80, 320);
        crc2.fillText("ist das Spiel verloren. ", 80, 350);
        crc2.fillText("Nach wenigen Sekunden gibt es einen Neustart. ", 80, 380);
        crc2.fillStyle = "#008000";
        crc2.font = "30px Arial";
        crc2.fillText("Tippe um das Spiel zu starten.", 80, 480);
    };

    //Spiele-Funktionalität
    function init(_event: Event): void {

        canvas = document.getElementsByTagName("canvas")[0];
        canvas.style.marginTop = "20px";
        canvas.style.marginLeft = "20px";
        console.log(canvas);
        canvas.removeEventListener("click", init);
        canvas.removeEventListener("touchstart", init);
        canvas.removeEventListener("touchend", init);
        crc2 = canvas.getContext("2d");
        console.log(crc2);

        //Erzeugen des Hintergrundes (Tischtennisplatte)
        b = new Background();

        //Hintergrund-Daten speichern
        saveBackgroundData = crc2.getImageData(0, 0, canvas.width, canvas.height);

        //Erzeugen des Panels
        p = new Panel();

        //Erzeugen des Balles
        for (let z: number = 0; z < amount; z++) {
            ball[z] = new MovingBall();
        }

        canvas.addEventListener("click", onClick);
        canvas.addEventListener("touch", onClick);

        window.setTimeout(animate, 20);
    }

    function animate(): void {
        crc2.putImageData(saveBackgroundData, 0, 0);
        writepoints();

        for (let i: number = 0; i < amount; i++) {
            let s: MovingBall = ball[i];
            updatepoints(i);

            //Im Falle von Game Over, d.h. wenn der Ball den unteren Spielfeldrand verlässt
            if (s.gameOver) {
                //Zähle bis 100 und starte danach das Spiel neu
                if (count < 100) {
                    console.log(count);
                    b.writeGameOver();
                    isRunning = false;
                    count++;
                }
                //Bei Neustart
                else {
                    count = 0;
                    points = 0;  //Reset der Punkteanzahl
                    p = new Panel();
                    isRunning = true;
                    ball.splice(0, ball.length);
                    ball[0] = new MovingBall();
                    amount = 1;
                }
            }

            else {
                s.update();
            }
        }//Ende for-Schleife
        p.draw();
        window.setTimeout(animate, 20);
    }

    function updatepoints(_i: number): void {

        //Falls der Ball vom Panel abprallt, dann führe folgendes aus:
        if (ball[_i].isHit) {
            points += 1;
            ball[_i].isHit = false;

            //Entspricht die Punktezahl 5, wird ein neuer Ball hinzugefügt
            if (points == 5) {
                let m: MovingBall = new MovingBall();
                ball.push(m);
                amount += 1;
            }

            //Entspricht die Punktezahl 10, wird ein neuer Ball hinzugefügt
            if (points == 10) {
                let m: MovingBall = new MovingBall();
                ball.push(m);
                amount += 1;
            }
        }
    }

    //Funktion zum Schreiben der Punktezahl auf den Canvas
    function writepoints(): void {
        crc2.fillStyle = "#ffffff";
        crc2.font = "27px Arial";
        crc2.fillText("Points: " + (points), 10, 37);
    }

    function onClick(_event: MouseEvent): void {
        if (isRunning) {
            p.move(_event.offsetX);
        }
    }
}
