db.produtos.updateMany(
  {
    // nome: "Cheddar McMelt",
  },
  {
    $push: {
      tags: { $each: ["combo", "tasty"], $sort: 1 },
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
