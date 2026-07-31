// Imports
import { ClientesAPI } from "./classes.js";
import {
  validar,
  newCliente,
  nullMessage,
  limpar,
  alertaErro,
  confirmarExclusao,
} from "./utils.js";

// Instanciação
const api = new ClientesAPI();

// DOM
const formulario = document.querySelector("form");
const btnLimpar = document.querySelector(".btn-secondary");
const listaClientes = document.querySelector("ul");

// Funções
async function carregarClientes() {
  const clientes = await api.listar();

  listaClientes.innerHTML = "";

  if (clientes.length === 0) {
    nullMessage(listaClientes);
    return;
  }

  clientes.forEach((cliente) => {
    const li = newCliente(cliente);
    listaClientes.appendChild(li);
  });
}

async function deletarClientes(id) {
  if (!confirmarExclusao()) {
    return;
  }

  try {
    await api.deletar(id);
    carregarClientes();
    console.log("Cliente deletado");
  } catch (erro) {
    console.error("Erro ao deletar", erro);
    alertaErro("Erro ao deletar cliente, tente novamente.");
  }
}

// Event Listeners
formulario.addEventListener("submit", async (e) => {
  e.preventDefault();

  const nome = formulario.elements.nome.value.trim();
  const email = formulario.elements.email.value.trim();

  if (!validar(nome, email)) {
    alertaErro("Preencha todos os campos");
    return;
  }

  await api.cadastrar(nome, email);
  carregarClientes;
  formulario.reset();
});

btnLimpar.addEventListener("click", (e) => {
  e.preventDefault();
  formulario.reset();

  const primeiroInput = formulario.elements.nome;
  if (primeiroInput) {
    primeiroInput.focus();
  }
});

listaClientes.addEventListener("click", (e) => {
  const botaoX = e.target.closest(".btn-delete");

  if (botaoX) {
    const id = botaoX.dataset.id;
    deletarClientes(id);
  }
});

carregarClientes();
