// buscamos os dados de pessoas.json
fetch("pessoas.json")
  // armazenamos o resultado na variavel resposta e convertemos essa resposta para formato json
  .then((resposta) => resposta.json())
  // então jogamos o resultado convertido para a variavel json e jogamos pra dentro de uma function
  .then((json) => carregaElementosNaPagina(json));

  // criamos a função que exibe o resultado convertido na variavel json
function carregaElementosNaPagina(json) {
    // criamos o elemento tabela no html
    const table = document.createElement("table");
    // para cada iem 'pessoa' da variavel json
    // crie um elemento chamado tr (linha) no html

    // criamos uma linha e tres colunas para cada item
  for (let pessoa of json) {
    const tr = document.createElement("tr");
    // nas linhas criadas, crie um elemente chamado td (celula)
    const td1 = document.createElement("td");
    // para cada celula, adicione no html a informação do json.nome
    td1.innerHTML = pessoa.nome;
    // adicione na tr (linha da tabela) a informação da td (celula da tabela)
    tr.appendChild(td1);

    const td2 = document.createElement("td");
    td2.innerHTML = pessoa.idade;
    tr.appendChild(td2);

    const td3 = document.createElement("td");
    td3.innerHTML = pessoa.salario;
    tr.appendChild(td3);

    // adicione na tabela criada, todos os intens tr(linha) que ja herdam as td(celula)
    // aqui montamos a tabela => table - herda tr - herda td
    table.appendChild(tr);
  };

  // capturamos a classe resultado (que esta sendo exibido no DOM do html)
  const resultado = document.querySelector('.resultado');
  // exibimos a nossa tabela na classe resultado do dom.
  resultado.appendChild(table);
};