const produtos = db.produtos.find().count();

db.resumoProdutos.insertOne(
  {
    franquia: "McDonalds",
    totalProdutos: produtos,
  },
);

db.resumoProdutos.find(
  {
    // ultimaModificacao: { $exists: true },
    // tags: { $in: ['bovino', 'carne']}
  },
  {
    _id: 0,
    // nome: 1,
    // ultimaModificacao: 1,
    // tags: 1,
    // avaliacao: 1,
  },
);
