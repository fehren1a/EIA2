namespace L12_final {
    window.addEventListener("load", loadStartScreen);

    export let crx: CanvasRenderingContext2D;
    export let pgame: Pong;
    export let help: Help;
    let anzeige: number = 0;


    function loadStartScreen(_event: Event): void {

        let canvas = document.getElementsByTagName("canvas")[0];
        canvas.style.marginLeft = "10px";
        console.log(canvas);
        crx = canvas.getContext("2d");
        console.log(crx);
        help = new Help();
        pgame = new Pong();

        switch (anzeige) {
            case 0:
                drawStartScreen();
                drawStart();
                drawHelp();
                break;
            case 1:
                pgame.init();
                break;
            case 2:
                help.drawStartScreen();
                help.drawTutorialText();
                break;
            }
    }

    function drawStartScreen(): void {
        crx.fillStyle = "gray";
        crx.fillRect(0, 0, crx.canvas.width, crx.canvas.height);
    }

    function drawStart(): void {
        crx.fillStyle = "#ffffff";
        crx.font = "40px Arial";
        crx.fillText("Start Game", 150, 200);
        if (addEventListener("click", onclick)) {
            anzeige = 1;
        }
    }

    function drawHelp(): void {
        crx.fillStyle = "#ffffff";
        crx.font = "40px Arial";
        crx.fillText("Help", 215, 280);
        if (addEventListener("click", onclick)) {
            anzeige = 2;
        }
    }
}

