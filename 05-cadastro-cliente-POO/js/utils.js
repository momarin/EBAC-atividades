export function validar(nome, email) {
  return nome && nome.trim() !== "" && email && email.trim() !== "";
}

export function newCliente(cliente) {
  const li = document.createElement("li");
  li.innerHTML = `
    <div>
      <strong>${cliente.nome}</strong> - ${cliente.email}
      <button class="btn-delete" data-id="${cliente.id}">X</button>
    </div>
    `;
  return li;
}

export function nullMessage(elemento) {
  elemento.innerHTML = `<li class="empty">Nenhum cliente cadastrado</li>`;
}

export function limpar(...inputs) {
  inputs.forEach((input) => {
    input.value = "";
  });
  if (inputs.length > 0) {
    inputs[0].focus();
  }
}

export function alertaErro(mensagem) {
  alert(mensagem);
}

export function confirmarExclusao() {
  return confirm("Tem certeza que deseja excluir?");
}
