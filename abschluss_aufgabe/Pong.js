var L12_final;
(function (L12_final) {
    class Pong {
        constructor() {
            this.ball = []; //Array, um variabel Bälle hinzufügen zu können
            this.amount = 1;
            this.count = 0;
            this.counter = 0;
            this.isRunning = true;
            //
        }
        init() {
            this.canvas = document.getElementsByTagName("canvas")[0];
            this.canvas.style.marginLeft = "10px";
            console.log(this.canvas);
            this.crx = this.canvas.getContext("2d");
            console.log(this.crx);
            //Erzeugen des Hintergrundes (Tischtennisplatte)
            this.b = new L12_final.Background();
            //Hintergrund-Daten speichern
            this.saveBackgroundData = this.crx.getImageData(0, 0, this.canvas.width, this.canvas.height);
            //Erzeugen des Panels
            this.p = new L12_final.Panel();
            //Erzeugen des Balles
            for (let z = 0; z < this.amount; z++) {
                this.ball[z] = new L12_final.MovingBall();
            }
            this.canvas.addEventListener("click", this.onClick);
            this.canvas.addEventListener("touch", this.onClick);
            window.setTimeout(this.animate, 20);
        }
        animate() {
            this.crx.putImageData(this.saveBackgroundData, 0, 0);
            this.writeCounter();
            for (let i = 0; i < this.amount; i++) {
                let s = this.ball[i];
                this.updateCounter(i);
                if (s.gameOver) {
                    if (this.count < 100) {
                        console.log(this.count);
                        this.b.writeGameOver();
                        this.isRunning = false;
                        this.counter = 0;
                        this.count++;
                    }
                    else {
                        this.count = 0;
                        this.p = new L12_final.Panel();
                        this.isRunning = true;
                        this.ball[i] = new L12_final.MovingBall();
                    }
                }
                else {
                    s.update();
                }
            } //Ende for-Schleife
            this.p.draw();
            window.setTimeout(this.animate, 20);
        }
        updateCounter(_i) {
            if (this.ball[_i].isHit) {
                this.counter += 1;
                this.ball[_i].isHit = false;
                if (this.counter == 5) {
                    let m = new L12_final.MovingBall();
                    this.ball.push(m);
                    this.amount += 1;
                }
                if (this.counter == 7) {
                    let m = new L12_final.MovingBall();
                    this.ball.push(m);
                    this.amount += 1;
                }
            }
        }
        writeCounter() {
            this.crx.fillStyle = "#ffffff";
            this.crx.font = "20px Arial";
            this.crx.fillText("Points: " + (this.counter), 10, 25);
        }
        onClick(_event) {
            if (this.isRunning) {
                this.p.move(_event.offsetX);
            }
        }
    }
    L12_final.Pong = Pong;
})(L12_final || (L12_final = {}));
//# sourceMappingURL=Pong.js.map