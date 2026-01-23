import "./scss/main.scss";

const menuHamburguer = document.getElementById("menu-hamburguer");
const menuFechar = document.getElementById("menu-fechar");
const sidebar = document.querySelector(".sidebar");
const darkThemeButton = document.getElementById("modo-noturno-botao-toggle");
const darkThemeButtonSidebar = document.getElementById(
  "modo-noturno-botao-toggle-sidebar",
);

menuHamburguer.addEventListener("click", () => {
  sidebar.classList.toggle("invisible");
});

menuFechar.addEventListener("click", () => {
  sidebar.classList.add("invisible");
});

darkThemeButton.addEventListener("click", () => {
  darkThemeButton.classList.toggle("modo-noturno--ativado");
  darkThemeButton.classList.toggle("modo-noturno--desativado");
});

darkThemeButtonSidebar.addEventListener("click", () => {
  darkThemeButtonSidebar.classList.toggle("modo-noturno--ativado");
  darkThemeButtonSidebar.classList.toggle("modo-noturno--desativado");
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