db.produtos.deleteMany(
  {
    curtidas: { $lt: 50 },
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
    // tags: 1,
    // avaliacao: 1,
  },
);
