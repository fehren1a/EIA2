/*
Aufgabe: 5 - Bienenschwarm
Name: Jonas Fehrenbach
Datum: 30.04.2017
Matrikel: 254667

Hiermit versichere ich, dass ich diesen Code selbst geschrieben habe. Er wurde nicht kopiert und auch nicht diktiert.
*/

namespace L5_animation {
    window.addEventListener("load", init);
    let crc2: CanvasRenderingContext2D;
    let colorList: string[] = [
        "#c94dff", "#8db0f2", "#e68a00"
    ];

    let saveBackgroundData: ImageData;
    let x: number[] = [];
    let y: number[] = [];
    let count: number = 10; //number of beens which start


    function init(_event: Event): void {
       
        console.log("CanvasWindow");
        let canvas: HTMLCanvasElement;
        canvas = document.getElementsByTagName("canvas")[0];
        console.log(canvas);
        crc2 = canvas.getContext("2d");
        console.log(crc2);

        let bild: HTMLImageElement;
        bild = document.getElementsByTagName("img")[0];

        //sky
        crc2.fillStyle = "#80b3ff"; //blue
        crc2.fillRect(0, -200, canvas.width, canvas.height);

        //field
        crc2.fillStyle = "#009900"; //green
        crc2.fillRect(0, 200, canvas.width, canvas.height);

        //function calls

        //mountainBackground
        drawMountain(30, 120, "#00ff00", "#737373");
        drawMountain(250, 110, "#00ff00", "#737373");
        drawMountain(520, 90, "#00ff00", "#737373");

        //mountainForeground
        drawMountain(70, 135, "#00ff00", "#8c8c8c");
        drawMountain(180, 120, "#00ff00", "#8c8c8c");
        drawMountain(320, 130, "#00ff00", "#8c8c8c");
        drawMountain(470, 120, "#00ff00", "#8c8c8c");
        drawMountain(600, 120, "#00ff00", "#8c8c8c");
        drawMountain(730, 120, "#00ff00", "#8c8c8c");

        //clouds
        drawCloud(90, 0, 15, "#ffffff");
        drawCloud(320, -70, 20, "#ffffff");
        drawCloud(490, -20, 14, "#ffffff");
        drawCloud(590, 10, 17, "#ffffff");

        //sun
        drawSun(690, 10, 50, "#ff8533", "#ffff33");

        //little flower with four leafes
        drawFlowerLittle(50, 360, "#e6b800", "#ffffff");
        drawFlowerLittle(400, 270, "#e6b800", "#ffffff");

        //big flower with six leafes
        drawFlowerBig(270, 260, "#ffff00");
        drawFlowerBig(500, 270, "#ffff00");
        drawFlowerBig(130, 350, "#00ace6");
        drawFlowerBig(390, 310, "#00ace6");
        drawFlowerBig(610, 440, "#00ace6");

        //tree
        drawTree(680, 190);
        drawTree(610, 197);
        drawTree(400, 205);


        //loop which gives 100 flowers a random position
        for (var z: number = 0; z < 100; z++) {
            var xRandom: number = (Math.random() * (620 - 5)) + 60;
            var yRandom: number = (Math.random() * (500 - 255)) + 230;
            var colorRandom: string = colorList[Math.floor(Math.random() * colorList.length)];
            var flowerRandom: number = Math.floor((Math.random() * 2)) + 1;

            if (flowerRandom == 1) {
                drawFlowerLittle(xRandom, yRandom, "#ffff66", colorRandom);

            } else {
                drawFlowerBig(xRandom, yRandom, colorRandom);
            }
        }

        //bee house
        drawBeeHouse(640, 300);

        //-------------------- exercise 5 --------------------------------------------

        //save canvas data
        saveBackgroundData = crc2.getImageData(0, 0, canvas.width, canvas.height);

        //start position add to array
        for (var i: number = 0; i < count; i++) {
            x[i] = 635;
            y[i] = 310;
        }

        window.setTimeout(animate, 50);
        canvas.addEventListener("click", addnewbee); //click to add new bee
        canvas.addEventListener("touch", addnewbee); //touch to add new bee
    }

    //all functions

    function animate(): void {
        crc2.putImageData(saveBackgroundData, 0, 0);

        //loop for moving the bees random in left direction
        for (var i: number = 0; i < count; i++) {
            x[i] += Math.random() * -5 - 1;
            y[i] += Math.random() * 6 - 3;

            if (x[i] < 0) {
                x[i] = crc2.canvas.width;
            }
            if (y[i] < 0) {
                y[i] = crc2.canvas.height;
            }
            if (y[i] >= crc2.canvas.height) {
                y[i] = 0;
            }
            drawBee(x[i], y[i]);
        }
        window.setTimeout(animate, 50);
    }

    //add a new bee to the bee house
    function addnewbee(_event: Event): void {
        x.push(635);
        y.push(310);
        count += 1;
    }
    

    function drawMountain(_x: number, _y: number, _strokeColor: string, _fillColor: string): void {

        crc2.beginPath();
        crc2.fillStyle = _fillColor;
        crc2.strokeStyle = _strokeColor;
        crc2.moveTo(_x - 80, _y + 80);
        crc2.lineTo(_x, _y - 80);
        crc2.lineTo(_x + 80, _y + 80);
        crc2.closePath();
        crc2.fill();
    }

    function drawCloud(_x: number, _y: number, _radius: number, _fillColor: string): void {

        crc2.beginPath();
        crc2.fillStyle = _fillColor;
        crc2.arc(_x + 30, _y + 80, _radius, 0, 2 * Math.PI);
        crc2.closePath();
        crc2.fill();

        crc2.beginPath();
        crc2.fillStyle = _fillColor;
        crc2.arc(_x + 50, _y + 90, _radius, 0, 2 * Math.PI);
        crc2.closePath();
        crc2.fill();

        crc2.beginPath();
        crc2.fillStyle = _fillColor;
        crc2.arc(_x + 55, _y + 70, _radius, 0, 2 * Math.PI);
        crc2.closePath();
        crc2.fill();

        crc2.beginPath();
        crc2.fillStyle = _fillColor;
        crc2.arc(_x + 70, _y + 85, _radius, 0, 2 * Math.PI);
        crc2.closePath();
        crc2.fill();

        crc2.beginPath();
        crc2.fillStyle = _fillColor;
        crc2.arc(_x + 80, _y + 75, _radius, 0, 2 * Math.PI);
        crc2.closePath();
        crc2.fill();
    }

    function drawSun(_x: number, _y: number, _radius: number, _strokeColor: string, _fillColor: string): void {

        crc2.beginPath();
        crc2.fillStyle = _fillColor;
        crc2.strokeStyle = _strokeColor;
        crc2.arc(_x, _y, _radius, 0, 2 * Math.PI);
        crc2.closePath();
        crc2.fill();
        crc2.stroke();
    }

    function drawFlowerBig(_x: number, _y: number, _petalColor: string): void {

        //leafe left
        crc2.beginPath();
        crc2.fillStyle = _petalColor;
        crc2.arc(_x - 8, _y + 0, 5, 0, 2 * Math.PI);
        crc2.closePath();
        crc2.fill();

        //leafe right
        crc2.beginPath();
        crc2.fillStyle = _petalColor;
        crc2.arc(_x + 8, _y + 0, 5, 0, 2 * Math.PI);
        crc2.closePath();
        crc2.fill();

        //leafe bottom left
        crc2.beginPath();
        crc2.fillStyle = _petalColor;
        crc2.arc(_x - 4, _y + 6, 5, 0, 2 * Math.PI);
        crc2.closePath();
        crc2.fill();

        //leafe top right
        crc2.beginPath();
        crc2.fillStyle = _petalColor;
        crc2.arc(_x + 3, _y - 7, 5, 0, 2 * Math.PI);
        crc2.closePath();
        crc2.fill();

        //leafe bottom right
        crc2.beginPath();
        crc2.fillStyle = _petalColor;
        crc2.arc(_x + 4, _y + 6, 5, 0, 2 * Math.PI);
        crc2.closePath();
        crc2.fill();

        //leafe top left
        crc2.beginPath();
        crc2.fillStyle = _petalColor;
        crc2.arc(_x - 5, _y - 7, 5, 0, 2 * Math.PI);
        crc2.closePath();
        crc2.fill();

        //leafe center
        crc2.beginPath();
        crc2.fillStyle = "#331a00";
        crc2.arc(_x + 0, _y + 0, 5.5, 0, 2 * Math.PI);
        crc2.closePath();
        crc2.fill();
    }

    function drawFlowerLittle(_x: number, _y: number, _centerColor: string, _petalColor: string): void {

        //petals
        crc2.fillStyle = _petalColor;
        crc2.beginPath();
        crc2.arc(_x, _y - 5, 5, 0, 2 * Math.PI);
        crc2.fill();

        crc2.beginPath();
        crc2.arc(_x - 5, _y, 5, 0, 2 * Math.PI);
        crc2.fill();

        crc2.beginPath();
        crc2.arc(_x + 5, _y, 5, 0, 2 * Math.PI);
        crc2.fill();

        crc2.beginPath();
        crc2.arc(_x, _y + 5, 5, 0, 2 * Math.PI);
        crc2.fill();

        //center
        crc2.beginPath();
        crc2.arc(_x, _y, 5, 0, 2 * Math.PI);
        crc2.fillStyle = _centerColor;
        crc2.fill();
    }

    function drawBeeHouse(_x: number, _y: number): void {

        crc2.beginPath();
        crc2.fillStyle = "#70380f";
        crc2.fillRect(_x - 3, _y + 30, 6, 55);
        crc2.fillRect(_x - 25, _y, 50, 30);
        crc2.moveTo(_x - 25, _y);
        crc2.lineTo(_x, _y - 20);
        crc2.lineTo(_x + 25, _y);
        crc2.closePath();
        crc2.fill();

        //circle in the middle of the bee house
        crc2.beginPath();
        crc2.fillStyle = "#9d4e15";
        crc2.strokeStyle = "#432109";
        crc2.arc(_x, _y + 12, 10, 0, 2 * Math.PI);
        crc2.closePath();
        crc2.fill();
        crc2.stroke();
    }

    function drawTree(_x: number, _y: number): void {

        crc2.beginPath();
        crc2.fillStyle = "#4d2600";
        crc2.strokeStyle = "#0a290a";
        crc2.fillRect(_x - 8, _y, 16, 20);
        crc2.fillStyle = "#145214";
        crc2.moveTo(_x - 50, _y);
        crc2.lineTo(_x, _y - 50);
        crc2.lineTo(_x + 50, _y);
        crc2.closePath();
        crc2.fill();

        crc2.beginPath();
        crc2.fillStyle = "#145214";
        crc2.strokeStyle = "#0a290a";
        crc2.moveTo(_x - 40, _y - 30);
        crc2.lineTo(_x, _y - 67);
        crc2.lineTo(_x + 40, _y - 30);
        crc2.closePath();
        crc2.fill();

        crc2.beginPath();
        crc2.fillStyle = "#145214";
        crc2.strokeStyle = "#0a290a";
        crc2.moveTo(_x - 20, _y - 60);
        crc2.lineTo(_x, _y - 80);
        crc2.lineTo(_x + 20, _y - 60);
        crc2.closePath();
        crc2.fill();
    }

    function drawBee(_x: number, _y: number): void {
        
        //head
        crc2.beginPath();
        crc2.fillStyle = "#000000";
        crc2.arc(_x - 1, _y + 2, 5, 0, 2 * Math.PI);
        crc2.fill();
        
        //eye
        crc2.beginPath();
        crc2.fillStyle = "white";
        crc2.arc(_x - 2, _y + 1, 1, 0, 2 * Math.PI);
        crc2.fill();
        
        //body
        crc2.fillStyle = "#000000";
        crc2.fillRect(_x, _y, 3, 10);

        crc2.fillStyle = "yellow";
        crc2.fillRect(_x + 3, _y, 3, 10);

        crc2.fillStyle = "#000000";
        crc2.fillRect(_x + 6, _y, 3, 10);

        crc2.fillStyle = "yellow";
        crc2.fillRect(_x + 9, _y, 3, 10);

        crc2.fillStyle = "#000000";
        crc2.fillRect(_x + 12, _y, 3, 10);
        
        //feeler 1
        crc2.beginPath();
        crc2.moveTo(_x - 2, _y);
        crc2.strokeStyle = "#000000";
        crc2.lineTo(_x - 6, _y - 6);
        crc2.closePath();
        crc2.stroke();
        
        //feeler 2
        crc2.beginPath();
        crc2.moveTo(_x - 2, _y);
        crc2.strokeStyle = "#000000";
        crc2.lineTo(_x - 1, _y - 6);
        crc2.closePath();
        crc2.stroke();
        
        //spike
        crc2.beginPath();
        crc2.moveTo(_x + 15, _y + 5);
        crc2.strokeStyle = "#000000";
        crc2.lineTo(_x + 18, _y + 5);
        crc2.closePath();
        crc2.stroke();
    }
}
