
(function () {
  const search = document.querySelector('[data-snippet-search]');
  const category = document.querySelector('[data-category-filter]');
  const cards = Array.from(document.querySelectorAll('[data-snippet-card]'));
  const count = document.querySelector('[data-result-count]');
  if (!search || !cards.length) return;

  function filterCards() {
    const query = search.value.trim().toLowerCase();
    const selected = category ? category.value : 'all';
    let visible = 0;

    cards.forEach((card) => {
      const haystack = card.dataset.search || '';
      const cardCategory = card.dataset.category || '';
      const matchesText = !query || haystack.includes(query);
      const matchesCategory = selected === 'all' || cardCategory === selected;
      const show = matchesText && matchesCategory;
      card.hidden = !show;
      if (show) visible += 1;
    });

    if (count) count.textContent = visible + (visible === 1 ? ' snippet' : ' snippets');
  }

  search.addEventListener('input', filterCards);
  if (category) category.addEventListener('change', filterCards);
  filterCards();
})();
