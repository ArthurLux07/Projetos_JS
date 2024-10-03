/*
Pedro está organizando seus filmes favoritos. Crie um array chamado filmesFavoritos com três filmes 
de sua escolha. 
Modifique o primeiro filme para um novo título. Verifique se o último filme da lista é "Harry Potter". 
Se não for, adicione "Harry Potter" ao final da lista. Imprima a lista de filmes favoritos no final.
*/

let filmesFavoritos = ['Jujutsu Kaisen', 'Haikyuu', 'Baki'];

filmesFavoritos[0] = 'Boku no Hero'

if(filmesFavoritos[2] == 'Harry Potter'){
console.log('Sua lista de filmes é muito boa')

}else{

    filmesFavoritos.splice(2, 1, 'Harry Potter')

}

console.log(filmesFavoritos)