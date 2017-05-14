/*
Aufgabe: 7 - objektorientierte Programmierung
Name: Jonas Fehrenbach
Datum: 14.05.2017
Matrikel: 254667

Hiermit versichere ich, dass ich diesen Code selbst geschrieben habe. Er wurde nicht kopiert und auch nicht diktiert.
*/

namespace L7_Classes {
    export class Flower {
        x: number;
        y: number;
        petalColor: string;
        centerColor: string;
        style: number;

        constructor() {
            console.log("flower");
            this.setRandomPosition();
            this.setRandomColor();
            this.setRandomStyle();
            this.draw();
        }

        draw(): void {

            if (this.style == 1) {
                this.drawLittleflower();

            } else {
                this.drawBigflower();
            }
        }

        setRandomStyle(): void {
            this.style = Math.floor((Math.random() * 2)) + 1;
        }

        setRandomPosition(): void {
            this.x = (Math.random() * (580 - 5)) + 20;
            this.y = (Math.random() * (500 - 255)) + 230;
        }

        setRandomColor(): void {
            let colorList: string[] = [
                "#c94dff", "#8db0f2", "#e68a00"
            ];
            this.petalColor = colorList[Math.floor(Math.random() * colorList.length)];
        }

        drawBigflower(): void {
            //leafe left
            crc2.beginPath();
            crc2.fillStyle = this.petalColor;
            crc2.arc(this.x - 8, this.y + 0, 5, 0, 2 * Math.PI);
            crc2.closePath();
            crc2.fill();

            //leafe right
            crc2.beginPath();
            crc2.fillStyle = this.petalColor;
            crc2.arc(this.x + 8, this.y + 0, 5, 0, 2 * Math.PI);
            crc2.closePath();
            crc2.fill();

            //leafe bottom left
            crc2.beginPath();
            crc2.fillStyle = this.petalColor;
            crc2.arc(this.x - 4, this.y + 6, 5, 0, 2 * Math.PI);
            crc2.closePath();
            crc2.fill();

            //leafe top right
            crc2.beginPath();
            crc2.fillStyle = this.petalColor;
            crc2.arc(this.x + 3, this.y - 7, 5, 0, 2 * Math.PI);
            crc2.closePath();
            crc2.fill();

            //leafe bottom right
            crc2.beginPath();
            crc2.fillStyle = this.petalColor;
            crc2.arc(this.x + 4, this.y + 6, 5, 0, 2 * Math.PI);
            crc2.closePath();
            crc2.fill();

            //leafe top left
            crc2.beginPath();
            crc2.fillStyle = this.petalColor;
            crc2.arc(this.x - 5, this.y - 7, 5, 0, 2 * Math.PI);
            crc2.closePath();
            crc2.fill();

            //leafe center
            crc2.beginPath();
            crc2.fillStyle = "#331a00";
            crc2.arc(this.x + 0, this.y + 0, 5.5, 0, 2 * Math.PI);
            crc2.closePath();
            crc2.fill();

        }

        drawLittleflower(): void {

            //petals
            crc2.fillStyle = this.petalColor;
            crc2.beginPath();
            crc2.arc(this.x, this.y - 5, 5, 0, 2 * Math.PI);
            crc2.fill();

            crc2.beginPath();
            crc2.arc(this.x - 5, this.y, 5, 0, 2 * Math.PI);
            crc2.fill();

            crc2.beginPath();
            crc2.arc(this.x + 5, this.y, 5, 0, 2 * Math.PI);
            crc2.fill();

            crc2.beginPath();
            crc2.arc(this.x, this.y + 5, 5, 0, 2 * Math.PI);
            crc2.fill();

            //center
            crc2.beginPath();
            crc2.arc(this.x, this.y, 5, 0, 2 * Math.PI);
            crc2.fillStyle = "#ffffff";
            crc2.fill();
        }
    }
}