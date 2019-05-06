//getting each cell in table

const htmlCollection = document.getElementsByTagName('td');
const eachSquare = Array.prototype.slice.call(htmlCollection);


//bool to handle player turn
let turnBoolean = false;

//puts x or o in cell
const clickHandler = (e) => {
    if (e.target.innerHTML === "") {
        turnBoolean = !turnBoolean;
        if (turnBoolean) {
            e.target.innerHTML = "X";
        } else {
            e.target.innerHTML = "O";
        }
    }
};
//apply click to each cell
eachSquare.map(e => e.addEventListener("click", clickHandler));

//array for each row, column, diagonal
const row1 = document.getElementById("row1");
const row2 = document.getElementById("row2");
const row3 = document.getElementById("row3");
const col1 = [row1[0], row2[0], row3[0]];
const col2 = [row1[1], row2[1], row3[1]];
const col3 = [row1[2], row2[2], row3[2]];
const topRightFirstDiagonal = [row1[2], row2[1], row3[0]];
const bottomRightFirstDiagonal = [row1[0], row2[1], row3[2]];

    

//checks for winners
const winnerCheck = () => {
    
};

