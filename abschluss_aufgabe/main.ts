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

    function init(_event: Event): void {




        canvas = document.getElementsByTagName("canvas")[0];
        canvas.style.marginLeft = "10px";
        console.log(canvas);
        crc2 = canvas.getContext("2d");
        console.log(crc2);

        //Erzeugen des Hintergrundes (Tischtennisplatte)
        let b: Background = new Background();

        //Hintergrund-Daten speichern
        saveBackgroundData = crc2.getImageData(0, 0, canvas.width, canvas.height);

        p = new Panel();
        ball = new MovingBall();

        canvas.addEventListener("click", p.move);

        window.setTimeout(animate, 0.01);
    }

    function animate(): void {
        crc2.putImageData(saveBackgroundData, 0, 0);
        p.update();
        ball.update();
        window.setTimeout(animate, 0.01);
    }
}