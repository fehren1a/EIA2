/*
Aufgabe: 3b Mau Mau
Name: Jonas Fehrenbach
Datum: 09.04.2017
Matrikel: 254667

Hiermit versichere ich, dass ich diesen Code selbst geschrieben habe. Er wurde nicht kopiert und auch nicht diktiert.
*/
document.addEventListener('DOMContentLoaded', function () {
    //Array f�r Nachziehstapel mit 32 Skat-Karten
    var newcards = ["Karo 7", "Karo 8", "Karo 9", "Karo 10", "Karo Bube", "Karo Dame", "Karo Koenig", "Karo As",
        "Kreuz 7", "Kreuz 8", "Kreuz 9", "Kreuz 10", "Kreuz Bube", "Kreuz Dame", "Kreuz Koenig", "Kreuz As",
        "Herz 7", "Herz 8", "Herz 9", "Herz 10", "Herz Bube", "Herz Dame", "Herz Koenig", "Herz As",
        "Pik 7", "Pik 8", "Pik 9", "Pik 10", "Pik Bube", "Pik Dame", "Pik Koenig", "Pik As"];
    var actualcards = []; //Array (zu Beginn leer) f�r Handkarten
    var oldcards = []; //Array (zu Beginn leer) f�r Ablagestapel
    //Dem Nachziehstapel soll ein Klick-Event hinzugef�gt werden
    document.getElementById("new").addEventListener("click", function () {
        var lengthnew = 0;
        var lengthactual = 0;
        lengthnew = newcards.length; //Laenge des Nachziehstapel-Arrays
        lengthactual = actualcards.length; //Laenge des Handkarten-Arrays
        //Bedingung: Es k�nnen nicht mehr als 5 Karten auf der Hand sein und es kann nur gezogen werden, wenn mehr als Null Karten im Nachziehstapel sind
        if (lengthactual < 5) {
            if (lengthnew > 0) {
                let randomnumber = Math.floor((Math.random() * lengthnew) + 0); //Eine Zufallszahl zwischen der Laenge des Nachziehstapel-Arrays und Null soll generiert werden
                actualcards.push(newcards[randomnumber]); //Die generierte Zufallszahl des Nachziehstapels wird nun dem Array der Hand hinzugef�gt
                newcards.splice(randomnumber, 1); //Damit man die zuvor generierte Zufallszahl nicht nochmal ziehen kann, wird diese aus dem Array des Nachziehstapels entfernt 
                //Zum Anzeigen auf der Benutzeroberfl�che wird nun ein Div-Element erstellt, an das Dokument drangehaengt und gestyled
                let div = document.createElement("div");
                document.getElementById("hand").appendChild(div);
                let s = div.style;
                s.border = "5px solid orange";
                s.width = "150px";
                s.height = "250px";
                s.fontSize = "1.5em";
                div.className = "handcards";
                div.textContent = actualcards[actualcards.length - 1];
                document.getElementById("new").textContent = "Nachziehkarten" + "\r\n" + "verbleibend: " + newcards.length.toString();
                //Der Handkarte (Div) soll nun ein Klick-Event gegeben werden
                div.addEventListener("click", function () {
                    var content;
                    var c = 0;
                    while (content != this.textContent) {
                        content = actualcards[c];
                        c++;
                    }
                    ;
                    c--; //Da in der Informatik bei 0 begonnen wird zu z�hlen, muss die Handkartenl�nge um 1 runtergez�hlt werden, damit es mit der Ausgabe �bereinstimmt
                    oldcards.push(actualcards[c]); //Die Karte der Hand wird nun dem Array des Ablagestapels hinzugef�gt
                    actualcards.splice(c, 1); //Die geklickte Karte wird aus dem Array der Handkarten entfernt
                    //Text, der ausgegeben werden soll
                    document.getElementById("old").textContent = "Ablagestapel oberste Karte: " + oldcards[oldcards.length - 1] + " | Karten: " + oldcards.length.toString();
                    document.getElementById("old").style.display = "inline-block";
                    this.parentNode.removeChild(this);
                });
            }
        }
        ;
    });
});
//# sourceMappingURL=aufgabe3b.js.map