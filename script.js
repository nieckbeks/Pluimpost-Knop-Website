/* De intro animatie*/
let intro = document.querySelector('.intro');

window.addEventListener('DOMContentLoaded', ()=>{

    setTimeout(()=>{

     intro.style.top = '-100vh';

    },1500)
});

/* Inlever berichtjes */
let ingeleverd = [
  "Complimentje ingeleverd!",
  "Dankjewel voor het compliment!",
  "Je bent een topper!",
];

/* Koppelen aan de Html*/
let button = document.getElementById("btn");
let card = document.getElementById("card");

/* Het hele knopgebeuren gedoe*/
button.addEventListener("click", () => {
  let random = Math.floor(Math.random() * ingeleverd.length);
  
  card.innerHTML = `
    ${ingeleverd[random]}<br>
    <button class="btn" id="btn">Klik hier</button>
  `;
btn.style.display = "none";
});
