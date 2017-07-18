namespace L12_final {
    export class Pong {

       crx: CanvasRenderingContext2D;
        saveBackgroundData: ImageData;
        ball: MovingBall[] = []; //Array, um variabel Bälle hinzufügen zu können
        p: Panel;
        canvas: HTMLCanvasElement;
        b: Background;
        amount: number = 1;
        count: number = 0;
        counter: number = 0;
        isRunning: boolean = true;

        constructor() {
            //
        }
        init(): void {

            this.canvas = document.getElementsByTagName("canvas")[0];
            this.canvas.style.marginLeft = "10px";
            console.log(this.canvas);
            this.crx = this.canvas.getContext("2d");
            console.log(this.crx);

            //Erzeugen des Hintergrundes (Tischtennisplatte)
            this.b = new Background();

            //Hintergrund-Daten speichern
            this.saveBackgroundData = this.crx.getImageData(0, 0, this.canvas.width, this.canvas.height);

            //Erzeugen des Panels
            this.p = new Panel();

            //Erzeugen des Balles
            for (let z: number = 0; z < this.amount; z++) {
                this.ball[z] = new MovingBall();
            }

            this.canvas.addEventListener("click", this.onClick);
            this.canvas.addEventListener("touch", this.onClick);

            window.setTimeout(this.animate, 20);         
        }

        animate(): void {
            this.crx.putImageData(this.saveBackgroundData, 0, 0);

            this.writeCounter();

            for (let i: number = 0; i < this.amount; i++) {
                let s: MovingBall = this.ball[i];
               
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
                        this.p = new Panel();
                        this.isRunning = true;
                        this.ball[i] = new MovingBall();
                    }
                }

                else {
                    s.update();
                }

            }//Ende for-Schleife
            this.p.draw();
            window.setTimeout(this.animate, 20);
        }

        updateCounter(_i: number): void {

            if (this.ball[_i].isHit) {
                this.counter += 1;
                this.ball[_i].isHit = false;
                if (this.counter == 5) {
                    let m: MovingBall = new MovingBall();
                    this.ball.push(m);
                    this.amount += 1;
                }

                if (this.counter == 7) {
                    let m: MovingBall = new MovingBall();
                    this.ball.push(m);
                    this.amount += 1;
                }
            }
        }

        writeCounter(): void {
            this.crx.fillStyle = "#ffffff";
            this.crx.font = "20px Arial";
            this.crx.fillText("Points: " + (this.counter), 10, 25);
        }

        onClick(_event: MouseEvent): void {
            if (this.isRunning) {
                this.p.move(_event.offsetX);
            }
        }
    }
}