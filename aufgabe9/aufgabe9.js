window.addEventListener("load", init);
let sorts = ["Chocolate", "Strawberry", "Vanilla", "Banana", "Caramel", "Lemon", "Mango"];
let container = ["Cone", "Cup"];
let fieldset;
let inputs = [];
function init() {
    fieldset = document.getElementsByTagName("fieldset")[0];
    createInputs();
    createRadios();
    fieldset.addEventListener("change", change);
}
function createInputs() {
    for (let i = 0; i < sorts.length; i++) {
        console.log(sorts[i]);
        createInput(sorts[i]);
    }
}
function createInput(_sort) {
    let label = document.createElement("label");
    let input = document.createElement("input");
    label.innerText = _sort;
    label.appendChild(input);
    input.type = "number";
    input.min = "0";
    input.value = "0";
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
function createRadio(_container) {
    let containerField = document.createElement("fieldset");
    containerField.id = "radio";
    let label = document.createElement("label");
    let input = document.createElement("input");
    label.innerText = _container;
    label.appendChild(input);
    input.type = "radio";
    input.value = "radio1";
    containerField.appendChild(label);
    console.log(inputs);
}
function change(_event) {
    let sum = 0;
    let target = _event.target;
    for (let i = 0; i < inputs.length; i++) {
        sum += parseInt(inputs[i].value);
    }
    console.log(sum);
    console.log("Changed " + target.name + " to " + target.value);
    if (this.id == "number")
        console.log("Changed " + target.name + " to " + target.checked);
}
//# sourceMappingURL=aufgabe9.js.map