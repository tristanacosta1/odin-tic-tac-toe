const gameBoard = (function () {
    const board = [];

    return {
        getBoard: function () {
            return board;
        },
        markSquare: function (row, column, mark) {
            board[row][column].push(mark);
        }
    };
})();