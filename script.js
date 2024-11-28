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


const colorEls = [
    "white", "black", "red", "green", "blue", "yellow", "magenta", "cyan", "silver",
    "gray", "maroon", "olive", "darkgreen", "purple", "tomato", "gold", "brown", 
    "deeppink", "navy", "saddlebrown", "chartreuse", "chocolate", "crimson", "darkgreen",
    "firebrick", "limegreen", "darkorange", "darkkhaki", "mediumblue", "blueviolet", 
    "lightpink", "lightblue", "lightsalmon", "lightgreen", "lightcoral", "darkslategray", 
    "slateblue", "forestgreen", "darkviolet", "orangered", "mediumorchid", "lightgoldenrodyellow",
    "lightseagreen", "mediumslateblue", "darkred", "yellowgreen", "lightsteelblue", 
    "mediumaquamarine", "paleturquoise", "lavender", "mistyrose", "peachpuff", "powderblue",
    "darkorange", "seashell", "darkcyan", "indigo", "darkturquoise", "midnightblue", 
    "dodgerblue", "lightpink", "snow", "slategray", "seashell", "thistle", "mediumseagreen",
    "papayawhip", "tomato", "royalblue", "indianred", "springgreen", "lightyellow", 
    "darkslateblue", "cornflowerblue", "mediumspringgreen", "peru", "greenyellow", 
    "darkgoldenrod", "rebeccapurple", "slateblue", "deepskyblue", "lightskyblue", 
    "mediumvioletred", "plum", "hotpink", "antiquewhite", "lightgray", "lightslategray", 
    "darkorchid", "lightpink", "fuchsia", "rosybrown", "palevioletred", "orangered"
]
function changeNavarColor(){
    const navEl = document.querySelector('nav');
    const colorText = document.querySelector('h1');
    
    navEl.addEventListener('mouseenter', function(){
        let randomElement = Math.floor(Math.random() * colorEls.length);
        console.log(colorEls[randomElement]);
        navEl.style.backgroundColor = colorEls[randomElement];
        colorText.textContent = colorEls[randomElement];
    })
}
changeNavarColor();
