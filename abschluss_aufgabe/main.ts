/*
Aufgabe: Abschluss - Freie Arbeit
Name: Jonas Fehrenbach
Datum: 21.07.2017
Matrikel: 254667

Hiermit versichere ich, dass ich diesen Code selbst geschrieben habe. Er wurde nicht kopiert und auch nicht diktiert.
*/

///<reference path="background.ts" />
///<reference path="ball.ts" />
///<reference path="panel.ts" />
namespace L12_final {
    window.addEventListener("load", init);

    export let crc2: CanvasRenderingContext2D;
    let saveBackgroundData: ImageData;
    export let ball: MovingBall[] = []; //Array, um variabel Bälle hinzufügen zu können
    export let p: Panel;
    export let canvas: HTMLCanvasElement;
    export let b: Background;
    export let amount: number = 1;
    let count = 0;

    function init(): void {

        canvas = document.getElementsByTagName("canvas")[0];
        canvas.style.marginLeft = "10px";
        console.log(canvas);
        crc2 = canvas.getContext("2d");
        console.log(crc2);

        //Erzeugen des Hintergrundes (Tischtennisplatte)
        b = new Background();

        //Hintergrund-Daten speichern
        saveBackgroundData = crc2.getImageData(0, 0, canvas.width, canvas.height);
        
        //Erzeugen des Panels
        p = new Panel();
        
        //Erzeugen des Balles
        for (let i: number = 0; i < amount; i++) {
            ball[i] = new MovingBall();
        }
        //ball = new MovingBall();

        canvas.addEventListener("click", onClick);
        canvas.addEventListener("touch", onClick);

        window.setTimeout(animate, 20);
    }


    function animate(): void {
        crc2.putImageData(saveBackgroundData, 0, 0);
        for (let i: number = 0; i < amount; i++) {
            let s: MovingBall = ball[i];

            if (s.gameOver) {
                if (count < 300) {
                    console.log(count);
                    b.writeGameOver();
                    count++;
                }
                else {
                    count = 0;
                    ball[i] = new MovingBall();
                }
            }
            else {
                s.update();
            }
        }//Ende for-Schleife

        // ### Der Balken muss nur einmal gesetzt werden, also nicht in der Schleife ###
        p.draw();
        // ### Selbe Sache mit dem Timeout: Der muss einmal ganz am Ende von Animate gesetzt werden, damit die Funktion einmal neu gestartet wird ###
        window.setTimeout(animate, 20);
    }

    // ### Zusätzliche Funktion die vom Event aufgerufen wird um den Referenzensalat in Panel.move() zu vermeiden ###
    function onClick(_event: MouseEvent): void {
        p.move(_event.offsetX);
    }
}