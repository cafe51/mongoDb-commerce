db.produtos.updateMany(
  {
    nome: { $in: ["Big Mac", "Quarteirão com Queijo"] },
  },
  {
    $push: {
      ingredientes: "bacon",
    },
  },
);

db.produtos.find(
  {
    // ultimaModificacao: { $exists: true },
    // tags: { $in: ['bovino', 'carne']}
  },
  {
    _id: 0,
    nome: 1,
    ingredientes: 1,
    // ultimaModificacao: 1,
    // tags: 1,
    // avaliacao: 1,
  },
);
