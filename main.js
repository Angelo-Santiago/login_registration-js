banco_de_dados = []


document.getElementById('login').addEventListener('submit', function(event){
    event.preventDefault();
    const username = document.getElementById('loginUsername').value;
    const password = document.getElementById('loginPassword').value

    // Check if username and password are valid
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

  // Check if all fields are filled
    if (username && email && password && confirmPassword) {
    // Check if passwords match
        if (password === confirmPassword) {
      // Successful registration
        alert('Registrado com sucesso !');
        banco_de_dados.unshift(username)
        banco_de_dados.push(password)
      // Reset the form
        document.getElementById('register').reset();
        } else {
      // Passwords don't match
        alert('As senhas não são iguais');
    }
    } else{
    // Missing fields
    alert('Por favor preencha todos os campos');
}
});
