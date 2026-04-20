# 🎓 Campanha 2026.2 — Faculdade Luciano Feijão (FLF)

Landing page institucional desenvolvida para a campanha de captação de alunos do semestre **2026.2** da [Faculdade Luciano Feijão](https://www.flucianofeijao.com.br), localizada em Sobral — CE.

> Projeto desenvolvido durante o **Estágio de TI — FLF 2025**, por **Joaquim Bismarck**.

---

## 📸 Visão Geral

O site é composto por duas páginas principais:

- **`index.html`** — Página principal com hero, diferenciais da instituição, galeria de fotos, vídeo institucional e CTA de inscrição.
- **`cursos.html`** — Página de cursos com listagem filtrável por modalidade (Presencial / EaD).

---

## 🗂️ Estrutura do Projeto

```
projeto-FLF/
├── index.html              # Página principal (landing page)
├── cursos.html             # Página de cursos
└── assets/
    ├── css/
    │   ├── variables.css   # Variáveis CSS (cores, fontes, espaçamentos)
    │   ├── elements.css    # Reset e elementos base
    │   ├── class.css       # Classes utilitárias
    │   ├── menu.css        # Estilos do menu desktop e FAB mobile
    │   ├── styles.css      # Estilos gerais da landing page
    │   └── cursos.css      # Estilos específicos da página de cursos
    ├── js/
    │   ├── menu.js         # Controle do menu FAB flutuante (mobile)
    │   └── cursos.js       # Filtros de modalidade na página de cursos
    ├── img/
    │   ├── Marca-FLF-2022-nome-preto.png
    │   ├── cursos-img/     # Imagens dos cards de cada curso
    │   └── *.jpg / *.png   # Fotos institucionais (campus, eventos, etc.)
    └── video/
        └── video-instituicao-FLF.mp4
```

---

## ✨ Funcionalidades

- **Hero section** com vídeo autoplay em loop e card de estatística institucional
- **Seção de diferenciais** com cards (Nota MEC, modalidades, ensino prático, FIES)
- **Galeria** de fotos do campus, laboratórios, eventos e formaturas
- **Player de vídeo** institucional com poster image
- **CTA de inscrição** com link para o site oficial
- **Página de cursos** com 13 cursos listados e filtro por modalidade (Todos / Presencial / EaD)
- **Filtro via URL** — suporte a `cursos.html?filtro=presencial` para navegação direta
- **Menu FAB flutuante** para dispositivos móveis (≤ 768px)
- **Design responsivo** compatível com desktop e mobile

---

## 🛠️ Tecnologias Utilizadas

| Tecnologia | Uso |
|---|---|
| HTML5 | Estrutura semântica das páginas |
| CSS3 | Estilização, variáveis CSS, Grid e Flexbox |
| JavaScript (Vanilla) | Interatividade do menu e filtros de cursos |
| Google Fonts | Tipografia (Playfair Display, DM Sans, Montserrat, Open Sans) |

Nenhuma dependência externa ou framework — projeto 100% em HTML, CSS e JS puros.

---

## 🚀 Como Executar

Por ser um projeto estático, basta abrir o arquivo diretamente no navegador:

```bash
# Clone o repositório
git clone https://github.com/seu-usuario/projeto-FLF.git

# Acesse a pasta
cd projeto-FLF

# Abra no navegador
open index.html
```

> **Recomendação:** Use a extensão [Live Server](https://marketplace.visualstudio.com/items?itemName=ritwickdey.LiveServer) no VS Code para evitar restrições de CORS ao carregar o vídeo local.

---

## 📄 Páginas

### `index.html` — Landing Page

| Seção | ID | Descrição |
|---|---|---|
| Hero | `#home` | Título, descrição, CTAs e vídeo do campus |
| Sobre | `#sobre` | Cards com diferenciais da instituição |
| Galeria | `#galeria` | Grid de fotos institucionais |
| Vídeo | `#video` | Player do vídeo institucional |
| Inscrição | `#inscricao` | CTA final com link para pré-inscrição |

### `cursos.html` — Página de Cursos

- Filtro por abas: **Todos**, **Presencial**, **EaD**
- Suporte a parâmetro de URL: `?filtro=presencial` ou `?filtro=ead`
- Animação de entrada nos cards ao filtrar
- Contador dinâmico de cursos visíveis

---

## 🎨 Design

O projeto utiliza um sistema de design tokens centralizado em `variables.css`, com paleta de cores, tipografia e espaçamentos padronizados para consistência visual entre as páginas.

---

## 📬 Contato Pessoal

**Faculdade Luciano Feijão**   
📞 (88) 98227-4988  
🌐 joaquimbismarck23@gmail.com
