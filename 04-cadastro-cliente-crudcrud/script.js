// ===================== URL DA API =====================
const API_URL = "http://localhost:3000/clientes";

/* ===================== DOM ===================== */
const campoNome = document.getElementById("nome");
const campoEmail = document.getElementById("email");
const btnCadastro = document.querySelector(".btn-primary");
const btnLimpar = document.querySelector(".btn-secondary");
const listaClientes = document.querySelector("ul");
/* ===================== FUNÇÕES ===================== */
// Cadastrar
btnCadastro.addEventListener("click", async (event) => {
  event.preventDefault();

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
});
