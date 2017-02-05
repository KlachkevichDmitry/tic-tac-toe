class TicTacToe {
    constructor() {
        

        this.columnTurn=0;
        this.turn='x';
        this.field=[
               /*    0    1    2    */
           /* 0 */ [null,null,null],
           /* 1 */ [null,null,null],
           /* 2 */ [null,null,null]];
        this.winner=null;




    }

    getCurrentPlayerSymbol() { /* ожидается Х или О */
        if (this.turn=='x' ) {
            return 'x';
        } else {
            return 'o';
        }
    }

    nextTurn(rowIndex, columnIndex) { /* должен правильно обновить состояние игрока(класса)*/
        if (this.field[rowIndex][columnIndex]==null) {
            this.field[rowIndex][columnIndex]=this.turn;
            this.columnTurn++;



            if (this.turn=='x') {
                return this.turn = 'o';

             } else {
                return this.turn='x';

             }

        } else {
            return this.turn;

        }

   }







    getWinner() { /* должен вернуть символ победителя X либо О или null, если нет победитель еще не определен */


                   /*    0    1    2    */
            /* 0 *//* [null,null,null],
            /* 1 */ /*[null,null,null],
            /* 2 */ /*[null,null,null]]*/

        /*горизонталь*/
      if (this.field[0][0]==this.field[0][1]&&this.field[0][1]==this.field[0][2]){
        return this.winner=this.field[0][2]}
      if (this.field[1][0]==this.field[1][1]&&this.field[1][1]==this.field[1][2]){
         return this.winner=this.field[1][2]}
      if (this.field[2][0]==this.field[2][1]&&this.field[2][1]==this.field[2][2]){
         return this.winner=this.field[2][2]}
       /*вертикаль*/
      if (this.field[0][0]==this.field[1][0]&&this.field[1][0]==this.field[2][0]){
         return this.winner=this.field[2][0]}
      if (this.field[0][1]==this.field[1][1]&&this.field[1][1]==this.field[2][1]){
         return this.winner=this.field[2][1]}
      if (this.field[0][2]==this.field[1][2]&&this.field[1][2]==this.field[2][2]){
          return this.winner=this.field[2][2]}
        /*диагонали*/
      if (this.field[0][0]==this.field[1][1]&&this.field[1][1]==this.field[2][2]){
          return this.winner=this.field[2][2]}
      if (this.field[0][2]==this.field[1][1]&&this.field[1][1]==this.field[2][0]){
          return this.winner=this.field[2][0]}
      else {return this.winner=null}
    }

    isFinished() { /*должен вернуть true, если игра закончена (например, есть победитель или ничья)  либо false*/

        if (getWinner() || this.columnTurn == 9) {
            return true;
        } else {
            return false;
        }
    }


    noMoreTurns() { /* должен вернуть true, если клетки для ходов закончились */
        if (this.columnTurn==9) {
            return true;
        } else {return false;}


    }

    isDraw() {  /*должен вернуть false если клетки для хода есть, но есть уже победитель, либо true если ничья */

        /*should return false if game is not finished or there is a winner, and true if it is a draw*/
        /*if (this.columnTurn==9)*/


             if (this.columnTurn==9 && !this.winner) {return true;}
               /* &&this.winner!=null*/
            else{return false;}










    }

    getFieldValue(rowIndex, colIndex) { /* должен возвращять ряд и столбик, если такие есть */
        return this.field[rowIndex][colIndex];

    }
}

module.exports = TicTacToe;
