db.produtos.updateMany(
  {
    // nome: "Cheddar McMelt",
  },
  {
    $set: {
      vendasPorDia: [0, 0, 0, 0, 0, 0, 0],
    },
  },
);

db.produtos.updateMany(
  {
    nome: "Big Mac",
  },
  {
    $inc: {
      "vendasPorDia.3": 60,
    },
  },
);

db.produtos.updateMany(
  {
    tags: { $in: ["bovino"] },
  },
  {
    $inc: {
      "vendasPorDia.6": 120,
    },
  },
);

db.produtos.find(
  {

  },
  {
    _id: 0,
    nome: 1,
    vendasPorDia: 1,
    // ultimaModificacao: 1,
    // tags: 1,
    // avaliacao: 1,
  },
);