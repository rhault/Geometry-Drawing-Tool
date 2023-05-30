const aside = document.querySelector('aside');
const canvas = document.querySelector('canvas');
const ctx = canvas.getContext('2d');

const createRect = (randomBase = null, randomHeight = null) => {
    const base = document.querySelector('.base').value || randomBase;
    const height = document.querySelector('.height').value || randomHeight;
    
    ctx.clearRect(0,0,500,500)
    ctx.beginPath();
    ctx.rect(250 - (base/2),250 - (height/2),base,height);
    ctx.strokeStyle = 'blue';
    ctx.stroke();

    document.querySelector('.base').value = '';
    document.querySelector('.height').value = '';

    aside.innerHTML =`
    {
    <pre>
    nome: 'Quadrado',
    area: ${base * height},
    perimetro: ${2*(base+height)}
    </pre>
    }
    `;
}

const createRandomRect = () => {
    createRect(
        Math.floor((Math.random() * (450 - 10)) + 10),
        Math.floor((Math.random() * (450 - 10)) + 10)
    )
}

const createTriangle = () => {
    const side_a = document.querySelector('.side_a').value;
    const side_b = document.querySelector('.side_b').value;
    const side_c = document.querySelector('.side_c').value;

    ctx.beginPath();
    ctx.moveTo(250,250);
    ctx.lineTo(100,300);
    ctx.lineTo(300,300);
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
}

const createRandomCircle = () => {
    createCircle(Math.floor((Math.random() * (250 - 10)) + 10) )
}

