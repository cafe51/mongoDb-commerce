db.produtos.find(
  {
    nome: { $regex: /mc/i },
  },
  {
    _id: 0,
    nome: 1,
    curtidas: 1,
    // ingredientes: 1,
    // vendasPorDia: 1,
    // vendidos: 1,
    // ultimaModificacao: 1,
    // tags: 1,
    // avaliacao: 1,
  },
).count();