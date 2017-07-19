/*
Aufgabe: Abschluss - Freie Arbeit
Name: Jonas Fehrenbach
Datum: 21.07.2017
Matrikel: 254667

Hiermit versichere ich, dass ich diesen Code selbst geschrieben habe. Er wurde nicht kopiert und auch nicht diktiert.
*/
namespace L14_final {
    window.addEventListener("load", start); //Start-Bildschirm wird aufgerufen

    export let crc2: CanvasRenderingContext2D;
    let saveBackgroundData: ImageData;
    export let ball: MovingBall[] = []; //Array, um variabel Bälle hinzufügen zu können
    export let p: Panel;
    export let canvas: HTMLCanvasElement;
    export let b: Background;
    export let amount: number = 1;
    let count: number = 0;
    export let counter: number = 0;
    let isRunning: boolean = true;
    console.log("Punktezahl: " + counter);

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

        //Startmenü 
        crc2.stroke();
        crc2.fillStyle = "black";
        crc2.font = "40px Arial";
        crc2.fillText("PONG - THE GAME", 60, 250);
        crc2.font = "20px Arial";
        crc2.fillText("Klicken Sie um das Spiel zu starten.", 60, 310);
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

        // Schrift
        crc2.strokeStyle = "#008000";
        crc2.moveTo(13, 80);
        crc2.lineTo(487, 80);
        crc2.stroke();

        crc2.fillStyle = "black";
        crc2.font = "40px Arial";
        crc2.textBaseline = "bottom";
        crc2.fillText("PONG - THE GAME", 71, 80);
        crc2.font = "20px Arial";
        crc2.fillText("Halte Sie den Ball im Spiel, indem Sie ", 20, 170);
        crc2.fillText("das schwarze Panel mit einem Mausklick ", 20, 200);
        crc2.fillText("in die gewünschte Richtung bewegen. ", 20, 230);
        crc2.fillText("Verlässt der Ball den unteren Spielfeldrand, ", 20, 260);
        crc2.fillText("ist das Spiel verloren. ", 20, 290);
        crc2.fillText("Nach wenigen Sekunden gibt es einen Neustart. ", 20, 320);
        crc2.fillStyle = "#008000";
        crc2.font = "30px Arial";
        crc2.fillText("Tippe um das Spiel zu starten.", 20, 420);
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

        // Schrift
        crc2.strokeStyle = "#004d00";
        crc2.moveTo(13, 80);
        crc2.lineTo(487, 80);
        crc2.stroke();

        crc2.fillStyle = "black";
        crc2.font = "40px Arial";
        crc2.textBaseline = "bottom";
        crc2.fillText("PONG - THE GAME", 71, 80);
        crc2.font = "20px Arial";
        crc2.fillText("Halte Sie den Ball im Spiel, indem Sie ", 20, 170);
        crc2.fillText("das schwarze Panel mit einem Mausklick ", 20, 200);
        crc2.fillText("in die gewünschte Richtung bewegen. ", 20, 230);
        crc2.fillText("Verlässt der Ball den unteren Spielfeldrand, ", 20, 260);
        crc2.fillText("ist das Spiel verloren. ", 20, 290);
        crc2.fillText("Nach wenigen Sekunden gibt es einen Neustart. ", 20, 320);
        crc2.fillStyle = "#008000";
        crc2.font = "30px Arial";
        crc2.fillText("Tippe um das Spiel zu starten.", 20, 420);
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
        writeCounter();

        for (let i: number = 0; i < amount; i++) {
            let s: MovingBall = ball[i];
            updateCounter(i);

            if (s.gameOver) {
                if (count < 100) {
                    console.log(count);
                    b.writeGameOver();
                    isRunning = false;
                    counter = 0;
                    count++;
                }
                else {
                    count = 0;
                    p = new Panel();
                    isRunning = true;
                    ball[i] = new MovingBall();
                }
            }

            else {
                s.update();
            }
        }//Ende for-Schleife
        p.draw();
        window.setTimeout(animate, 20);
    }

    function updateCounter(_i: number): void {

        if (ball[_i].isHit) {
            counter += 1;
            ball[_i].isHit = false;
            if (counter == 1) {
                let m: MovingBall = new MovingBall();
                ball.push(m);
                amount += 1;
            }

            if (counter == 7) {
                let m: MovingBall = new MovingBall();
                ball.push(m);
                amount += 1;
            }
        }
    }

    function writeCounter(): void {
        crc2.fillStyle = "#ffffff";
        crc2.font = "20px Arial";
        crc2.fillText("Points: " + (counter), 10, 25);
    }

    function onClick(_event: MouseEvent): void {
        if (isRunning) {
            p.move(_event.offsetX);
        }
    }
}
