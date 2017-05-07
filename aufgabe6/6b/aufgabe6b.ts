/*
Aufgabe: 6b - StudiVZ
Name: Jonas Fehrenbach
Datum: 07.05.2017
Matrikel: 254667

Hiermit versichere ich, dass ich diesen Code selbst geschrieben habe. Er wurde nicht kopiert und auch nicht diktiert.
*/

namespace StudiVZ {
    interface StudentData {
        //Datensatz
        matrikelnr: number;
        name: string;
        firstname: string;
        age: number;
        sex: boolean;
        comment: string;
    }
    var students: StudentData[] = [];
    var stop: boolean = false;

    while (!stop) {
        var action: string = prompt("Datensatz anlegen (n), abfragen(a) oder Programm beenden (s)\nn,a oder s eingeben");

        switch (action) {
            case "n":
            case "N":
                var input: string = prompt("Eingabe (jeweils mit Komma getrennt) von\nMatrikelnummer, Name, Vorname, Alter, Geschlecht (0=m oder 1=w) und Kommentar");
                alert(saveData(input));
                break;
            case "a":
            case "A":
                var matrikel: number = parseInt(prompt("Eingabe Matrikelnummer"));
                alert(queryData(matrikel));
                break;
            case "s":
            case "S":
                stop = true;
        }
    }

    function saveData(_input: string): string {
        var strArr: string[];
        strArr = _input.split(",");  //Der Input-String soll zerstückelt werden
        if (strArr.length < 5) {
            return "Bitte Eingabe vervollstaendigen";
        }

        //Nun kann auf einzelne Strings innerhalb der Input-String zugegriffen werden und umkonvertiert werden
        var data: StudentData = {
            matrikelnr: parseInt(strArr[0]),
            name: strArr[1],
            firstname: strArr[2],
            age: parseInt(strArr[3]),
            sex: parseInt(strArr[4]) == 0,
            comment: strArr[5]
        };
        //dem array students wird die data hinzugefügt
        students.push(data);
        let gender: string = data.sex ? "m" : "w";
        console.log(data);
        //Die eingegebenen Daten werden untereinander aufgelistet
        return "Ihre Daten wurden gespeichert:" + "\n" + "\nMatrikel: " + data.matrikelnr + "\nName: " + data.name + "\nVorname: " + data.firstname + "\nAlter: " + data.age + "\nGeschlecht: " + gender + "\nKommentar: " + data.comment;
    }
    function queryData(_matrikel: number): string {
        for (var z: number = 0; z < students.length; z++) {
            let gender: string = students[z].sex ? "m" : "w";
            //Sofern die eingegebene Matrikelnummer mit der eingespeicherten übereinstimmt, werden die Daten der Person angezeigt
            if (students[z].matrikelnr == _matrikel) {
                console.log("Matrikelnummern sind identisch");
                return "Die Suche ergab folgenden Treffer: " + "\n" + "\nMatrikel: " + students[z].matrikelnr + "\nName: " + students[z].name + "\nVorname:" + students[z].firstname + "\nAlter: " + students[z].age + "\nGeschlecht: " + gender + "\nKommentar:" + students[z].comment;
            }
        }
        //Falls die eingegebene Matrikelnummer nicht mit der zuvor gespeicherten Matrikelnummer übereinstimmt
        console.log("Matrikelnummern unterscheiden sich");
        return "Ihre Suche ergab leider keinen Treffer, kontrollieren Sie bitte Ihre Eingabe.";
    }
}
