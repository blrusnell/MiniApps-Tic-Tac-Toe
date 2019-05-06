let turnBoolean = true;

const clickHandler = (e) => {
    if (e.target.innerHTML === '') {
        e.target.innerHTML = "X";
        turnBoolean = !turnBoolean;
    }
    if (turnBoolean === true) {
        e.target.innerHTML = "O";
    }
}


const htmlCollection = document.getElementsByTagName('td');

const eachSquare = Array.prototype.slice.call( htmlCollection )


eachSquare.map(e => e.addEventListener("click", clickHandler));


