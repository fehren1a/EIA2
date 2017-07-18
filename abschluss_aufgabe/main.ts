/*
Aufgabe: Abschluss - Freie Arbeit
Name: Jonas Fehrenbach
Datum: 21.07.2017
Matrikel: 254667

Hiermit versichere ich, dass ich diesen Code selbst geschrieben habe. Er wurde nicht kopiert und auch nicht diktiert.
*/
namespace L12_final {
    window.addEventListener("load", init);

    export let crc2: CanvasRenderingContext2D;
    let saveBackgroundData: ImageData;
    export let ball: MovingBall[] = []; //Array, um variabel Bälle hinzufügen zu können
    export let p: Panel;
    export let canvas: HTMLCanvasElement;
    export let b: Background;
    export let amount: number = 1;
    let count: number = 0;
    let counter: number = 0;
    console.log(counter);

    function init(_event: Event): void {

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
        writeCounter();

        for (let i: number = 0; i < amount; i++) {
            let s: MovingBall = ball[i];

            if (s.yspeed > 0 && s.bx > p.p1x && s.bx < (p.p1x + p.pwidth) && s.by > (p.p1y - p.pheight)) {
                counter += 1;
                writeCounter();
            }

            if (s.gameOver) {
                if (count < 100) {
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
        p.draw();
        window.setTimeout(animate, 20);
    } 
    function writeCounter(): void {
        crc2.fillStyle = "#ffffff";
        crc2.font = "20px Arial";
        crc2.fillText("Points: " + (counter), 10, 25);
    }

    function onClick(_event: MouseEvent): void {
        p.move(_event.offsetX);
    }
}