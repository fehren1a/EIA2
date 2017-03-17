document.addEventListener('DOMContentLoaded', function () {
    var getname:string = prompt("Bitte geben Sie in das folgende Feld Ihren Namen ein.");
    var welcome:string = "Hallo";
    document.body.innerHTML = welcome + getname + ":-)";
});

