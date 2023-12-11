// let Player1 = prompt("Player 1 Enter Your Name", "User 1");
// let Player2 = prompt("Player 2 Enter Your Name", "User 2");


let div1 = document.getElementById("div1");
let div2 = document.getElementById("div2");
let div3 = document.getElementById("div3");
let div4 = document.getElementById("div4");
let div5 = document.getElementById("div5");
let div6 = document.getElementById("div6");
let div7 = document.getElementById("div7");
let div8 = document.getElementById("div8");
let div9 = document.getElementById("div9");

let resetButton = document.getElementById("resetButton");

let resultArray = [
    [-1, -1, -1],
    [-1, -1, -1],
    [-1, -1, -1],
];

let count = 0;

function addZeroAndX() {
    if (count > 8) {
        return;
    }

    let that = this.firstElementChild.classList;

    if (count % 2 == 0) {
        if (that.contains("x")) {
            return;
        }
        that.add("zero");
    } else {
        if (that.contains("zero")) {
            return;
        }
        that.add("x");
    }
    count++;

    isCheck(this, that);

    if (count > 4) {
        let ans = winOrLoss();

        if (ans == 0) {
            alert("Player1" + " is Winner");
            // location.reload();
        }
        else if (ans == 1) {
            alert("Player2" + " is Winner");
            // location.reload();
        }
    }
}

div1.addEventListener("click", addZeroAndX);

div2.addEventListener("click", addZeroAndX);

div3.addEventListener("click", addZeroAndX);

div4.addEventListener("click", addZeroAndX);

div5.addEventListener("click", addZeroAndX);

div6.addEventListener("click", addZeroAndX);

div7.addEventListener("click", addZeroAndX);

div8.addEventListener("click", addZeroAndX);

div9.addEventListener("click", addZeroAndX);

resetButton.addEventListener("click", () => {
    location.reload();
});


function isCheck(node, that) {
    switch (node.id) {
        case 'div1':
            that.contains("x") ? (resultArray[0][0] = 1) : (resultArray[0][0] = 0);
            break;

        case 'div2':
            that.contains("x") ? (resultArray[0][1] = 1) : (resultArray[0][1] = 0);
            break;

        case 'div3':
            that.contains("x") ? (resultArray[0][2] = 1) : (resultArray[0][2] = 0);
            break;

        case 'div4':
            that.contains("x") ? (resultArray[1][0] = 1) : (resultArray[1][0] = 0);
            break;

        case 'div5':
            that.contains("x") ? (resultArray[1][1] = 1) : (resultArray[1][1] = 0);
            break;

        case 'div6':
            that.contains("x") ? (resultArray[1][2] = 1) : (resultArray[1][2] = 0);
            break;

        case 'div7':
            that.contains("x") ? (resultArray[2][0] = 1) : (resultArray[2][0] = 0);
            break;

        case 'div8':
            that.contains("x") ? (resultArray[2][1] = 1) : (resultArray[2][1] = 0);
            break;

        case 'div9':
            that.contains("x") ? (resultArray[2][2] = 1) : (resultArray[2][2] = 0);
            break;

        default:
            break;
    }
}

let ans = -1;

function winOrLoss() {
    let n = resultArray.length;
    let m = resultArray[0].length;


    // first condition
    for (let i = 0; i < n; i++) {
        for (let j = 0; j < m - 1; j++) {

            if (resultArray[i][j] == resultArray[i][j + 1] && resultArray[i][j] != -1) {
                if (j == (m - 2)) {
                    return resultArray[i][j];
                }
            }
            else {
                break;
            }
        }
    }

    // second condition
    for (let i = 0; i < n; i++) {
        for (let j = 0; j < m - 1; j++) {
            if (resultArray[j][i] == resultArray[j + 1][i] && resultArray[j][i] != -1) {
                if (j == (n - 2)) {
                    return resultArray[j][i];
                }
            }
            else {
                break;
            }
        }
    }

    // third condition
    for (let i = 0; i < n - 1; i++) {
        if (resultArray[i][i] == resultArray[i + 1][i + 1] && resultArray[i][i] != -1) {
            if (i == (n - 2)) {
                return resultArray[i][i];
            }
        }
        else {
            break;
        }
    }

    // fourth condition
    for (let i = 0; i < n; i++) {
        let j = n - i - 1;
        if (resultArray[i][j] == resultArray[i + 1][n - 2 - i] && resultArray[i][j] != -1) {
            if (i == (n - 2)) {
                return resultArray[i][i];
            }
        }
        else {
            break;
        }
    }
}
