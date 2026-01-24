![Serenatto Café](/public/assets/header/logo-desktop.png)

---

# ☕ Serenatto Café - Landing Page Responsiva

Projeto de Landing Page responsiva desenvolvido com foco em arquitetura de CSS escalável, responsividade avançada, uso profissional de Sass e interações em JavaScript puro, simulando um cenário real de projeto front-end.

O objetivo principal foi aplicar boas práticas modernas de CSS, organização de código e design system, indo além do conteúdo base do curso e explorando decisões técnicas próprias.

---

## 🎯 Objetivos do Projeto

- Desenvolver uma página totalmente responsiva.
- Aplicar **Sass** de forma profissional, com arquitetura modular.
- Criar e utilizar **tokens de design** (cores, tipografia, espaçamentos).
- Implementar **dark mode** funcional.
- Trabalhar com componentização visual.
- Simular padrões de código utilizados em projetos reais.
- Utilizar **Vite** para build e compilação automática do Sass.

---

## 🌐 Acesso ao Projeto
- **👉 Deploy na Vercel:**
[Acesse a aplicação do projeto](https://mguilhermegomes-serenatto-cafe.vercel.app)

- **👉 Repositório no GitHub:**
[Acesse o repositório do projeto](https://github.com/mguilhermegomes/serenatto-cafe)

---

## 🛠️ Tecnologias Utilizadas

- **HTML5**
- **CSS3** (Sass / SCSS)
- **JavaScript** (ES6+)
- **Vite** (Build Tool)
- **Flexbox & CSS Grid**
- **Modais nativos**

---

## 🧠 Principais Conceitos Aplicados

### Arquitetura de CSS Modular
O projeto foi estruturado seguindo uma lógica de pastas para facilitar a manutenção:
- **Abstracts:** Variáveis e funções.
- **Base:** Reset e tipografia.
- **Layout:** Estrutura global (Header, Footer, Grid).
- **Components:** Botões, cards e modais.
- **Themes:** Gerenciamento do Dark Mode.

### Recursos do Sass
- **Design Tokens:** Centralização de cores e fontes.
- **Mixins & Functions:** Automação de breakpoints e cálculos.
- **Placeholders (%):** Reaproveitamento eficiente de estilos.

---

## ⭐ Diferenciais do Projeto

- Arquitetura Sass inspirada em projetos de médio porte
- Uso de `<dialog>` em vez de bibliotecas externas
- Design system com tokens reutilizáveis
- Dark Mode pensado desde a base do CSS
- Código sem frameworks ou dependências desnecessárias

---

## 📁 Organização de Pastas

A estrutura do projeto foi pensada para escalabilidade e clareza, separando responsabilidades de forma explícita:

```text
src/
├── scss/
│   ├── abstracts/        # Variáveis, funções, mixins e placeholders
│   │   ├── _variables.scss
│   │   ├── _functions.scss
│   │   ├── _mixins.scss
│   │   ├── _placeholders.scss
│   │   └── _index.scss
│   │
│   ├── base/             # Reset, estilos globais e tipografia
│   │   ├── _reset.scss
│   │   ├── _base.scss
│   │   └── _typography.scss
│   │
│   ├── layout/           # Estrutura do site
│   │   ├── _grid.scss
│   │   ├── _header.scss
│   │   ├── _navigation.scss
│   │   └── _footer.scss
│   │
│   ├── components/       # Componentes reutilizáveis
│   │   ├── _button.scss
│   │   ├── _card.scss
│   │   └── _modal.scss
│   │
│   ├── pages/            # Seções específicas da página
│   │   ├── _banners.scss
│   │   ├── _nossos-servicos.scss
│   │   ├── _nossos-produtos.scss
│   │   └── _contato.scss
│   │
│   ├── themes/           # Dark mode e alternância de tema
│   │   ├── _theme-switch.scss
│   │   └── _dark.scss
│   │
│   └── main.scss         # Arquivo central do Sass
│
├── main.js               # Lógica de interação
```

---

## 🌗 Dark Mode
O projeto possui modo escuro totalmente funcional, com as seguintes características:

- Alternância via botão
- Estilos isolados em `themes/`
- Tokens de cor reaproveitados
- Consistência visual em todos os componentes

## Preview Dark Mode
![Preview Serenatto Café Dark mode](/public/preview-dark-mode.jpg)

---
## ⚙️ Funcionalidades em JavaScript

- Menu lateral responsivo (sidebar)
- Fechamento automático ao clicar fora
- Alternância de tema (light / dark)
- Controle de modais com `<dialog>`
- Bloqueio de scroll ao abrir modal
- Código organizado, legível e sem dependências externas

---

## 🚀 Como Rodar o Projeto Localmente

### Clone o repositório
```bash
git clone https://github.com/mguilhermegomes/serenatto-cafe.git
```
### Acesse a pasta
```bash
cd serenatto-cafe
```
### Instale as dependências
```bash
npm install
```
### Inicie o ambiente de desenvolvimento
```bash
npm run dev
```
**O projeto estará disponível em: [http://localhost:5173](http://localhost:5173)**

---

## 🎨 Origem do Design (Figma)
O layout deste projeto baseado no curso:

- **SASS com Vite: otimizando e modularizando seu CSS**
- **Plataforma:** Alura
- **Formação:** CSS Avançado: implementando designs com Grid, Flexbox e Sass

### Observações
- Não houve copia e cola de código
- O Figma foi utilizado apenas como referência visual
- Todo o código foi desenvolvido do zero
- As decisões técnicas e arquiteturais são autorais
- O projeto reflete a aplicação prática dos conceitos estudados no curso

---

## 📌 Status do Projeto
- ✅ Finalizado
- 🔄 Aberto a melhorias e refinamentos técnicos

---

## 👨‍💻 Autor
Desenvolvido por **Guilherme Gomes**

- **Github:** [Acesse meu perfil do Github](https://github.com/mguilhermegomes)
- **LinkedIn:** [Acesse meu perfil do LinkedIn](https://linkedin.com/in/mguilherme-gomes)