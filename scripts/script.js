function validar(){
    const idade = document.getElementById("idade").value;
    const nivel = document.getElementById("nivel").value;
    const mensagem = document.getElementById("mensagem");

    if(idade >= 16 && nivel > 5){
        mensagem.innerText = "Inscrição aceita. Categoria PRO.";
        mensagem.style.color = "green";
    }else if (idade >= 16 && nivel <= 5){
        mensagem.innerText = "Inscrição aceita. Categoria INICIANTE.";
        mensagem.style.color = "blue";
    }else{
        mensagem.innerText = "Inscrição negada. Idade mínima: 16 anos.";
        mensagem.style.color = "red"
    }
}

//DESAFIO 1
function validarsenha(){
    const senha1 = document.getElementById("senha1").value;
    const senha2 = document.getElementById("senha2").value;
    const mensagem2 = document.getElementById("mensagem2");


    if(senha1.length >= 8){
        if (senha1 == senha2){
            mensagem2.innerText = "Senha válida!";
            mensagem2.style.color = "green";
        }else{
            mensagem2.innerText = "As senhas não estão iguais.";
            mensagem2.style.color = "orange";
        }
    }else{
        mensagem2.innerText = "Senha inválida, é necessário ter ao menos 8 caracteres.";
        mensagem2.style.color = "red"
    }
}

//DESAFIO 2
function aplicardesconto(){
    const estudante = document.querySelector('input[name="estudante"]:checked');
    const idade1 = document.getElementById("idade1").value;
    const mensagem3 = document.getElementById("mensagem3");

    if (idade1 >= 60 || estudante.value === "true" ) {
        mensagem3.innerText = "Você ganhou desconto!";
        mensagem3.style.color = "green"
    }else{
        mensagem3.innerText = "Você não ganhou desconto.";
        mensagem3.style.color = "red"
    }
}
