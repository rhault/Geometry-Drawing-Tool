//CONSTANTE DROPDOWN
const containerRect = document.querySelector('.rect');
const containerTriangle = document.querySelector('.triangle');
const containerCircle = document.querySelector('.circle');
const optionRect = document.querySelector('.rect-option');
const optionTriangle = document.querySelector('.triangle-option');
const optionCircle = document.querySelector('.circle-option');
//CONSTANTE TRIANGLE
const typeTriangulo = document.querySelector('.type-triangle');
const triangleInput = document.querySelectorAll('.triangle_input');
const tri_side_a = document.querySelector('.side_a');
const tri_side_b = document.querySelector('.side_b');
const tri_side_c = document.querySelector('.side_c');
//CANVAS
const canvas = document.querySelector('canvas');
const ctx = canvas.getContext('2d');
const aside = document.querySelector('aside');
//BUTTONS
const btnRectangle = document.querySelector('.btn-rect');
btnRectangle.addEventListener('click', () => {
    document.querySelector('.rect-option').classList.toggle('show')
});
const btnTriangle = document.querySelector('.btn-triangle');
btnTriangle.addEventListener('click', () => {
    document.querySelector('.triangle-option').classList.toggle('show')
});
const btnCircle = document.querySelector('.btn-circle');
btnCircle.addEventListener('click', () => {
    document.querySelector('.circle-option').classList.toggle('show')
});

//CLOSE DROPDOWN
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

//Reactangle
const createRect = (randomBase = null, randomHeight = null) => {
    const base = document.querySelector('.base').value || randomBase;
    const height = document.querySelector('.height').value || randomHeight;
    
    ctx.clearRect(0,0,500,500)
    ctx.beginPath();
    ctx.rect(250 - ((base * 38)/2),250 - ((height * 38)/2),base*38,height*38);
    ctx.strokeStyle = 'blue';
    ctx.stroke();

    document.querySelector('.base').value = '';
    document.querySelector('.height').value = '';

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

const createRandomRect = () => {
    createRect(
        Math.floor((Math.random() * (10 - 1)) + 1),
        Math.floor((Math.random() * (10 - 1)) + 1)
    )
}

//Triangle
const selectTypeTriangle = () => {
    
    optionSelectInputs(3,'remove');

    if(typeTriangulo.value == "equilatero"){
        optionSelectInputs(1,'add');
    }else if(typeTriangulo.value == "isoscele"){
        triangleInput[1].classList.add('show-input')
        optionSelectInputs(2,'add');
    }else{
        triangleInput[2].classList.add('show-input')
        optionSelectInputs(3,'add');
    }
}

const optionSelectInputs = (sides,action) => {
    if(action === 'add'){
        for(let side=0; side<sides; side++){
            triangleInput[side].classList.add('show-input')
        }
    }else if(action == 'remove'){
        for(let side=0; side<sides; side++){
            triangleInput[side].classList.remove('show-input')
        }
    }else{
        for(let side=0; side<sides; side++){
            console.log(triangleInput[side])
        }
    }
}

const createTriangle = () => {
    optionSelectInputs(3)
} 

const drawTriangle = () => {    
    
    ctx.beginPath();
    ctx.moveTo(250-a,250+a);
    ctx.lineTo(250,250-a);
    ctx.lineTo(250+a,250+a);
    ctx.closePath();
    ctx.stroke();
}

//Circle
const createCircle = (random = null) => {
    const radius = document.querySelector('.radius').value || random;
    
    ctx.clearRect(0,0,500,500)
    ctx.beginPath();
    ctx.arc(250,250,radius,0,2*Math.PI);
    ctx.stroke();

    document.querySelector('.radius').value = '';
}

const createRandomCircle = () => {
    createCircle(Math.floor((Math.random() * (250 - 10)) + 10) )
}

