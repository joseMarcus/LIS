// Array/Lista declarada como a variável constante de valor fixo chamada "dataset" com vários jsons e várias chaves e valores em cada conjunto
const dataset = [
  {
    //Chave e valor(id:1)
    id: 1,
    //Chave e valor(Hambúrguer)
    name: 'Hambúrguer',
    //Chave e valor(imagem com endereçamento relativo, mesmo que não a tenha)
    image: 'images/hamburguer.jpg',
    //Chave e valor(legenda/descrição)
    description:
      'Um hambúrguer é um sanduíche que consiste em um ou mais hambúrgueres cozidos de carne moída, geralmente carne bovina, colocados dentro de um pão ou pão fatiado. O hambúrguer pode ser frito, grelhado, defumado ou grelhado',
  },
  {
    //Chave e valor(id:2)
    id: 2,
    //Chave e valor(Sanduíche)
    name: 'Sanduíche',
    //Chave e valor(imagem com endereçamento relativo, mesmo que não a tenha)
    image: 'images/sanduiche.jpg',
    //Chave e valor(legenda/descrição)
    description:
      'O sanduíche (do inglês sandwich), também popularmente chamado de sanduba (português brasileiro) ou sandes (português europeu), é um tipo de alimento que consiste em duas fatias de um pão inteiro, entre as quais é colocada carne, queijo ou outro tipo de alimento.Os sanduíches são, habitualmente, consumidos ao lanche ou como uma refeição rápida, durante o almoço ou o jantar.',
  },
  {
    //Chave e valor(id:3)
    id: 3,
    //Chave e valor(Café)
    name: 'Café',
    //Chave e valor(imagem com endereçamento relativo, mesmo que não a tenha)
    image: 'images/cafe.jpg',
    //Chave e valor(legenda/descrição)
    description:
      'O café é uma bebida produzida a partir dos grãos torrados do fruto do cafeeiro. É servido tradicionalmente quente, mas também pode ser consumido gelado. O café é um estimulante, por possuir cafeína — geralmente 80 a 140 mg para cada 207 ml dependendo do método de preparação.',
  },
  {    
    //Chave e valor(id:4)
    id: 4,
    //Chave e valor(Suco)
    name: 'Suco',
    //Chave e valor(imagem com endereçamento relativo, mesmo que não a tenha)
    image: 'images/suco.jpg',
    //Chave e valor(legenda/descrição)
    description:
      'Um suco (português brasileiro) ou sumo (português europeu) é uma bebida produzida do líquido extraído de frutos. Além dos frutos, sucos também podem ser obtidos pelo processamento de outras partes dos vegetais, tais como folhas, talos ou raízes.',
  },
];
//Exportador de dados para os elementos HTML através do objeto "dataset"
export default dataset;
