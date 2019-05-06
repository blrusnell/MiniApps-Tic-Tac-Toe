let turnBoolean = false;

const clickHandler = (e) => {
    if (e.target.innerHTML === "") {
        turnBoolean = !turnBoolean;
        if (turnBoolean) {
            e.target.innerHTML = "X";
        } else {
            e.target.innerHTML = "O";
        }
    }
}


const htmlCollection = document.getElementsByTagName('td');

const eachSquare = Array.prototype.slice.call( htmlCollection )


eachSquare.map(e => e.addEventListener("click", clickHandler));


