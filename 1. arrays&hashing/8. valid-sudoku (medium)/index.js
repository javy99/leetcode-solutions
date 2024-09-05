function isValidSudoku(board) {
    // Initialize sets to track numbers for rows, columns, and sub-boxes
    let rows = new Array(9).fill().map(() => new Set());
    let cols = new Array(9).fill().map(() => new Set());
    let boxes = new Array(9).fill().map(() => new Set());

    for (let r = 0; r < 9; r++) {
        for (let c = 0; c < 9; c++) {
            let value = board[r][c];

            // If the cell is empty, skip it
            if (value === '.') continue;

            // Calculate box index
            let boxIndex = Math.floor(r / 3) * 3 + Math.floor(c / 3);

            // Check for duplicates in row, column, and box
            if (rows[r].has(value) || cols[c].has(value) || boxes[boxIndex].has(value)) {
                return false;
            }

            // Add the value to the corresponding sets
            rows[r].add(value);
            cols[c].add(value);
            boxes[boxIndex].add(value);
        }
    }

    // If no duplicates are found, the board is valid
    return true;
}

// Example 1: Valid Sudoku board
let board1 = [
    ["5", "3", ".", ".", "7", ".", ".", ".", "."],
    ["6", ".", ".", "1", "9", "5", ".", ".", "."],
    [".", "9", "8", ".", ".", ".", ".", "6", "."],
    ["8", ".", ".", ".", "6", ".", ".", ".", "3"],
    ["4", ".", ".", "8", ".", "3", ".", ".", "1"],
    ["7", ".", ".", ".", "2", ".", ".", ".", "6"],
    [".", "6", ".", ".", ".", ".", "2", "8", "."],
    [".", ".", ".", "4", "1", "9", ".", ".", "5"],
    [".", ".", ".", ".", "8", ".", ".", "7", "9"]
];

console.log(isValidSudoku(board1)); // Output: true

// Example 2: Invalid Sudoku board (duplicate '8' in top left sub-box)
let board2 = [
    ["8", "3", ".", ".", "7", ".", ".", ".", "."],
    ["6", ".", ".", "1", "9", "5", ".", ".", "."],
    [".", "9", "8", ".", ".", ".", ".", "6", "."],
    ["8", ".", ".", ".", "6", ".", ".", ".", "3"],
    ["4", ".", ".", "8", ".", "3", ".", ".", "1"],
    ["7", ".", ".", ".", "2", ".", ".", ".", "6"],
    [".", "6", ".", ".", ".", ".", "2", "8", "."],
    [".", ".", ".", "4", "1", "9", ".", ".", "5"],
    [".", ".", ".", ".", "8", ".", ".", "7", "9"]
];

console.log(isValidSudoku(board2)); // Output: false

// Additional Test Case 1: Empty board (valid since there are no numbers)
let board3 = [
    [".", ".", ".", ".", ".", ".", ".", ".", "."],
    [".", ".", ".", ".", ".", ".", ".", ".", "."],
    [".", ".", ".", ".", ".", ".", ".", ".", "."],
    [".", ".", ".", ".", ".", ".", ".", ".", "."],
    [".", ".", ".", ".", ".", ".", ".", ".", "."],
    [".", ".", ".", ".", ".", ".", ".", ".", "."],
    [".", ".", ".", ".", ".", ".", ".", ".", "."],
    [".", ".", ".", ".", ".", ".", ".", ".", "."],
    [".", ".", ".", ".", ".", ".", ".", ".", "."]
];

console.log(isValidSudoku(board3)); // Output: true

// Additional Test Case 2: Single number on board (valid)
let board4 = [
    ["5", ".", ".", ".", ".", ".", ".", ".", "."],
    [".", ".", ".", ".", ".", ".", ".", ".", "."],
    [".", ".", ".", ".", ".", ".", ".", ".", "."],
    [".", ".", ".", ".", ".", ".", ".", ".", "."],
    [".", ".", ".", ".", ".", ".", ".", ".", "."],
    [".", ".", ".", ".", ".", ".", ".", ".", "."],
    [".", ".", ".", ".", ".", ".", ".", ".", "."],
    [".", ".", ".", ".", ".", ".", ".", ".", "."],
    [".", ".", ".", ".", ".", ".", ".", ".", "."]
];

console.log(isValidSudoku(board4)); // Output: true

// Additional Test Case 3: Invalid due to duplicate in a row
let board5 = [
    ["5", "3", ".", ".", "7", ".", ".", ".", "."],
    ["6", ".", ".", "1", "9", "5", ".", ".", "."],
    [".", "9", "8", ".", ".", ".", ".", "6", "."],
    ["8", ".", ".", ".", "6", ".", ".", ".", "3"],
    ["4", ".", ".", "8", "8", "3", ".", ".", "1"], // Invalid row (two '8's)
    ["7", ".", ".", ".", "2", ".", ".", ".", "6"],
    [".", "6", ".", ".", ".", ".", "2", "8", "."],
    [".", ".", ".", "4", "1", "9", ".", ".", "5"],
    [".", ".", ".", ".", "8", ".", ".", "7", "9"]
];

console.log(isValidSudoku(board5)); // Output: false
