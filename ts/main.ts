namespace empresa{

    let p = new Pessoa();
    p.nome = "Melissa";
    p.idade = 17;

    document.getElementById("nome").textContent = p.nome;
    document.getElementById("idade").textContent = p.idade.toString();
    document.getElementById("anoNasc").textContent = p.anoNasc(2020).toString();
}