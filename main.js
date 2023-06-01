const aside = document.querySelector('aside');
const canvas = document.querySelector('canvas');
const ctx = canvas.getContext('2d');

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

const createTriangle = () => {
    const side_a = document.querySelector('.side_a').value;
    const side_b = document.querySelector('.side_b').value;
    const side_c = document.querySelector('.side_c').value;

    ctx.beginPath();
    ctx.moveTo(250,250);
    ctx.lineTo(100,300);
    ctx.lineTo(400,300);
    ctx.closePath();
    ctx.stroke();
    console.log("aqui")
}

const createCircle = (random = null) => {
    const radius = document.querySelector('.radius').value || random;
    
    ctx.clearRect(0,0,500,500)
    ctx.beginPath();
    ctx.arc(250,250,radius,0,2*Math.PI);
    ctx.stroke();

    document.querySelector('.radius').value = '';

    aside.innerHTML =`
    {<pre>
    nome: 'Circulo',
    raio: ${radius},
    diametro: ${2*radius},
    </pre>}
    `;
}

const createRandomCircle = () => {
    createCircle(Math.floor((Math.random() * (250 - 10)) + 10) )
}

