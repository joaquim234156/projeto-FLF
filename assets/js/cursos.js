/* ══════════════════════════════════════════════════════
   CURSOS.JS — Filtros de modalidade (Todos / Presencial / EaD)
   
   Lógica:
   1. Lê o parâmetro "filtro" da URL ao carregar
      (ex: cursos.html?filtro=presencial)
      para saber qual aba ativar quando o usuário
      vem clicando em um botão do index.html.
   2. Cada botão de filtro adiciona/remove a classe
      .oculto nos cards conforme a modalidade.
   3. Atualiza o contador de cursos visíveis.
   4. Animação de entrada nos cards que aparecem.
══════════════════════════════════════════════════════ */

document.addEventListener('DOMContentLoaded', () => {

  // ── Referências ────────────────────────────────────
  const tabs   = document.querySelectorAll('.filtro-tab');
  const cards  = document.querySelectorAll('.curso-card');
  const info   = document.querySelector('.cursos-lista__info');

  // ── Lê o filtro da URL (vindo do index.html) ───────
  // Exemplo: cursos.html?filtro=presencial
  const params      = new URLSearchParams(window.location.search);
  const filtroInicial = params.get('filtro') || 'todos'; // padrão: todos

  // ── Função principal de filtragem ─────────────────
  function aplicarFiltro(filtro) {
    let visiveis = 0;

    cards.forEach(card => {
      // Cada card tem data-modalidade="presencial" ou "ead"
      const modalidade = card.dataset.modalidade;

      // Determina se o card deve aparecer
      const mostrar = filtro === 'todos' || modalidade === filtro;

      if (mostrar) {
        card.classList.remove('oculto');

        // Animação de entrada: remove e readiciona a classe
        card.classList.remove('entrando');
        // Força reflow para reiniciar a animação
        void card.offsetWidth;
        card.classList.add('entrando');

        visiveis++;
      } else {
        card.classList.add('oculto');
        card.classList.remove('entrando');
      }
    });

    // Atualiza o texto de contagem
    if (info) {
      const label = filtro === 'todos'
        ? `${visiveis} cursos disponíveis`
        : filtro === 'presencial'
          ? `${visiveis} cursos presenciais`
          : `${visiveis} cursos EaD`;

      info.textContent = label;
    }
  }

  // ── Vincula clique a cada aba ──────────────────────
  tabs.forEach(tab => {
    tab.addEventListener('click', () => {
      // Remove ativo de todas as abas
      tabs.forEach(t => t.classList.remove('ativo'));

      // Ativa a aba clicada
      tab.classList.add('ativo');

      // Filtra
      aplicarFiltro(tab.dataset.filtro);
    });
  });

  // ── Ativa o filtro inicial (da URL ou padrão) ─────
  // Encontra a aba correspondente
  const tabInicial = document.querySelector(
    `.filtro-tab[data-filtro="${filtroInicial}"]`
  );

  if (tabInicial) {
    // Simula clique para ativar visualmente e filtrar
    tabInicial.click();
  } else {
    // Fallback: ativa "Todos"
    document.querySelector('.filtro-tab[data-filtro="todos"]')?.click();
  }

});
