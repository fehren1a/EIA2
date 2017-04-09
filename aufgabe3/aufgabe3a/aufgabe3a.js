/*
Aufgabe: 3a Sissas Summe
Name: Jonas Fehrenbach
Datum: 09.04.2017
Matrikel: 254667

Hiermit versichere ich, dass ich diesen Code selbst geschrieben habe. Er wurde nicht kopiert und auch nicht diktiert.
*/
window.onload = function () {
    let zeile = 0; //Deklaration f�r die einzelnen Zeilen
    let n = 64; //Deklaration f�r die Anzahl der Felder
    let rice = 1; //Deklaration f�r die Anzahl an Reis
    for (let i = 0; i < n; i++) {
        let div = document.createElement("div"); //Div-Element wird erstellt
        document.body.appendChild(div); //Div-Element wird an das Dokument drangeh�ngt
        if (i % 8 == 0) {
            div.className += " floating";
            zeile++; //Das Programm soll eine Zeile hochz�hlen
        }
        if (zeile % 2 == 1) {
            //Bei einem Feld mit gerader Zahl soll mit schwarz begonnen werden und anschlie�end mit wei�
            if (i % 2 == 0) {
                div.className += " black";
            }
            if (i % 2 == 1) {
                div.className += " white";
            }
        }
        if (zeile % 2 == 0) {
            //Bei einem Feld mit gerader Zahl soll mit wei� begonnen werden und anschlie�end mit schwarz
            if (i % 2 == 0) {
                div.className += " white";
            }
            if (i % 2 == 1) {
                div.className += " black";
            }
        }
        //Code f�r Anzahl der Reisk�rner
        rice = Math.pow(2, i); //Reisk�rner werden verdoppelt
        var riceshort = rice.toExponential(4); //Exponentialschreibweise
        div.textContent = riceshort;
        document.body.appendChild(div);
    }
    //Ab hier f�r Aufgabe 3a relevant
    let divList = document.getElementsByTagName("div");
    for (let z = 0; z < 8; z++) {
        divList[z].addEventListener("click", function () {
            this.classList.toggle("chosen"); //Umschalter, damit ein ausgew�hltes Feld wieder demarkiert wird
            calculateSum();
        });
    }
};
function calculateSum() {
    let sum = 0;
    let length = 0;
    let counted = 0;
    let chosenDivs = document.getElementsByClassName("chosen");
    length = chosenDivs.length;
    while (counted < length) {
        sum = sum + Number(chosenDivs[counted].textContent);
        counted++;
    }
    showResult(sum);
}
function showResult(summe) {
    var ausgabe;
    //Die Reisk�rner werden als Dezimalzahl und als Hexadezimalzahl ausgegeben
    ausgabe = "Dezimal: " + summe.toString() + " | Hexadezimal: " + summe.toString(16);
    document.getElementById("poscontent").textContent = ausgabe;
}
document.addEventListener("mousemove", function (event) {
    //Koordinaten der Maus
    var x = event.clientX;
    var y = event.clientY;
    //Div-Element, welches an der Maus h�ngt, wird gestyled
    document.getElementById("poscontent").style.position = "absolute";
    document.getElementById("poscontent").style.top = y + 13 + "px";
    document.getElementById("poscontent").style.left = x + 13 + "px";
    document.getElementById("poscontent").style.border = "3px solid gray";
    document.getElementById("poscontent").style.backgroundColor = "red";
    document.getElementById("poscontent").style.padding = "10px";
});
//# sourceMappingURL=aufgabe3a.js.map