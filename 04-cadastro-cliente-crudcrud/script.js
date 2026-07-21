// ===================== URL DA API =====================
const API_URL = "http://localhost:3000/clientes";

/* ===================== DOM ===================== */
const campoNome = document.getElementById("nome");
const campoEmail = document.getElementById("email");
const btnCadastro = document.querySelector(".btn-primary");
const btnLimpar = document.querySelector(".btn-secondary");
const listaClientes = document.querySelector("ul");
/* ===================== FUNÇÕES ===================== */
// Listar Clientes Cadastrados
async function listarClientes() {
  const resposta = await fetch(API_URL);
  const clientes = await resposta.json();

  listaClientes.innerHTML = "";

  if (clientes.length === 0) {
    listaClientes.innerHTML =
      '<li class="empty">Nenhum cliente cadastrado</li>';
    return;
  }
  clientes.forEach((cliente) => {
    const li = document.createElement("li");
    li.innerHTML = `
    <div>
                <strong>${cliente.nome}</strong> - ${cliente.email}
                <button class="btn-delete" data-id="${cliente.id}">X</button>
            </div>
  `;
    listaClientes.appendChild(li);
  });
}
// Cadastrar
btnCadastro.addEventListener("click", async (e) => {
  e.preventDefault();

  const nome = campoNome.value.trim();
  const email = campoEmail.value.trim();

  if (!nome || !email) {
    alert("Preencha todos os campos.");
    return;
  }

  await fetch(API_URL, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ nome, email }),
  });

  campoNome.value = "";
  campoEmail.value = "";
  campoNome.focus();

  listarClientes();
});
// Limpar Campos
btnLimpar.addEventListener("click", (e) => {
  e.preventDefault();
  campoNome.value = "";
  campoEmail.value = "";
  campoNome.focus();
});

listarClientes();
