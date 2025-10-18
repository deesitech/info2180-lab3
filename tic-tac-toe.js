document.addEventListener('DOMContentLoaded', () => {
    const board = document.getElementById('board');
    const squares = board.getElementsByTagName('div');
    const status = document.getElementById('status');
    let currentPlayer = 'X';
    let gameState = Array(9).fill(null);

    for (let i = 0; i < squares.length; i++) {
        squares[i].classList.add('square');
        squares[i].addEventListener('click', () => {
            if (!gameState[i]) {
                squares[i].textContent = currentPlayer;
                squares[i].classList.add(currentPlayer);
                gameState[i] = currentPlayer;
                if (checkWinner()) {
                    status.textContent = `Congratulations! ${currentPlayer} is the Winner!`;
                    status.classList.add('you-won');
                }
                currentPlayer = currentPlayer === 'X' ? 'O' : 'X';
            }
        });
        squares[i].addEventListener('mouseenter', () => {
            if (!gameState[i]) {
                squares[i].classList.add('hover');
            }
        });
        squares[i].addEventListener('mouseleave', () => {
            squares[i].classList.remove('hover');
        });
    }

    function checkWinner() {
        const winningCombos = [
            [0, 1, 2], [3, 4, 5], [6, 7, 8], // rows
            [0, 3, 6], [1, 4, 7], [2, 5, 8], // columns
            [0, 4, 8], [2, 4, 6] // diagonals
        ];
        for (let combo of winningCombos) {
            const [a, b, c] = combo;
            if (gameState[a] && gameState[a] === gameState[b] && gameState[a] === gameState[c]) {
                return true;
            }
        }
        return false;
    }
});