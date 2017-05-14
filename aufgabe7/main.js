/*
Aufgabe: 7 - objektorientierte Programmierung
Name: Jonas Fehrenbach
Datum: 14.05.2017
Matrikel: 254667

Hiermit versichere ich, dass ich diesen Code selbst geschrieben habe. Er wurde nicht kopiert und auch nicht diktiert.
*/
var L7_Classes;
(function (L7_Classes) {
    window.addEventListener("load", init);
    let saveBackgroundData;
    let count = 10; //number of beens which start
    let bees = [];
    let flowers = [];
    function init(_event) {
        let canvas;
        canvas = document.getElementsByTagName("canvas")[0];
        console.log(canvas);
        L7_Classes.crc2 = canvas.getContext("2d");
        console.log(L7_Classes.crc2);
        //Background
        let b = new L7_Classes.Background();
        //random flowers
        for (var z = 0; z < 100; z++) {
            let rf = new L7_Classes.Flower();
        }
        //save canvas data
        saveBackgroundData = L7_Classes.crc2.getImageData(0, 0, canvas.width, canvas.height);
        //special flowers 
        for (let i = 0; i < 8; i++) {
            let sf = new L7_Classes.Flower();
            flowers[i] = sf;
            flowers.push(sf);
            console.log(sf);
        }
        //start position add to array
        for (let i = 0; i < count; i++) {
            var s = new L7_Classes.Bee(635, 310);
            bees[i] = s;
        }
        window.setTimeout(animate, 50);
        canvas.addEventListener("click", addnewbee); //click to add new bee
        canvas.addEventListener("touch", addnewbee); //touch to add new bee
    }
    //all functions------------------------------------------------------------------
    function animate() {
        for (let k = 0; k < flowers.length; k++) {
            let f = flowers[k];
            f.draw();
        }
        L7_Classes.crc2.putImageData(saveBackgroundData, 0, 0);
        //loop for moving the bees random in left direction
        for (var i = 0; i < count; i++) {
            var s = bees[i];
            if (s.x < 0) {
                s.x = L7_Classes.crc2.canvas.width;
            }
            if (s.y < 0) {
                s.y = L7_Classes.crc2.canvas.height;
            }
            if (s.y >= L7_Classes.crc2.canvas.height) {
                s.y = 0;
            }
            s.update();
        }
        window.setTimeout(animate, 50);
    }
    //add a new bee to the bee house
    function addnewbee() {
        var s = new L7_Classes.Bee(635, 310);
        bees.push(s);
        count += 1;
        console.log("new bee added");
    }
})(L7_Classes || (L7_Classes = {}));
//# sourceMappingURL=main.js.map