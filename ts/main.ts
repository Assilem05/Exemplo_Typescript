namespace empresa{

    let c = new Cliente();
    c.nome = "Luka";
    c.idade = 21;
    c.credito = 1500;
    c.codCliente = 154; 

    document.getElementById("nome").textContent = c.nome;
    document.getElementById("idade").textContent = c.idade.toString();
    document.getElementById("anoNasc").textContent = c.anoNasc(2020).toString();

    document.getElementById("codCliente").textContent = c.codCliente.toString();
    document.getElementById("credito").textContent = c.credito.toString();

    document.getElementById("compra").textContent = c.comprar(2000,500);
}