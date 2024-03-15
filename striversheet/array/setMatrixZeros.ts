function markRow(matrix: number[][], n: number, m: number, i: number): void {
    // set all non-zero elements as -1 in the row i:
    for (let j = 0; j < m; j++) {
        if (matrix[i][j] !== 0) {
            matrix[i][j] = -1;
        }
    }
}

function markCol(matrix: number[][], n: number, m: number, j: number): void {
    // set all non-zero elements as -1 in the col j:
    for (let i = 0; i < n; i++) {
        if (matrix[i][j] !== 0) {
            matrix[i][j] = -1;
        }
    }
}

function zeroMatrix(matrix: number[][], n: number, m: number): number[][] {
    // Set -1 for rows and cols that contains 0. Don't mark any 0 as -1:
    for (let i = 0; i < n; i++) {
        for (let j = 0; j < m; j++) {
            if (matrix[i][j] === 0) {
                markRow(matrix, n, m, i);
                markCol(matrix, n, m, j);
            }
        }
    }
    // Finally, mark all -1 as 0:
    for (let i = 0; i < n; i++) {
        for (let j = 0; j < m; j++) {
            if (matrix[i][j] === -1) {
                matrix[i][j] = 0;
            }
        }
    }
    return matrix;
}

const matrix: number[][] = [
    [1, 1, 1],
    [1, 0, 1],
    [1, 1, 1],
];

const n: number = matrix.length;
const m: number = matrix[0].length;

const ans: number[][] = zeroMatrix(matrix, n, m);

console.log("The Final matrix is: ");
for (let i = 0; i < n; i++) {
    console.log(ans[i].join(" "));
}
