db.produtos.find(
  {
    ingredientes: { $all: ["picles"] },
  },
  
  { 
    nome: 1, _id: 0, valoresNutricionais: { $slice: 3 }, ingredientes: 1,
  },
);