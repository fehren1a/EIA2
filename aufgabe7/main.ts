/*
Aufgabe: 7 - objektorientierte Programmierung
Name: Jonas Fehrenbach
Datum: 14.05.2017
Matrikel: 254667

Hiermit versichere ich, dass ich diesen Code selbst geschrieben habe. Er wurde nicht kopiert und auch nicht diktiert.
*/

namespace L7_Classes {
    window.addEventListener("load", init);

    export let crc2: CanvasRenderingContext2D;
    let saveBackgroundData: ImageData;
    let count: number = 10; //number of beens which start

    let bees: Bee[] = [];
    let flowers: Flower[] = [];

    function init(_event: Event): void {

        let canvas: HTMLCanvasElement;
        canvas = document.getElementsByTagName("canvas")[0];
        console.log(canvas);
        crc2 = canvas.getContext("2d");
        console.log(crc2);

        //Background
        let b: Background = new Background();

        //random flowers
        for (var z: number = 0; z < 100; z++) {
            let rf: Flower = new Flower();
        }

        //save canvas data
        saveBackgroundData = crc2.getImageData(0, 0, canvas.width, canvas.height);

        //special flowers 
        for (let i: number = 0; i < 8; i++) {
            let sf: Flower = new Flower();
            flowers[i] = sf;
            flowers.push(sf);
            console.log(sf);
        }

        //start position add to array
        for (let i: number = 0; i < count; i++) {
            var s: Bee = new Bee(635, 310);
            bees[i] = s;
        }

        window.setTimeout(animate, 50);
        canvas.addEventListener("click", addnewbee); //click to add new bee
        canvas.addEventListener("touch", addnewbee); //touch to add new bee
    }

    //all functions------------------------------------------------------------------

    function animate(): void {

        for (let k: number = 0; k < flowers.length; k++) {
            let f: Flower = flowers[k];
            f.draw();

        }
        crc2.putImageData(saveBackgroundData, 0, 0);
        
        //loop for moving the bees random in left direction
        for (var i: number = 0; i < count; i++) {
            var s: Bee = bees[i];

            if (s.x < 0) {
                s.x = crc2.canvas.width;
            }
            if (s.y < 0) {
                s.y = crc2.canvas.height;
            }
            if (s.y >= crc2.canvas.height) {
                s.y = 0;
            }
            s.update();
        }
        window.setTimeout(animate, 50);
    }

    //add a new bee to the bee house
    function addnewbee(): void {
        var s: Bee = new Bee(635, 310);
        bees.push(s);
        count += 1;
        console.log("new bee added");
    }
}
