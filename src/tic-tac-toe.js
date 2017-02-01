class TicTacToe {
    constructor() {
        this.playerX=0;

    }

    getCurrentPlayerSymbol() { /* ожидается Х или О */
        if (this.player=0) {
            return x;
        } else {
            return o;}

    }

    nextTurn(rowIndex, columnIndex) { /* должен правильно обновить состояние игрока(класса)*/
        if
    }

    isFinished() { /*должен вернуть true, если игра закончена (например, есть победитель или ничья)  либо false*/

    }

    getWinner() { /* должен вернуть символ победителя X либо О или null, если нет победитель еще не определен */

    }

    noMoreTurns() { /* должен вернуть true, если клетки для ходов закончились */

    }

    isDraw() {  /* должен вернуть истину, если нет больше никаких клеток для ходов и нет победителя */

    }

    getFieldValue(rowIndex, colIndex) { /* должен возвращять ряд и столбик, если такие есть */

    }
}

module.exports = TicTacToe;
