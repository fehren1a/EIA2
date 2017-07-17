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
    export let ball: MovingBall;
    export let p: Panel;
    export let canvas: HTMLCanvasElement;
    export let b: Background

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

        p = new Panel();
        ball = new MovingBall();

        canvas.addEventListener("click", p.move);

        window.setTimeout(animate, 0.01);
    }

    let count: number = 0;
    function animate(): void {
        crc2.putImageData(saveBackgroundData, 0, 0);


        if (ball.gameOver) {
            if (count < 300) {
                console.log(count);
                b.writeGameOver();
                count++;
            }
            else {
                count = 0;
                ball = new MovingBall();
            }
        }

        else {
            ball.update();
            p.draw();
        }
        window.setTimeout(animate, 0.01);
    }
}