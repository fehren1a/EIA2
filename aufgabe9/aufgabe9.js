/*
Aufgabe: 9 - FormElements: Eisdealer
Name: Jonas Fehrenbach
Datum: 04.06.2017
Matrikel: 254667

Hiermit versichere ich, dass ich diesen Code selbst geschrieben habe. Er wurde nicht kopiert und auch nicht diktiert.
*/
window.addEventListener("load", init);
let sorts = ["Schokolade", "Erdbeere", "Vanille", "Banane", "Karamell", "Zitrone", "Mango"];
let container = ["Waffel", "Becher"];
let special = ["Schokostreusel", "Sahne", "Smarties"];
let fieldset;
let inputs = [];
let inputToppings = [];
let inputCone = [];
let order;
function init() {
    fieldset = document.getElementsByTagName("fieldset")[0];
    createInputs();
    createRadios();
    createCheckboxes();
    fieldset.addEventListener("change", change);
    //Für jedes Fieldset wird eine Variable deklariert und damit auf die jeweiligen ID's zugegriffen
    let sortsOfIcecream = document.getElementById("flavours");
    let toppings = document.getElementById("ConeCup");
    let special = document.getElementById("Special");
    let shoppingCard = document.getElementById("shoppingcard");
    //Bei den Fieldsets, welche für den Warenkorb eine Rolle spielen, muss ein Ohr (EventListener) angelegt werden
    sortsOfIcecream.addEventListener("change", change);
    toppings.addEventListener("change", change);
    special.addEventListener("change", change);
    order = document.getElementById("proofOrder");
    order.addEventListener("click", proof);
}
function createInputs() {
    for (let i = 0; i < sorts.length; i++) {
        console.log(sorts[i]);
        createInput(sorts[i]);
    }
}
//Erzeugung der Stepper für die Eissorten
function createInput(_sorts) {
    let label = document.createElement("label");
    let input = document.createElement("input");
    label.innerText = _sorts;
    label.appendChild(input);
    input.type = "number";
    input.min = "0";
    input.value = "0";
    input.name = _sorts;
    fieldset.appendChild(label);
    inputs.push(input);
    console.log(inputs);
}
function createRadios() {
    for (let i = 0; i < container.length; i++) {
        console.log(container[i]);
        createRadio(container[i]);
    }
}
//Erzeugung der Radio-Buttons
function createRadio(_container) {
    let containerField = document.getElementById("ConeCup");
    let input = document.createElement("input");
    let label = document.createElement("label");
    //label wird dem Radio Button zugewiesen, damit dieser auch anklickbar ist
    label.htmlFor = _container;
    label.textContent = _container;
    label.appendChild(input);
    label.id = _container;
    input.type = "radio";
    input.value = _container;
    input.id = _container;
    input.name = "Container";
    input.required = true;
    //An das Fieldset werden die zuvor definierten Daten angehängt
    containerField.appendChild(input);
    containerField.appendChild(label);
    inputCone.push(input);
    console.log(inputCone);
}
function createCheckboxes() {
    for (let i = 0; i < special.length; i++) {
        console.log(special[i]);
        createCheckbox(special[i]);
    }
}
//Erzeugung der Checkboxes
function createCheckbox(_special) {
    let containerField = document.getElementById("Special");
    let input = document.createElement("input");
    let label = document.createElement("label");
    //label wird der Checkbox zugewiesen, damit dieser auch anklickbar ist
    label.htmlFor = _special;
    label.textContent = _special;
    label.appendChild(input);
    label.id = _special;
    input.type = "checkbox";
    input.value = _special;
    input.id = _special;
    input.name = "Darbietung";
    //An das Fieldset werden die zuvor definierten Daten angehängt
    containerField.appendChild(input);
    containerField.appendChild(label);
    inputToppings.push(input);
    console.log(inputToppings);
}
function change() {
    let sum = 0;
    //Innerhalb der Array-Länge der Eissorten wird die Summe um eins hochgezählt
    for (let i = 0; i < inputs.length; i++) {
        sum += parseInt(inputs[i].value);
    }
    //Innerhalb der Array-Länge der Toppings wird die Summe um 1,5 hochgezählt
    for (let i = 0; i < inputToppings.length; i++) {
        if (inputToppings[i].checked) {
            sum += 1.5;
        }
    }
    //Innerhalb der Array-Länge der inputCone wird die Summe um eins hochgezählt
    for (let i = 0; i < inputCone.length; i++) {
        if (inputCone[i].checked) {
            sum += 0;
        }
    }
    changeShoppingcard(sum);
}
function changeShoppingcard(_sum) {
    //Variable, um eine Übersicht der ausgewählten Produkte in Form einer Liste anzeigen zu lassen
    let selectedProducts = document.getElementById("productlist");
    //Zu Beginn muss dieses Feld leer sein
    selectedProducts.innerText = "";
    //Anzeige der Eissorte in der Bestellübersicht
    for (let i = 0; i < inputs.length; i++) {
        if (parseInt(inputs[i].value) > 0) {
            selectedProducts.innerText += sorts[i] + ": " + (parseInt(inputs[i].value) * 1) + "€" + "\n";
        }
    }
    //Anzeige der Toppings in der Bestellübersicht
    for (let i = 0; i < inputToppings.length; i++) {
        if (inputToppings[i].checked) {
            selectedProducts.innerText += special[i] + ": " + " 1,50€" + "\n";
        }
    }
    //Anzeige, ob Waffel oder Becher gewählt wurde
    for (let i = 0; i < inputCone.length; i++) {
        if (inputCone[i].checked) {
            selectedProducts.innerText += container[i] + "\n";
        }
    }
    //Ausgabe der Summe
    let summeHtml = document.getElementById("total");
    summeHtml.innerText = "Total: " + _sum.toString() + "€";
}
//Funktion, welche die Kundendaten überprüft
function proof() {
    //Korrektur-Kommentar, welcher erscheint, sobald eine Eingabe nicht gültig ist
    let comment = ["Überprüfen Sie bitte folgende Eingabe/n: \n"];
    let firstname = document.getElementById("firstname");
    let name = document.getElementById("name");
    let street = document.getElementById("street");
    let PLZ = document.getElementById("PLZ");
    let town = document.getElementById("town");
    let mail = document.getElementById("mail");
    let delivery = document.getElementById("delivery");
    let numberOfIce = 0;
    let containers = 0;
    //Fallunterscheidungen
    //Überprüfung des Vornamens
    if (firstname.validity.valid == false) {
        comment.push("- Vorname \n");
        firstname.style.backgroundColor = "#ff5c33";
    }
    else {
        firstname.style.backgroundColor = "#a6a6a6";
    }
    //Überprüfung des Nachnamens
    if (name.validity.valid == false) {
        comment.push("- Nachname \n");
        name.style.backgroundColor = "#ff5c33";
    }
    else {
        name.style.backgroundColor = "#a6a6a6";
    }
    //Überprüfung der Straße
    if (street.validity.valid == false) {
        comment.push("- Straße \n");
        street.style.backgroundColor = "#ff5c33";
    }
    else {
        street.style.backgroundColor = "#a6a6a6";
    }
    //Überprüfung der Postleitzahl
    if (PLZ.validity.valid == false) {
        comment.push("- Postleitzahl \n");
        PLZ.style.backgroundColor = "#ff5c33";
    }
    else {
        PLZ.style.backgroundColor = "#a6a6a6";
    }
    //Überprüfung des Ortes
    if (town.validity.valid == false) {
        comment.push("- Ort \n");
        town.style.backgroundColor = "#ff5c33";
    }
    else {
        town.style.backgroundColor = "#a6a6a6";
    }
    //Überprüfung der E-Mail
    if (mail.validity.valid == false) {
        comment.push("- Email \n");
        mail.style.backgroundColor = "#ff5c33";
    }
    else {
        mail.style.backgroundColor = "#a6a6a6";
    }
    //Überprüfung der Lieferoptionen
    if (delivery.value != "Express" && delivery.value != "Standard")
        comment.push("- Lieferoptionen \n");
    for (let i = 0; i < inputs.length; i++) {
        if (parseInt(inputs[i].value) > 0)
            numberOfIce += 1;
    }
    if (numberOfIce == 0)
        comment.push("- Eissorten\n");
    for (let i = 0; i < inputCone.length; i++) {
        if (inputCone[i].checked)
            containers += 1;
    }
    if (containers == 0)
        comment.push("- Waffel oder Becher?");
    if (comment.length > 1) {
        for (let i = 0; i < comment.length; i++)
            comment.push;
        alert(comment.join(""));
    }
    else {
        alert("Vielen Dank für Ihre Bestellung! \nKlicken Sie nun auf OK");
    }
}
//# sourceMappingURL=aufgabe9.js.map