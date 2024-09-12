function abu(){

    const nomeInput = document.getElementById('nome').value

    localStorage.setItem('Nome', nomeInput)

    console.log('Seu nome já foi armazenado!')
}