banco_de_dados = []


document.getElementById('login').addEventListener('submit', function(event){
    event.preventDefault();
    const username = document.getElementById('loginUsername').value;
    const password = document.getElementById('loginPassword').value

    // Verificar se o usuário e a senha são válidos
    if (username === banco_de_dados[0] && password === banco_de_dados[1]) {
    // Successful login
    alert('Login Bem sucedido');
    } else {
    // Invalid login
    alert('Usuário ou senha incorretos');
}
});

document.getElementById('register').addEventListener('submit', function(event) {
    event.preventDefault();
    const username = document.getElementById('registerUsername').value;
    const email = document.getElementById('registerEmail').value;
    const password = document.getElementById('registerPassword').value;
    const confirmPassword = document.getElementById('registerConfirmPassword').value;

  // Verificar se os campos foram preencidos corretamente
    if (username && email && password && confirmPassword) {
    // Verificar se a senha é igual a sua confirmação
        if (password === confirmPassword) {
      // Cadastro feito com sucesso
        alert('Registrado com sucesso !');
        banco_de_dados.unshift(username)
        banco_de_dados.push(password)
      // Resetar o formulário
        document.getElementById('register').reset();
        } else {
      // Senhas não batem
        alert('As senhas não são iguais');
    }
    } else{
    // Campos não preencidos
    alert('Por favor preencha todos os campos');
}
});
