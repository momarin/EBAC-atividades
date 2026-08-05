// 1. Pegar os elementos do HTML
const botaoMenu = document.getElementById("menuToggle");
const menuNav = document.getElementById("mainNav");

// 2. Adicionar um "ouvinte" de clique no botão
botaoMenu.addEventListener("click", function () {
  // 3. Alternar a classe 'open' no menu
  menuNav.classList.toggle("open");
});
