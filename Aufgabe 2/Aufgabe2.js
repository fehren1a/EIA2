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
};
//# sourceMappingURL=Aufgabe2.js.map