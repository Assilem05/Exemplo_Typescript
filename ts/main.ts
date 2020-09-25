namespace empresa{

    //Cliente Normal:

    let c = new Cliente("Luka",154);
    //c.nome = "Luka";
    c.idade = 21;
    c.credito = 1500;
    //c.codCliente = 154; 

    document.getElementById("nome").textContent = c.nome;
    document.getElementById("idade").textContent = c.idade.toString();
    document.getElementById("anoNasc").textContent = c.anoNasc(2020).toString();

    document.getElementById("codCliente").textContent = c.codCliente.toString();
    document.getElementById("credito").textContent = c.credito.toString();

    document.getElementById("compra").textContent = c.comprar(2000,500);


    //Cliente VIP:

    let c2 = new ClienteVip("Ivan",251);
    c2.idade = 25;
    c2.credito = 5000;
    c2.bonus = 2000;
    c2.inserirCidade = "Praia Grande";
    c2.inserirLogradouro = "Rua dos Sonhos 13,"

    document.getElementById("nomeVip").textContent = c2.nome;
    document.getElementById("idadeVip").textContent = c2.idade.toString();
    document.getElementById("anoNascVip").textContent = c2.anoNasc(2020).toString();

    document.getElementById("codClienteVip").textContent = c2.codCliente.toString();
    document.getElementById("creditoVip").textContent = c2.credito.toString();

    document.getElementById("compraVip").textContent = c2.comprar(8500,1000);
    document.getElementById("enderecoVip").textContent = c2.mostraEndereco();
}