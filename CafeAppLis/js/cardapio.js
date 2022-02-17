// Importar PARA "itens" DO arquivo Javascript './model/dataset.js'
import itens from './model/dataset.js';
// Importar PARA "foodsModel" DO arquivo Javascript './model/foods.js'
import foodsModel from './model/foods.js';

// Uma função do food.js(load) para trabalhar um modelo do food.js(foodsModel) a partir do conjunto de itens em dataset.js(itens)
foodsModel.load(itens);
//Declaração da variável(foods) limitada no escopo(let) que recebe o resultado de uma outra função do food.js(readAll)
let foods = foodsModel.readAll();

//Uma função criada neste script(initFoodsCard)
function initFoodsCard () {
  
  //Um laço(for) criando uma variável chamada "item" para trabalhar a variável "foods", declarada anteriormente
  for (let item of foods) {

    //Uma variável constante chamada "view" que recebe uma outra função no mesmo script que trabalha a variável "item" deste laço
    const view = createFoodCardItem(item);

    //let itensCardapio = document.querySelector('.itens-cardapio');

    //Declaração da variável(itensCardapio) limitada no escopo(let) que recebe a referência do elemento através do ID("itens-cardapio").
    let itensCardapio = document.getElementById("itens-cardapio");
    //Analisa o texto e insere os nós dentro do elemento após seu último filho(beforeend), como parâmetro a variável "view"
    itensCardapio.insertAdjacentHTML('beforeend', view);
  }
}

//Uma função criada neste script(createFoodCardItem)
function createFoodCardItem (item) {

    //Uma variável constante chamada "view" que recebe uma string que no momento gera uma imagem, nome e descrição diferente importado do dataset.js, apesar da declaração da variável não "bater"
    const view = `<div class="col-3 card my-1 mx-1 py-1">
                    <img src="${item.imagem}" class="card-img-top" alt="...">
  
                    <div class="card-body">
                      <h5 class="card-title">${item.nome}</h5>
                      <p class="card-text">${item.descricao}</p>
                      <a href="#" class="btn btn-primary">Comprar</a>
                    </div>
                  </div>`;
    //Retornar a cada uso a variável "view"
    return view;
}


// Captar o evento de submissão do formulário e adicionar o item no cartão (card).
// const foodForm = document.querySelector('#foodForm');

//Declaração da variável constante(foodForm) que recebe a referência do elemento através do ID("foodForm").
const foodForm = document.getElementById("foodForm");

//Função com base no módulo "foodForm" com o parâmetro de entrada chamado "event"
foodForm.onsubmit = function (event) {
  // Previnir que o modal fique abrindo e fechando em loop.

  //Função com base no parâmetro "event"
  event.preventDefault();

  //Declaração da variável(newFood) limitada no escopo(let) que recebe um objeto chamado "Object" como propriedade pra função "fromEntries", com parâmetros de uma nova variável além de outro objeto  que recebe uma variável constante declarada anteriormente
  let newFood = Object.fromEntries(new FormData(foodForm));
  //Função deste escopo com script do food.js para trabalhar dados da variável anterior como parâmetro
  foodsModel.create(newFood);

  //Declaração da variável constante(foodCard) que recebe a função anterior a esta no script mas que trabalha com os novos dados gerados anteriormente advinfos do parâmetro "newFood"
  const foodCard = createFoodCardItem(newFood);
  
  //Declaração da variável NOVAMENTE (itensCardapio) limitada no escopo(let) que recebe a referência do elemento através do ID("itens-cardapio").
  let itensCardapio = document.getElementById("itens-cardapio");
  //Analisa o texto e insere os nós dentro do elemento após seu último filho(beforeend), MAS agora com o parâmetro da variável "foodCard"
  itensCardapio.insertAdjacentHTML('beforeend', foodCard);
}
//"Chamando" a função
initFoodsCard();