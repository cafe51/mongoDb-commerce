db.produtos.updateMany(
  {

  },
  {
    $push: {
      valoresNutricionais: {
        $each: [],
        $sort: { percentual: -1 },
      },
    },
  },
);

db.produtos.find(
  {
    // nome: { $not: { $eq: "Big Mac" } },
  },
  {
    _id: 0,
    nome: 1,
    valoresNutricionais: 1,
    // ingredientes: 1,
    // vendasPorDia: 1,
    // vendidos: 1,
    // ultimaModificacao: 1,
    // tags: 1,
    // avaliacao: 1,
  },
);