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
 };


