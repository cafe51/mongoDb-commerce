db.produtos.updateMany(
  {
    valoresNutricionais:
    {
      $elemMatch: {
        tipo: "sódio",
        percentual: { $gt: 20, $lt: 40 },
      },
    },
  },
  {
    $push: {
      tags: "contém sódio",
    },
  },
);

db.produtos.find(
  {

  },
  {
    _id: 0,
    nome: 1,
    // vendasPorDia: 1,
    // ultimaModificacao: 1,
    tags: 1,
    // avaliacao: 1,
  },
);