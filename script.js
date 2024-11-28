const h1El = document.querySelector('h1');
const divEl = document.querySelector('.container');

function changeColor(){
    h1El.addEventListener('click', function(){
        h1El.style.color = 'lightblue';
    })
}
changeColor();

function randomColor(){
    strings = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', 'A', 'B', 'C', 'D', 'E', 'F'];
    window.addEventListener('click', function(){
        let hexColor  = '#' ;
        for (let i = 0 ; i <6 ; i++){
            let randomEl = Math.floor(Math.random() * strings.length);
            hexColor += strings[randomEl];
        }
        console.log(hexColor);
        divEl.style.backgroundColor = hexColor; 

    });
   

}

randomColor();