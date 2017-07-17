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
            var s: MovingBall = new MovingBall();
            ball[i] = s;
        }
        //ball = new MovingBall();

        canvas.addEventListener("click", p.move);
        canvas.addEventListener("touch", p.move);

        window.setTimeout(animate, 0.01);
    }

    let count: number = 0;
    function animate(): void {
        crc2.putImageData(saveBackgroundData, 0, 0);
        for (var i: number = 0; i < amount; i++) {
            var s: MovingBall = ball[i];

            if (s.gameOver) {
                if (count < 300) {
                    console.log(count);
                    b.writeGameOver();
                    count++;
                }
                else {
                    count = 0;
                    s = new MovingBall();
                }
            }

            else {
                s.update();
                p.draw();
            }
            window.setTimeout(animate, 0.01);
        }//Ende for-Schleife
    }
}