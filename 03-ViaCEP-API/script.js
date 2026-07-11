// 1. Ouvir o evento de quando o usuário sair do campo do CEP
document.getElementById("cep").addEventListener("blur", (evento) => {
  const elemento = evento.target;
  const cepInformado = elemento.value;

  //2. Validar CEP
  if (!(cepInformado.length === 8)) return;

  //3. Fazer busca no ViaCEP
  fetch(`https://viacep.com.br/ws/${cepInformado}/json/`).then((response) =>
    response
      .json()
      .then((data) => {
        //3.1 processamento da página
        if (!data.erro) {
          document.getElementById("logradouro").value = data.logradouro;
          document.getElementById("bairro").value = data.bairro;
          document.getElementById("cidade").value = data.localidade;
          document.getElementById("estado").value = data.uf;

          //4. Salvar na localStorage
          salvarLS({
            cep: cepInformado,
            logradouro: data.logradouro,
            bairro: data.bairro,
            cidade: data.localidade,
            estado: data.uf,
          });
        } else {
          alert("Cep não encontado.");
        }
      })
      .catch((error) => console.error("Erro ao buscar: ", error)),
  );
});

// salvar dados
function salvarLS(dados) {
  localStorage.setItem("endereco_salvo", JSON.stringify(dados));
}
//carregar dados
function carregarLS() {
  const dadosSalvos = localStorage.getItem("endereco_salvo");

  if (dadosSalvos) {
    try {
      const dados = JSON.parse(dadosSalvos);
      document.getElementById("cep").value = dados.cep || "";
      document.getElementById("logradouro").value = dados.logradouro || "";
      document.getElementById("bairro").value = dados.bairro || "";
      document.getElementById("cidade").value = dados.cidade || "";
      document.getElementById("estado").value = dados.estado || "";
    } catch (erro) {
      console.error("Erro ao carregar dados salvos.", erro);
    }
  }
}

document.addEventListener("DOMContentLoaded", carregarLS);
//------------------------------------------------------------------
// Limpando LS com botão limpar
document.getElementById("btn-limpar").addEventListener("click", () => {
  localStorage.removeItem("endereco_salvo");
});
