window.onload = function (): void{
    
let zeile: number = 0; //Deklaration f�r die einzelnen Zeilen
let n: number = 64; //Deklaration f�r die Anzahl der Felder
let rice: number = 1; //Deklaration f�r die Anzahl an Reis
    
  for (let i: number = 0; i < n; i++) {
      let div: HTMLDivElement = document.createElement("div");  //Div-Element wird erstellt
      document.body.appendChild(div);  //Div-Element wird an das Dokument drangeh�ngt
      
      if (i % 8 == 0) {  //Modulo 8 damit nach 8 Feldern ein Umbruch erfolgt, denn 8 % 8 = 0
            div.className += " floating";
          zeile++; //Das Programm soll eine Zeile hochz�hlen
           
      }
      
     if (zeile % 2 == 1) { //Wenn es sich um eine ungerade Zeile handelt, dann soll folgendes ausgef�hrt werden:
      
         //Bei einem Feld mit gerader Zahl soll mit schwarz begonnen werden und anschlie�end mit wei�
         if (i % 2 == 0) {  
            div.className += " black";
         }
      
         if (i % 2 == 1) { 
            div.className += " white";
         }
      }
      
      if (zeile % 2 ==0){ //Wenn es sich um eine gerade Zeile handelt, der Modulo also Null ist, dann soll folgendes ausgef�hrt werden:
      
          //Bei einem Feld mit gerader Zahl soll mit wei� begonnen werden und anschlie�end mit schwarz
          if (i % 2 == 0) { 
            div.className += " white";
          }
      
          if (i % 2 == 1) { 
            div.className += " black";
          }
       }
  
      //Code f�r Anzahl der Reisk�rner
      rice = Math.pow(2,i); //Reisk�rner werden verdoppelt
      var riceshort: string = rice.toExponential(4); //Exponentialschreibweise
      div.textContent= riceshort;
      document.body.appendChild(div);
      
   }  
 };


