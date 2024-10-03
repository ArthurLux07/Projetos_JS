/*Desenvolva um aplicativo de lista de compras automatizada. Crie um array vazio chamado 'listaCompras'. 
Solicite ao usuário para adicionar três itens à lista. Verifique se o último item adicionado é "leite". 
Se não for, adicione "leite" ao final da lista. Imprima a lista de compras no final.*/

let listaCompras = [];

listaCompras[0] = prompt('Adicione um item para sua lista')
listaCompras[1] = prompt('Adicione o segundo item para sua lista')
listaCompras[2] = prompt('Adicione o último item para sua lista')

if(listaCompras [2] == 'leite'){

    console.log(listaCompras)

}else {

    listaCompras.push('leite')

    console.log(listaCompras)

}