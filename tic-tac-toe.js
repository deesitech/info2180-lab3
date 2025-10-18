document.addEventListener('DOMContentLoaded', () => {
    const board = document.getElementById('board');
    const squares = board.getElementsByTagName('div');
    let currentPlayer = 'X';
    let gameState = Array(9).fill(null);

    for (let i = 0; i < squares.length; i++) {
        squares[i].classList.add('square');
        squares[i].addEventListener('click', () => {
            if (!gameState[i]) {
                squares[i].textContent = currentPlayer;
                squares[i].classList.add(currentPlayer);
                gameState[i] = currentPlayer;
                currentPlayer = currentPlayer === 'X' ? 'O' : 'X';
            }
        });
    }
});