document.addEventListener('DOMContentLoaded',() => {
    const button = document.querySelector('button');
    button.addEventListener('click', () => {
        alert("Estamos animados para começar o ano com voces!")
    });


const startDate = new('2024-08-01');
const today = new Date();
const timeDiff = startDate - today;
const daysLeft = Math.ceil(timeDiff / (1000*60*60*24));

const piroca = document.createElement('p');
piroca.textContent = 'Faltam ${daysLeft} dias para o inicio das aulas!'
document.querySelector('.card').appendChild(piroca);


const image = document.querySelector('img');
image.addEventListener('click',() =>{
    image.src = voltaaulas.jpg;
}
);

const card = document.querySelector('.card');
card.style.opacity = 0;
card.style.transition = 'opacity 2s';

setTimeout(() => {
 card.style.opacity=1;   
}, 100);

});
