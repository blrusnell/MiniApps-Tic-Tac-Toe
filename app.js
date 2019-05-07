//getting each cell in table

const htmlCollection = document.getElementsByTagName('td');
const eachSquare = Array.prototype.slice.call(htmlCollection);


//bool to handle player turn
let turnBoolean = false;

//puts x or o in cell
const xoHandler = (e) => {
    if (e.target.innerHTML === "") {
        turnBoolean = !turnBoolean;
        if (turnBoolean) {
            e.target.innerHTML = "X";
            winnerCheck();
        } else {
            e.target.innerHTML = "O";
            winnerCheck();
        }
    }
};



//apply click to each cell
eachSquare.map(e => e.addEventListener("click", xoHandler));




//checks for winners
const winnerCheck = () => {
    const one = document.getElementById('one').textContent;
    const two = document.getElementById('two').textContent;
    const three = document.getElementById('three').textContent;
    const four = document.getElementById('four').textContent;
    const five = document.getElementById('five').textContent;
    const six = document.getElementById('six').textContent;
    const seven = document.getElementById('seven').textContent;
    const eight = document.getElementById('eight').textContent;
    const nine = document.getElementById('nine').textContent;

   let row1 = one + two + three;
   let row2 = four + five + six;
   let row3 = six + seven + eight;
   let col1 = one + four + seven;
   let col2 = two + five + eight;
   let col3 = three + six + nine;
   let diag1 = one + five + nine;
   let diag2 = seven + five + three;


   if (row1 === "XXX" || row1 === "OOO") {
       alert('winner');
   }
   if (row2 === "XXX" || row2 === "OOO") {
    alert('winner')
   }
   if (row3 === "XXX" || row3 === "OOO") {
    alert('winner')
   }
   if (col1 === "XXX" || col1 === "OOO") {
    alert('winner')
   }
   if (col2 === "XXX" || col2 === "OOO") {
    alert('winner')
   }
   if (col3 === "XXX" || col3 === "OOO") {
    alert('winner')
   }
   if (diag1 === "XXX" || diag1 === "OOO") {
    alert('winner')
   }
   if (diag2 === "XXX" || diag2 === "OOO") {
    alert('winner')
   }
};


//button to clear board
const resetGame =(e) => {
    let xos = Array.prototype.slice.call(document.getElementsByClassName('square'));
    xos.map(function(i) {
        i.innerHTML = ''
    });
} 

