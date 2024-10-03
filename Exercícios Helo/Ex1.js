let diasSemana =  ["Segunda", "Terça", "Quarta", "Quinta", "Sexta"];

diasSemana.push('Sábado')
diasSemana.unshift('Domingo')

//1ºoperação

diasSemana.shift('Sábado')

//2ºoperação

diasSemana.unshift('Domingo')

//3ºoperação

diasSemana.pop('Sábado')

console.log(diasSemana)