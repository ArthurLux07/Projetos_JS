/*
João está planejando seus exercícios físicos semanais. Crie um array chamado exerciciosSemana com os exercícios
"corrida", "flexões" e "abdominais". Verifique se o último exercício da lista é "alongamento".
Se não for, adicione "alongamento" ao final da lista. Imprima a lista de exercícios atualizada no final.
*/

let exerciciosSemana = ['corrida', 'felxão', 'abdominais'];

exerciciosSemana[0] = prompt('Qual seu primeiro exercício da lista?')
exerciciosSemana[1] = prompt('Qual seu segundo exercício da lista?')
exerciciosSemana[2] = prompt('Qual seu terceiro exercício da lista?')

if(exerciciosSemana[2] == 'alongamento'){

console.log('Muito bem João!')

}else{

    exerciciosSemana.splice(2, 1, 'alongamento')
}

console.log(exerciciosSemana)