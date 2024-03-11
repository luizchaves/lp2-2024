// import { investments } from './investments.js';
const response = await fetch('./js/investments.json');

const investments = await response.json();

const cards = document.querySelector('.cards');

for (const investment of investments) {
  const view = `
    <div class="col">
      <div class="card">
        <div class="card-header">${investment.name}</div>
        <div class="card-body">
          <p class="card-text">Valor: ${investment.value}</p>
        </div>
      </div>
    </div>
  `;

  cards.insertAdjacentHTML('afterbegin', view);
}
