import { json_ar } from "./richestArr.js";
let richestArr = json_ar;
const card = document.getElementById("card_richest_man");
richestArr.map((richest_man) => {
    const cardDiv = `<div class="card m-1 my-height my-bg" style="width: 15rem;">
      <img src="${richest_man.image}" class="card-img-top" alt="Image Of ${richest_man.name}">
      <div class="card-body">
        <h5 class="card-title">${richest_man.name}</h5>
        <p class="card-text fst-italic">${richest_man.worth}</p>
        <p class="card-text">${richest_man.name} made his fortune at ${richest_man.source}</p>
      </div>
    </div>`;
    const cardWrapper = document.createElement("div");
    cardWrapper.innerHTML += cardDiv;
    cardWrapper.classList.add('d-flex', 'justify-content-center');
  
    card.appendChild(cardWrapper);
    cardWrapper.addEventListener("click", () => {
        cardWrapper.innerHTML = "";
      richestArr = richestArr.filter((c) => c.worth !== richest_man.worth);
        
    });
});