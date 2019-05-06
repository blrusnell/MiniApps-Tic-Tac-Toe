
const clickHandler = (e) => {
    e.target.innerHTML = "X";
}


const htmlCollection = document.getElementsByTagName('td');

const eachSquare = Array.prototype.slice.call( htmlCollection )


eachSquare.map(e => e.addEventListener("click", clickHandler));


