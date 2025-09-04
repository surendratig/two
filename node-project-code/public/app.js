async function fetchProducts(params = {}) {
  const url = new URL(window.location.origin + '/api/products');
  Object.entries(params).forEach(([k, v]) => {
    if (v) url.searchParams.set(k, v);
  });
  const res = await fetch(url.toString());
  if (!res.ok) throw new Error('Failed to fetch products');
  return res.json();
}

function rupee(n) {
  if (n === 0) return 'FREE';
  return new Intl.NumberFormat('en-IN', { style: 'currency', currency: 'INR'}).format(n);
}

function el(html) {
  const template = document.createElement('template');
  template.innerHTML = html.trim();
  return template.content.firstChild;
}

function renderGrid(items) {
  const grid = document.getElementById('grid');
  grid.innerHTML = '';
  if (!items.length) {
    grid.append(el(`<div>No results.</div>`));
    return;
  }
  items.forEach(p => {
    grid.append(el(`
      <article class="card">
        <img src="${p.image}" alt="${p.name}" onerror="this.src='https://via.placeholder.com/400x300?text=No+Image'">
        <h3>${p.name}</h3>
        <p>${p.description}</p>
        <div class="price">${rupee(p.price)}</div>
      </article>
    `));
  });
}

async function run() {
  const search = document.getElementById('search');
  const category = document.getElementById('category');
  const go = document.getElementById('go');

  async function refresh() {
    const products = await fetchProducts({ q: search.value, category: category.value });
    renderGrid(products);
  }

  go.addEventListener('click', refresh);
  search.addEventListener('keydown', (e) => { if (e.key === 'Enter') refresh(); });

  await refresh();
}

run().catch(err => {
  console.error(err);
  const grid = document.getElementById('grid');
  grid.textContent = 'Something went wrong. See console.';
});

