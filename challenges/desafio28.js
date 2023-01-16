db.produtos.find(
  {
    ingredientes: { $size: 4 },
  },
  // {
    // _id: 0,
    // nome: 1,
    // ingredientes: 1,
    // vendasPorDia: 1,
    // ultimaModificacao: 1,
    // tags: 1,
    // avaliacao: 1,
  // },
).count();