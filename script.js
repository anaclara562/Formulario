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
    const idade2 = document.getElementById("idade2").value;
    const mensagem3 = document.getElementById("mensagem3");

    if (idade2 >= 60 || estudante.value === "true" ) {
        mensagem3.innerText = "Você ganhou desconto!";
        mensagem3.style.color = "green"
    }else{
        mensagem3.innerText = "Você não ganhou desconto.";
        mensagem3.style.color = "red"
    }
}

//DESAFIO 3
function verificaracesso(){
    const nome2 = document.getElementById("nome2").value;
    const idade3 = document.getElementById("idade3").value;
    const mensagem4 = document.getElementById("mensagem4");

    if (idade3 < 0 || nome2  == "" || idade3 === "" ) {
        mensagem4.innerText = "Acesso negado, insira uma senha e uma idade válida.";
        mensagem4.style.color = "red"
    }else{
        mensagem4.innerText = "Acesso autorizado!";
        mensagem4.style.color = "green"
    }
}

