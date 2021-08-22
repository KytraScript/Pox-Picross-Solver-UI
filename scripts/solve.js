"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.solve = void 0;
function delay(t, v = []) {
    return new Promise(function (resolve) {
        setTimeout(resolve.bind(null, v), t);
    });
}
const flr = Math.floor;
function checkValid(x) {
    let n = Number(x);
    while (n > 0) {
        if (n % 4 === 3) {
            return false;
        }
        n = flr(n / 4);
    }
    return true;
}
function flipBoard(lines) {
    let flipped = [];
    const size = lines.length;
    const nLines = lines.map(n => Number(n));
    const maxDigit = size - 1;
    for (let digit = maxDigit; digit >= 0; digit -= 1) {
        let factor = 4 ** digit;
        let col = 0;
        for (let rowIdx = 0; rowIdx < size; rowIdx += 1) {
            col += (flr(nLines[rowIdx] / factor) % 4) * 4 ** (maxDigit - rowIdx);
        }
        flipped.push(BigInt(col));
    }
    return flipped;
}
async function solver(writeAtLine, printBoard, pSpd, rulesRows, rulesCols) {
    const paddedbase4 = (n) => n.toString(4).padStart(size, '0');
    const size = rulesRows.length;
    const frames = [];
    const statuses = {
        'rows': 'Solving definites for: Rows      ',
        'cols': 'Solving definites for: Columns   ',
        'done': 'Solved!                          ',
        'fail': 'No further progress has been made'
    };
    let attempts = 0;
    const updateStatus = async (status) => await writeAtLine(1, `${status} Cycles: ${attempts}`);
    function generateDefinites(baseReqs, definites = 0n) {
        function permuteDefinites(reqs, line, i, spares) {
            if (line && !checkValid(line | definites)) {
                return 0n;
            }
            if (i >= size) {
                return line;
            }
            let rLine = 0n, sLine = 0n;
            if (reqs.length) {
                const req = reqs[0];
                let blocks = (4 ** req - 1) / 3;
                if (req + i > size) {
                    return 0n;
                }
                else if (req + i < size) {
                    blocks = blocks * 4 + 2;
                }
                const modifiedLine = line + BigInt(blocks * 4 ** Math.max(0, size - (req + i) - 1));
                rLine = permuteDefinites(reqs.slice(1), modifiedLine, i + req + 1, spares);
            }
            else {
                spares = 0;
                let filled = line + BigInt((4 ** (size - i) - 1) * 2 / 3);
                if (checkValid(definites | filled)) {
                    return filled;
                }
            }
            if (spares) {
                sLine = permuteDefinites(reqs, line + BigInt(2 * 4 ** Math.max(0, size - i - 1)), i + 1, spares - 1);
            }
            return (rLine & sLine) || rLine || sLine || 0n;
        }
        if (paddedbase4(definites).search('0') === -1) {
            return definites;
        }
        let xtra = size - (baseReqs.reduce((p, v) => p + v, 0) + baseReqs.length - 1);
        if (xtra === size) {
            return BigInt(2 / 3 * (4 ** size - 1));
        }
        //No definites possible if there's not any reqs larger than the amount of play in the line
        //and we have no definites from other lines
        if (definites === 0n && Math.max(xtra, ...baseReqs) <= xtra) {
            return definites;
        }
        return permuteDefinites(baseReqs, 0n, 0, xtra);
    }
    let lstbrd;
    let boardState = Array(size).fill(0n);
    let mxAttempts = size * 2;
    for (; attempts < mxAttempts; attempts += 1) {
        await updateStatus(statuses.rows);
        boardState = boardState.map((row, idx) => generateDefinites(rulesRows[idx], row));
        await printBoard(boardState);
        if (pSpd) {
            await delay(150);
        }
        await updateStatus(statuses.cols);
        boardState = flipBoard(boardState);
        boardState = boardState.map((col, idx) => generateDefinites(rulesCols[idx], col));
        boardState = flipBoard(boardState);
        await printBoard(boardState);
        if (pSpd) {
            await delay(150);
        }
        if (lstbrd === boardState.map(paddedbase4).join('')) {
            await updateStatus(statuses.fail);
            // await termToLine(size + 2, 0);
            break;
        }
        lstbrd = boardState.map(paddedbase4).join('');
        frames.push(lstbrd.replace(/2/g, '0'));
        if (lstbrd.search('0') === -1) {
            await updateStatus(statuses.done);
            // await termToLine(size + 2, 0);
            break;
        }
    }
    return frames;
}
async function solve(rows, cols) {
    async function devNull(...whocares) {
        return true;
    }
    return solver(devNull, devNull, 0, rows, cols);
}
exports.solve = solve;
//# sourceMappingURL=main.js.map