const h1El = document.querySelector('h1');

function changeColor(){
    h1El.addEventListener('click', function(){
        h1El.style.color = 'lightblue';
    })
}
changeColor();