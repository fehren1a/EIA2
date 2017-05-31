window.addEventListener("load", init);

let sorts: string[] = ["Chocolate", "Strawberry", "Vanilla", "Banana", "Caramel", "Lemon", "Mango"];
let container: string[] = ["Cone", "Cup"];
let fieldset: HTMLFieldSetElement;
let inputs: HTMLInputElement[] = [];

function init(): void {
    fieldset = document.getElementsByTagName("fieldset")[0];
    createInputs();
    createRadios();
    fieldset.addEventListener("change", change);
}

function createInputs(): void {
    for (let i: number = 0; i < sorts.length; i++) {
        console.log(sorts[i]);
        createInput(sorts[i]);
    }
}

function createInput(_sort: string): void {
    let label: HTMLLabelElement = document.createElement("label");
    let input: HTMLInputElement = document.createElement("input");

    label.innerText = _sort;
    label.appendChild(input);
    input.type = "number";
    input.min = "0";
    input.value = "0";

    fieldset.appendChild(label);
    inputs.push(input);
    console.log(inputs);
}

function createRadios(): void {
    for (let i: number = 0; i < container.length; i++) {
        console.log(container[i]);
        createRadio(container[i]);
    }
}

function createRadio(_container: string): void {
    let containerField: HTMLFieldSetElement = document.createElement("fieldset");
    containerField.id = "radio";

    let label: HTMLLabelElement = document.createElement("label");
    let input: HTMLInputElement = document.createElement("input");

    label.innerText = _container;
    label.appendChild(input);
    input.type = "radio";
    input.value = "radio1";

    containerField.appendChild(label);
    console.log(inputs);
}

function change(_event: Event): void {
    let sum: number = 0;
    let target: HTMLInputElement = <HTMLInputElement>_event.target;
    for (let i: number = 0; i < inputs.length; i++) {
        sum += parseInt(inputs[i].value);
    }
    console.log(sum);
    console.log("Changed " + target.name + " to " + target.value);

    if (this.id == "number")
        console.log("Changed " + target.name + " to " + target.checked);
}

