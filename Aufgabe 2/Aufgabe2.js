window.onload = function () {
    let Zeile = 0;
    let n = 64;
    let Div;
    let rice = 1;
    for (let i = 0; i < n; i++) {
        let div = document.createElement("div");
        document.body.appendChild(div);
        if (i % 8 == 0) {
            div.className += " floating";
            Zeile++;
        }
        if (Zeile % 2 == 1) {
            if (i % 2 == 0) {
                div.className += " black";
            }
            if (i % 2 == 1) {
                div.className += " white";
            }
        }
        if (Zeile % 2 == 0) {
            if (i % 2 == 0) {
                div.className += " white";
            }
            if (i % 2 == 1) {
                div.className += " black";
            }
        }
        rice = Math.pow(2, i);
        var riceshort = rice.toExponential(4);
        div.textContent = riceshort;
        document.body.appendChild(div);
    }
};
//# sourceMappingURL=Aufgabe2.js.map