/*
Maria está realizando compras online. Crie um array inicialmente vazio chamado 'carrinho'. Adicione os produtos
"camiseta", "calça" e "sapato" ao carrinho. Remova o primeiro produto da lista e,
em seguida, modifique o segundo produto para "tênis". Imprima o carrinho de compras atualizado no final.
*/

let carrinho = [];

carrinho.unshift('camiseta', 'calça', 'sapato');

console.log(carrinho);

//segunda operação

carrinho.shift('camiseta')

carrinho.splice(0, 1, 'tênis')

console.log(carrinho)