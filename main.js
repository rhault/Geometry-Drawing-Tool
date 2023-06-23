//CONSTANTE 
const containerRect = document.querySelector('.rect');
const containerTriangle = document.querySelector('.triangle');
const containerCircle = document.querySelector('.circle');
const optionRect = document.querySelector('.rect-option');
const optionTriangle = document.querySelector('.triangle-option');
const optionCircle = document.querySelector('.circle-option');
const baseRect = document.querySelector('.base');
const heightRect = document.querySelector('.height');
const typeTriangulo = document.querySelector('.type-triangle');
const triangleInput = document.querySelectorAll('.triangle_input');
const sideTriangleA = document.querySelector('.side_a');
const sideTriangleB = document.querySelector('.side_b');
const sideTrianglec = document.querySelector('.side_c');
const radiusCircle = document.querySelector('.radius');
const canvas = document.querySelector('canvas');
const ctx = canvas.getContext('2d');
const aside = document.querySelector('aside');
const btnRectangle = document.querySelector('.btn-rect');
const btnTriangle = document.querySelector('.btn-triangle');
const btnCircle = document.querySelector('.btn-circle');
const span = document.createElement('span');

// Regular expression to validate numeric inputs
const regex = /^(?:[1-9]|[1-4]\d|50)$/;

//Event Listeners

//Inputs
baseRect.addEventListener('input', inputNumberValidator);
heightRect.addEventListener('input', inputNumberValidator);
sideTriangleA.addEventListener('input', inputNumberValidator);

//Menu buttons 
btnRectangle.addEventListener('click', toggleOption.bind(null, optionRect));
btnTriangle.addEventListener('click', toggleOption.bind(null, optionTriangle));
btnCircle.addEventListener('click', toggleOption.bind(null, optionCircle));

// FUNCTIONS

// Function to draw a rectangle
const drawRect = (base, height) => {
    ctx.clearRect(0,0,500,500); // Clear the canvas
    ctx.beginPath();
    // Draw the rectangle on the canvas
    ctx.rect(
        250 - ((base * 10) / 2),
        250 - ((height * 10) / 2),
        base * 10,
        height * 10
    );
    ctx.strokeStyle = 'blue';
    ctx.stroke();

    aside.innerHTML =`
    {<pre>
    nome: ${base === height ? 'Quadrado' : 'Retangulo'},
    base: ${base},
    altura: ${height},
    area: ${base * height},
    perimetro: ${2*(base+height)}
    </pre>}
    `;
}

//Function to create a rectangle
const createRect = () => {
    const base = baseRect.value;
    const height = heightRect.value;

    if(!regex.test(base) && !regex.test(height)){
        return
    }

    drawRect(base, height);
    baseRect.value = '';
    heightRect.value = '';
}

// Function to create a rectangle with random values
const createRandomRect = () => {
    const base = getRandomNumber(1,50);
    const height = getRandomNumber(1,50); 
    
    drawRect(base,height);
}

//Function that selects the type of triangle
const selectTypeTriangle = () => {
    const type = typeTriangulo.value;
    optionSelectInputs(3,'remove');

    if(type == "equilatero"){
        optionSelectInputs(1,'add');
    }else if(type == "isoscele"){
        triangleInput[1].classList.add('show-input')
        optionSelectInputs(2,'add');
    }else{
        triangleInput[2].classList.add('show-input')
        optionSelectInputs(3,'add');
    }
}

//Function to show or hide an input
const optionSelectInputs = (sides,action) => {
    const method = action === 'add' ? 'add' : 'remove';

    for (let side = 0; side < sides; side++) {
        triangleInput[side].classList[method]('show-input');
    }
}

//Function to create a triangle
const createTriangle = () => {
    const sides = Number(sideTriangleA.value);

    if(!regex.test(sides)) return;

    drawTriangle(sides);

    sideTriangleA.value = '';
} 

//Function to create a triangle with random values
const createRandomTriangle = () => {
    const sides = getRandomNumber(1,50);
    drawTriangle(sides)
}

//Function to draw a triangle
const drawTriangle = (sides) => {       
    const side = sides * 5
    
    // Draw the triangle on the canvas
    ctx.clearRect(0,0,500,500)
    ctx.beginPath();
    ctx.moveTo(250-side,250+side);
    ctx.lineTo(250,250-side);
    ctx.lineTo(250+side,250+side);
    ctx.closePath();
    ctx.stroke();

    //h = (side * √3) / 2    
    const height = ((sides * Math.sqrt(3)) / 2).toFixed(2);

    aside.innerHTML =`
    {<pre>
    nome: 'Triangulo',
    tipo: '${typeTriangulo.value}',
    altura: '${height}
    </pre>}
    `;
}

//Function to draw a circle
const drawCircle = (radius) => {
    ctx.clearRect(0,0,500,500)
    ctx.beginPath();
    // Draw the circle on the canvas
    ctx.arc(250,250,radius*5,0,2*Math.PI);
    ctx.stroke();
    
    const diameter = radius * 2;
    const squareRadius = Math.pow(radius,2).toFixed(2);
    const PI = Math.PI.toFixed(2);

    aside.innerHTML =`
    {<pre>
    nome: 'Circulo',
    radio: '${radius}',
    diametro: '${diameter}'
    circunferencia: '${diameter * PI},
    area: '${squareRadius * PI}',
    </pre>}`
}

//Function to create a circle
const createCircle = () => {
    const radius = radiusCircle.value;
    drawCircle(radius);
    radiusCircle.value = ''
}

//Function to create a rectangle with random values
const createRandomCircle = () => {
    const radius = getRandomNumber(1,50);
    drawCircle(radius)
}

// Function to validate numeric inputs
function inputNumberValidator(event){
    const element = event.target;
    const elementValue = event.target.value;
    element.parentNode.append(span);
    
    if(!regex.test(elementValue)){
        element.style.color = "red";
        span.style.color = "red";
        
        if(elementValue <= 0){
            span.innerText = 'Valor minimo 1cm';
        }else{
            span.innerText = 'Valor maximo 50cm';
        }
    }else{
        element.style.color = "black";
        element.parentNode.removeChild(span)
    }
}

//Close dropdown
window.onclick = (event) => {
    if(!containerRect.contains(event.target)){
        optionRect.classList.remove('show');
    }
    if(!containerCircle.contains(event.target)){
        optionCircle.classList.remove('show');
    }
    if(!containerTriangle.contains(event.target)){
        optionTriangle.classList.remove('show');
    }
}

// Function to toggle the display of an option
function toggleOption(option){
    option.classList.toggle('show');
}

// Function to generate a random number between min and max (inclusive)
function getRandomNumber(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}