var L12_final;
(function (L12_final) {
    window.addEventListener("load", loadStartScreen);
    let anzeige = 0;
    function loadStartScreen(_event) {
        let canvas = document.getElementsByTagName("canvas")[0];
        canvas.style.marginLeft = "10px";
        console.log(canvas);
        L12_final.crx = canvas.getContext("2d");
        console.log(L12_final.crx);
        L12_final.help = new L12_final.Help();
        L12_final.pgame = new L12_final.Pong();
        switch (anzeige) {
            case 0:
                drawStartScreen();
                drawStart();
                drawHelp();
                break;
            case 1:
                L12_final.pgame.init();
                break;
            case 2:
                L12_final.help.drawStartScreen();
                L12_final.help.drawTutorialText();
                break;
        }
    }
    function drawStartScreen() {
        L12_final.crx.fillStyle = "gray";
        L12_final.crx.fillRect(0, 0, L12_final.crx.canvas.width, L12_final.crx.canvas.height);
    }
    function drawStart() {
        L12_final.crx.fillStyle = "#ffffff";
        L12_final.crx.font = "40px Arial";
        L12_final.crx.fillText("Start Game", 150, 200);
        if (addEventListener("click", onclick)) {
            anzeige = 1;
        }
    }
    function drawHelp() {
        L12_final.crx.fillStyle = "#ffffff";
        L12_final.crx.font = "40px Arial";
        L12_final.crx.fillText("Help", 215, 280);
        if (addEventListener("click", onclick)) {
            anzeige = 2;
        }
    }
})(L12_final || (L12_final = {}));
//# sourceMappingURL=gui.js.map