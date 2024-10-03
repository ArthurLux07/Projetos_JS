/*
Carlos está definindo suas metas para a semana. Crie um array inicialmente vazio chamado metasSemana.
Adicione três metas à lista. Verifique se a segunda meta é "exercício físico". Se não for, 
modifique-a para "praticar esportes". Imprima a lista de metas semanais no final.

Dicas: Empurrar em inglês - If
*/

let metasSemana = [];

metasSemana[0] = prompt('Qual a sua primeira meta para a semana?')
metasSemana[1] = prompt('Qual a sua segunda meta para a semana?')
metasSemana[2] = prompt('Qual a sua terceira meta para a semana?')

//segunda operação

if(metasSemana[1] == 'exercício físico'){

    console.log(metasSemana)
    console.log('Boa sorte, Carlos!')

}else{

    metasSemana.splice(1, 1, 'exercício físico')
}

console.log(metasSemana)
