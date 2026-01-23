import "./scss/main.scss";

const menuHamburguer = document.getElementById("menu-hamburguer");
const menuFechar = document.getElementById("menu-fechar");
const sidebar = document.querySelector(".sidebar");
const darkThemeButtons = document.querySelectorAll(".modo-noturno__toggle");

menuHamburguer.addEventListener("click", () => {
  sidebar.classList.toggle("invisible");
});

menuFechar.addEventListener("click", () => {
  sidebar.classList.add("invisible");
});

darkThemeButtons.forEach(button => {
  button.addEventListener("click", () => {
    // Alterna a classe 'modo-noturno--ativado' e 'modo-noturno--desativado' para todos os botões
    darkThemeButtons.forEach(btn => {
      btn.classList.toggle("modo-noturno--ativado");
      btn.classList.toggle("modo-noturno--desativado");
    });

    // Alterna o tema no body
    document.body.classList.toggle("dark-theme");
  });
});

document.addEventListener("click", (event) => {
  const isSidebarOpen = !sidebar.classList.contains("invisible");
  const clickInsideSidebar = sidebar.contains(event.target);
  const clickOnMenuButton = menuHamburguer.contains(event.target);

  if (isSidebarOpen && !clickInsideSidebar && !clickOnMenuButton) {
    // Fechar a sidebar
    sidebar.classList.add("invisible");
    menuHamburguer.classList.remove("invisible");
  }
});

// abrir modal
document.querySelectorAll("[data-modal]").forEach((element) => {
  element.addEventListener("click", () => {
    const modal = document.getElementById(element.dataset.modal);

    if (!modal.open) {
      document.body.classList.add("modal-aberto");
      modal.showModal();
      modal.focus();
    }
  });
});

// fechar modal (botões)
document.querySelectorAll(".modal").forEach((modal) => {
  modal.addEventListener("close", () => {
    document.body.classList.remove("modal-aberto");
  });

  modal.querySelectorAll(".modal__fechar").forEach((btn) => {
    btn.addEventListener("click", () => modal.close());
  });
});

document.querySelectorAll(".modal").forEach((modal) => {
  modal.addEventListener("click", (e) => {
    if (e.target === modal) modal.close();
  });
});