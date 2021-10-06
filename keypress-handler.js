function keyEventListener() {
    document.addEventListener('keydown', (event) => {
        const keyname = event.key;

        if (keyname == "Q" || keyname == "q") {
            window.close();
        }
        if (keyname == "R" || keyname == "r") {
            resetGame();
        }
        else if (activeTetromino != null) {
            if (keyname == "ArrowDown" || keyname == "S" || keyname == "s") {
                let temp = JSON.parse(JSON.stringify(activeTetromino));
                moveTetrominoDown(temp);

                if (checkIfValidMove(temp) == true) {
                    activeTetromino = temp;
                }
            }
            else if (keyname == "ArrowLeft" || keyname == "A" || keyname == "a") {
                let temp = JSON.parse(JSON.stringify(activeTetromino));

                temp.center[0] -= 1;
                for (i = 0; i < temp.Xs.length; i++) {
                    temp.Xs[i] -= 1;
                }

                if (checkIfValidMove(temp) == true) {
                    activeTetromino = temp;
                }
            }
            else if (keyname == "ArrowRight" || keyname == "D" || keyname == "d") {
                let temp = JSON.parse(JSON.stringify(activeTetromino));

                temp.center[0] += 1;
                for (i = 0; i < temp.Xs.length; i++) {
                    temp.Xs[i] += 1;
                }

                if (checkIfValidMove(temp) == true) {
                    activeTetromino = temp;
                }
            }
            else if (keyname == "ArrowUp" || keyname == "W" || keyname == "w") {
                let temp = JSON.parse(JSON.stringify(activeTetromino));
                rotateCtrClk(temp);

                if (checkIfValidMove(temp) == true) {
                    activeTetromino = temp;
                }
            }
        }
    });
}