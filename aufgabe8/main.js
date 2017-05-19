/*
Aufgabe: 8 - Inheritance: Blumen und Bienen
Name: Jonas Fehrenbach
Datum: 19.05.2017
Matrikel: 254667

Hiermit versichere ich, dass ich diesen Code selbst geschrieben habe. Er wurde nicht kopiert und auch nicht diktiert.
*/
var L8_Inheritance;
(function (L8_Inheritance) {
    window.addEventListener("load", init);
    let saveBackgroundData;
    let count = 10; //number of beens which start
    L8_Inheritance.bees = [];
    L8_Inheritance.flowers = [];
    function init(_event) {
        let canvas;
        canvas = document.getElementsByTagName("canvas")[0];
        console.log(canvas);
        L8_Inheritance.crc2 = canvas.getContext("2d");
        console.log(L8_Inheritance.crc2);
        //Background
        let b = new L8_Inheritance.Background();
        //random flowers
        for (var z = 0; z < 70; z++) {
            let rf = new L8_Inheritance.FlowerBig();
            rf.draw();
        }
        //save canvas data
        saveBackgroundData = L8_Inheritance.crc2.getImageData(0, 0, canvas.width, canvas.height);
        //special flowers (target of a honeybee) 
        for (let i = 0; i < 10; i++) {
            let sf = new L8_Inheritance.FlowerLittle();
            L8_Inheritance.flowers.push(sf);
            console.log(sf);
        }
        //start position add to array
        for (let i = 0; i < count; i++) {
            //bees fy to special flowers
            var s = new L8_Inheritance.Honeybee(635, 310);
            L8_Inheritance.bees.push(s);
            //bees fly normal in left direction 
            var n = new L8_Inheritance.Normalbee(635, 310);
            L8_Inheritance.bees.push(n);
        }
        window.setTimeout(animate, 50);
        canvas.addEventListener("click", addnewbee); //click to add new bee
        canvas.addEventListener("touch", addnewbee); //touch to add new bee
    }
    //all functions------------------------------------------------------------------
    function animate() {
        L8_Inheritance.crc2.putImageData(saveBackgroundData, 0, 0);
        for (let k = 0; k < L8_Inheritance.flowers.length; k++) {
            L8_Inheritance.flowers[k].draw();
        }
        //loop for moving the bees random in left direction
        for (var i = 0; i < count; i++) {
            var s = L8_Inheritance.bees[i];
            if (s.x < 0) {
                s.x = L8_Inheritance.crc2.canvas.width;
            }
            if (s.y < 0) {
                s.y = L8_Inheritance.crc2.canvas.height;
            }
            if (s.y >= L8_Inheritance.crc2.canvas.height) {
                s.y = 0;
            }
            s.update();
        }
        window.setTimeout(animate, 50);
    }
    //add a new bee to the bee house
    function addnewbee() {
        var s = new L8_Inheritance.Honeybee(635, 310);
        L8_Inheritance.bees.push(s);
        count += 1;
        console.log("new bee added");
    }
})(L8_Inheritance || (L8_Inheritance = {}));
//# sourceMappingURL=main.js.map