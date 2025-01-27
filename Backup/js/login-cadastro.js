// Seleção dos elementos
const loginButton = document.getElementById("button-login"); // Botão "Login" no header
const modal = document.getElementById("modal-login-register"); // Modal
const closeButton = document.getElementById("button-close-modal"); // Botão "Fechar" do modal

// Abrir o modal ao clicar no botão "Login"
loginButton.addEventListener("click", () => {
  modal.style.display = "flex"; // Mostra o modal (ou ajusta conforme o estilo CSS do modal)
});

// Fechar o modal ao clicar no botão "Fechar"
closeButton.addEventListener("click", () => {
  modal.style.display = "none"; // Oculta o modal
});

// Fechar o modal ao clicar fora da área do modal
window.addEventListener("click", (event) => {
  if (event.target === modal) {
    modal.style.display = "none"; // Oculta o modal
  }
});
