/*
Aufgabe: 3a Sissas Summe
Name: Jonas Fehrenbach
Datum: 09.04.2017
Matrikel: 254667

Hiermit versichere ich, dass ich diesen Code selbst geschrieben habe. Er wurde nicht kopiert und auch nicht diktiert.
*/

window.onload = function (): void{
    
let zeile: number = 0; //Deklaration für die einzelnen Zeilen
let n: number = 64; //Deklaration für die Anzahl der Felder
let rice: number = 1; //Deklaration für die Anzahl an Reis
    
  for (let i: number = 0; i < n; i++) {
      let div: HTMLDivElement = document.createElement("div");  //Div-Element wird erstellt
      document.body.appendChild(div);  //Div-Element wird an das Dokument drangehängt
      
      if (i % 8 == 0) {  //Modulo 8 damit nach 8 Feldern ein Umbruch erfolgt, denn 8 % 8 = 0
            div.className += " floating";
          zeile++; //Das Programm soll eine Zeile hochzählen
           
      }
      
     if (zeile % 2 == 1) { //Wenn es sich um eine ungerade Zeile handelt, dann soll folgendes ausgeführt werden:
      
         //Bei einem Feld mit gerader Zahl soll mit schwarz begonnen werden und anschließend mit weiß
         if (i % 2 == 0) {  
            div.className += " black";
         }
      
         if (i % 2 == 1) { 
            div.className += " white";
         }
      }
      
      if (zeile % 2 ==0){ //Wenn es sich um eine gerade Zeile handelt, der Modulo also Null ist, dann soll folgendes ausgeführt werden:
      
          //Bei einem Feld mit gerader Zahl soll mit weiß begonnen werden und anschließend mit schwarz
          if (i % 2 == 0) { 
            div.className += " white";
          }
      
          if (i % 2 == 1) { 
            div.className += " black";
          }
       }
  
      //Code für Anzahl der Reiskörner
      rice = Math.pow(2,i); //Reiskörner werden verdoppelt
      var riceshort: string = rice.toExponential(4); //Exponentialschreibweise
        div.textContent= riceshort;
      document.body.appendChild(div);
      
   }  
    
    //Ab hier für Aufgabe 3a relevant
    let divList: NodeListOf<HTMLElement> = document.getElementsByTagName("div");
    for (let z: number = 0; z < 8; z++) {  //Nur die ersten 8 Felder (erste Zeile) dürfen markiert werden
        divList[z].addEventListener("click", function (): void{
            this.classList.toggle("chosen"); //Umschalter, damit ein ausgewähltes Feld wieder demarkiert wird
                  calculateSum(); 
        });    
    }};
    
    function calculateSum(): void {
        let sum: number = 0;
        let length: number = 0;
        let counted: number = 0;
        let chosenDivs: NodeListOf<Element> = document.getElementsByClassName("chosen");
            length = chosenDivs.length;
        
        while (counted < length) {
            sum = sum + Number(chosenDivs[counted].textContent);
            counted++;
        }
    
        showResult(sum);
    } 
    
    function showResult(summe: Number): void {
       var ausgabe: string;
       //Die Reiskörner werden als Dezimalzahl und als Hexadezimalzahl ausgegeben
       ausgabe = "Dezimal: " + summe.toString() + " | Hexadezimal: " + summe.toString(16); 
       document.getElementById("poscontent").textContent = ausgabe;
    }
               
    document.addEventListener("mousemove", function(event): void{
    //Koordinaten der Maus
    var x: number = event.clientX;
    var y: number = event.clientY;
    
    //Div-Element, welches an der Maus hängt, wird gestyled
    document.getElementById("poscontent").style.position = "absolute";
    document.getElementById("poscontent").style.top = y + 13 + "px";
    document.getElementById("poscontent").style.left = x + 13 + "px";
    document.getElementById("poscontent").style.border = "3px solid gray";
    document.getElementById("poscontent").style.backgroundColor = "red";
    document.getElementById("poscontent").style.padding = "10px";
    
}); 

