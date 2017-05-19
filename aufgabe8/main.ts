/*
Aufgabe: 8 - Inheritance: Blumen und Bienen
Name: Jonas Fehrenbach
Datum: 19.05.2017
Matrikel: 254667

Hiermit versichere ich, dass ich diesen Code selbst geschrieben habe. Er wurde nicht kopiert und auch nicht diktiert.
*/

namespace L8_Inheritance {
    window.addEventListener("load", init);

    export let crc2: CanvasRenderingContext2D;
    let saveBackgroundData: ImageData;
    let count: number = 10; //number of beens which start

    export let bees: Superbee[] = [];
    export let flowers: Superflower[] = [];

    function init(_event: Event): void {

        let canvas: HTMLCanvasElement;
        canvas = document.getElementsByTagName("canvas")[0];
        console.log(canvas);
        crc2 = canvas.getContext("2d");
        console.log(crc2);

        //Background
        let b: Background = new Background();

        //random flowers
        for (var z: number = 0; z < 70; z++) {
            let rf: FlowerBig = new FlowerBig();
            rf.draw();
        }

        //save canvas data
        saveBackgroundData = crc2.getImageData(0, 0, canvas.width, canvas.height);

        //special flowers (target of a honeybee) 
        for (let i: number = 0; i < 10; i++) {
            let sf: FlowerLittle = new FlowerLittle(); 
            flowers.push(sf);
            console.log(sf);
        }

        //start position add to array
        for (let i: number = 0; i < count; i++) {
            //bees fy to special flowers
            var s: Honeybee = new Honeybee(635, 310);
            bees.push(s);
            //bees fly normal in left direction 
            var n: Normalbee = new Normalbee(635, 310);
            bees.push(n);
        }

        window.setTimeout(animate, 50);
        canvas.addEventListener("click", addnewbee); //click to add new bee
        canvas.addEventListener("touch", addnewbee); //touch to add new bee
    }

    //all functions------------------------------------------------------------------

    function animate(): void {
        crc2.putImageData(saveBackgroundData, 0, 0);

        for (let k: number = 0; k < flowers.length; k++) {
            flowers[k].draw();
        }

        //loop for moving the bees random in left direction
        for (var i: number = 0; i < count; i++) {
            var s: Superbee = bees[i];

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
        var s: Honeybee = new Honeybee(635, 310);
        bees.push(s);
        count += 1;
        console.log("new bee added");
    }
}
