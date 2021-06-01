// Pencil move //
let pencil = document.getElementById('yellow-pencil');

move = () =>{
 pencil.style.transform = 'rotate(-70deg)';
}

back = () =>{
 pencil.style.transform = 'rotate(-75deg)';
}

//onmouseover="move()" onmouseout="back()"