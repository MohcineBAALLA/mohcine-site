/**
 * Master Client-Side Controller for Mohcine Baalla Portfolio
 * Features: Dark/Light Mode, Interactive SIoT Graph Canvas,
 * Dynamic Filters, Search, BibTeX Modal, Toasts, Responsive Drawer
 */

document.addEventListener('DOMContentLoaded', () => {
  initTheme();
  initMobileNav();
  initScrollTop();
  initSiotCanvas();
  
  // Page-specific initializers
  if (document.getElementById('metricsContainer')) {
    renderHomeMetrics();
  }
  if (document.getElementById('newsTimelineContainer')) {
    renderHomeNews();
  }
  if (document.getElementById('pubListContainer')) {
    initPublicationsFilter();
  }
  if (document.getElementById('projectsContainer')) {
    initProjectsFilter();
  }
  if (document.getElementById('parcoursContainer')) {
    initJourneyFilter();
  }
  if (document.getElementById('contactForm')) {
    initContactForm();
  }
});

/* --------------------------------------------------------------------------
   1. THEME SWITCHER (DARK / LIGHT MODE)
   -------------------------------------------------------------------------- */
function initTheme() {
  const themeToggleBtn = document.getElementById('themeToggleBtn');
  const savedTheme = localStorage.getItem('site_theme');
  const prefersDark = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;
  
  const currentTheme = savedTheme || (prefersDark ? 'dark' : 'light');
  document.documentElement.setAttribute('data-theme', currentTheme);
  updateThemeIcon(currentTheme);

  if (themeToggleBtn) {
    themeToggleBtn.addEventListener('click', () => {
      const activeTheme = document.documentElement.getAttribute('data-theme');
      const nextTheme = activeTheme === 'dark' ? 'light' : 'dark';
      document.documentElement.setAttribute('data-theme', nextTheme);
      localStorage.setItem('site_theme', nextTheme);
      updateThemeIcon(nextTheme);
      showToast(`Switched to ${nextTheme === 'dark' ? 'Dark' : 'Light'} Mode`, 'info');
    });
  }
}

function updateThemeIcon(theme) {
  const themeToggleBtn = document.getElementById('themeToggleBtn');
  if (!themeToggleBtn) return;
  themeToggleBtn.innerHTML = theme === 'dark'
    ? '<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="5"></circle><line x1="12" y1="1" x2="12" y2="3"></line><line x1="12" y1="21" x2="12" y2="23"></line><line x1="4.22" y1="4.22" x2="5.64" y2="5.64"></line><line x1="18.36" y1="18.36" x2="19.78" y2="19.78"></line><line x1="1" y1="12" x2="3" y2="12"></line><line x1="21" y1="12" x2="23" y2="12"></line><line x1="4.22" y1="19.78" x2="5.64" y2="18.36"></line><line x1="18.36" y1="5.64" x2="19.78" y2="4.22"></line></svg>'
    : '<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path></svg>';
}

/* --------------------------------------------------------------------------
   2. MOBILE NAVIGATION DRAWER
   -------------------------------------------------------------------------- */
function initMobileNav() {
  const hamburgerBtn = document.getElementById('hamburgerBtn');
  const mobileDrawer = document.getElementById('mobileDrawer');
  
  if (!hamburgerBtn || !mobileDrawer) return;

  hamburgerBtn.addEventListener('click', (e) => {
    e.stopPropagation();
    mobileDrawer.classList.toggle('open');
  });

  document.addEventListener('click', (e) => {
    if (!mobileDrawer.contains(e.target) && !hamburgerBtn.contains(e.target)) {
      mobileDrawer.classList.remove('open');
    }
  });
}

/* --------------------------------------------------------------------------
   3. SCROLL-TO-TOP BUTTON
   -------------------------------------------------------------------------- */
function initScrollTop() {
  const btn = document.getElementById('scrollTopBtn');
  if (!btn) return;

  window.addEventListener('scroll', () => {
    if (window.scrollY > 350) {
      btn.classList.add('visible');
    } else {
      btn.classList.remove('visible');
    }
  });

  btn.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });
}

/* --------------------------------------------------------------------------
   4. INTERACTIVE SIoT NETWORK GRAPH CANVAS
   -------------------------------------------------------------------------- */
function initSiotCanvas() {
  const canvas = document.getElementById('siotCanvas');
  if (!canvas) return;

  const ctx = canvas.getContext('2d');
  let width, height;
  let nodes = [];
  const nodeCount = 45;
  const maxDistance = 140;
  let mouse = { x: null, y: null };

  function resize() {
    width = canvas.width = canvas.offsetWidth;
    height = canvas.height = canvas.offsetHeight;
  }

  resize();
  window.addEventListener('resize', resize);

  window.addEventListener('mousemove', (e) => {
    const rect = canvas.getBoundingClientRect();
    mouse.x = e.clientX - rect.left;
    mouse.y = e.clientY - rect.top;
  });

  window.addEventListener('mouseleave', () => {
    mouse.x = null;
    mouse.y = null;
  });

  class Node {
    constructor() {
      this.x = Math.random() * width;
      this.y = Math.random() * height;
      this.vx = (Math.random() - 0.5) * 0.7;
      this.vy = (Math.random() - 0.5) * 0.7;
      this.radius = Math.random() * 2.5 + 1.5;
      this.isTrustHub = Math.random() > 0.85;
      this.color = this.isTrustHub ? '#f59e0b' : '#38bdf8';
    }

    update() {
      this.x += this.vx;
      this.y += this.vy;

      if (this.x < 0 || this.x > width) this.vx *= -1;
      if (this.y < 0 || this.y > height) this.vy *= -1;

      if (mouse.x !== null && mouse.y !== null) {
        const dx = mouse.x - this.x;
        const dy = mouse.y - this.y;
        const dist = Math.sqrt(dx * dx + dy * dy);
        if (dist < 120) {
          this.x -= (dx / dist) * 0.8;
          this.y -= (dy / dist) * 0.8;
        }
      }
    }

    draw() {
      ctx.beginPath();
      ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
      ctx.fillStyle = this.color;
      ctx.fill();

      if (this.isTrustHub) {
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.radius * 2.2, 0, Math.PI * 2);
        ctx.strokeStyle = 'rgba(245, 158, 11, 0.25)';
        ctx.lineWidth = 1;
        ctx.stroke();
      }
    }
  }

  for (let i = 0; i < nodeCount; i++) {
    nodes.push(new Node());
  }

  function animate() {
    ctx.clearRect(0, 0, width, height);

    for (let i = 0; i < nodes.length; i++) {
      for (let j = i + 1; j < nodes.length; j++) {
        const dx = nodes[i].x - nodes[j].x;
        const dy = nodes[i].y - nodes[j].y;
        const dist = Math.sqrt(dx * dx + dy * dy);

        if (dist < maxDistance) {
          const alpha = 1 - dist / maxDistance;
          ctx.beginPath();
          ctx.moveTo(nodes[i].x, nodes[i].y);
          ctx.lineTo(nodes[j].x, nodes[j].y);
          ctx.strokeStyle = `rgba(56, 189, 248, ${alpha * 0.22})`;
          ctx.lineWidth = 0.8;
          ctx.stroke();
        }
      }
    }

    nodes.forEach(node => {
      node.update();
      node.draw();
    });

    requestAnimationFrame(animate);
  }

  animate();
}

/* --------------------------------------------------------------------------
   5. HOME PAGE: METRICS & RECENT NEWS RENDERING
   -------------------------------------------------------------------------- */
function renderHomeMetrics() {
  const container = document.getElementById('metricsContainer');
  if (!container || !window.METRICS_DATA) return;

  container.innerHTML = window.METRICS_DATA.map(m => `
    <div class="metric-card">
      <div>
        <div class="metric-val-row">
          <span class="metric-number">${m.count}</span>
          <span class="metric-suffix">${m.suffix}</span>
        </div>
        <h3 class="metric-title">${m.label}</h3>
        <p class="metric-desc">${m.detail}</p>
      </div>
      <div style="margin-top: 14px;">
        <span class="badge ${m.badgeClass}">${m.label}</span>
      </div>
    </div>
  `).join('');
}

function renderHomeNews() {
  const container = document.getElementById('newsTimelineContainer');
  if (!container || !window.NEWS_DATA) return;

  container.innerHTML = window.NEWS_DATA.map(news => `
    <div class="timeline-item">
      <div class="timeline-node"></div>
      <div class="timeline-content">
        <div class="timeline-header">
          <span class="badge ${news.badgeClass}">${news.badge}</span>
          <span class="timeline-date">${news.date}</span>
        </div>
        <h3 class="timeline-title">${news.title}</h3>
        <p class="timeline-desc">${news.description}</p>
        <a href="${news.url}" class="timeline-link">
          ${news.linkText}
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
        </a>
      </div>
    </div>
  `).join('');
}

/* --------------------------------------------------------------------------
   6. PUBLICATIONS PAGE (FILTERING & SEARCH ACROSS PRE-RENDERED CARDS)
   -------------------------------------------------------------------------- */
function initPublicationsFilter() {
  const searchInput = document.getElementById('pubSearchInput');
  const filterTabs = document.querySelectorAll('.filter-tab');
  const cards = document.querySelectorAll('.pub-card');

  let activeCategory = 'all';
  let searchTerm = '';

  function applyFilter() {
    let visibleCount = 0;
    cards.forEach(card => {
      const cardCategory = card.getAttribute('data-category');
      const cardText = card.textContent.toLowerCase();
      
      const matchesCategory = activeCategory === 'all' || cardCategory === activeCategory;
      const matchesSearch = !searchTerm || cardText.includes(searchTerm.toLowerCase());

      if (matchesCategory && matchesSearch) {
        card.style.display = 'block';
        visibleCount++;
      } else {
        card.style.display = 'none';
      }
    });

    let noResultsEl = document.getElementById('pubNoResults');
    if (visibleCount === 0) {
      if (!noResultsEl) {
        noResultsEl = document.createElement('div');
        noResultsEl.id = 'pubNoResults';
        noResultsEl.style.cssText = 'text-align: center; padding: 50px 20px; background: var(--bg-card); border-radius: var(--radius-lg); border: 1px dashed var(--border-subtle);';
        noResultsEl.innerHTML = '<h3 style="margin-bottom: 8px;">No matching published papers found</h3><p class="text-muted">Try clearing the search query or selecting a different category.</p>';
        document.getElementById('pubListContainer').appendChild(noResultsEl);
      }
      noResultsEl.style.display = 'block';
    } else if (noResultsEl) {
      noResultsEl.style.display = 'none';
    }
  }

  filterTabs.forEach(tab => {
    tab.addEventListener('click', () => {
      filterTabs.forEach(t => t.classList.remove('active'));
      tab.classList.add('active');
      activeCategory = tab.getAttribute('data-category');
      applyFilter();
    });
  });

  if (searchInput) {
    searchInput.addEventListener('input', (e) => {
      searchTerm = e.target.value.trim();
      applyFilter();
    });
  }
}

window.toggleAbstract = function(id) {
  const drawer = document.getElementById(`abstract-${id}`);
  const btnText = document.getElementById(`abstract-btn-text-${id}`);
  if (!drawer) return;

  drawer.classList.toggle('open');
  if (btnText) {
    btnText.textContent = drawer.classList.contains('open') ? 'Hide Details' : 'Abstract & Contributions';
  }
};

window.copyBibtex = function(id) {
  const pub = window.PUBLICATIONS_DATA ? window.PUBLICATIONS_DATA.find(p => p.id === id) : null;
  let bibtexStr = pub ? pub.bibtex : '';

  if (!bibtexStr) {
    const codeEl = document.getElementById(`bibtex-raw-${id}`);
    if (codeEl) bibtexStr = codeEl.textContent;
  }

  if (!bibtexStr) return;

  navigator.clipboard.writeText(bibtexStr).then(() => {
    showToast('BibTeX citation copied to clipboard!', 'success');
  }).catch(() => {
    showToast('Failed to copy BibTeX to clipboard', 'error');
  });
};

window.openBibtexModal = function(id) {
  const pub = window.PUBLICATIONS_DATA ? window.PUBLICATIONS_DATA.find(p => p.id === id) : null;
  let bibtexStr = pub ? pub.bibtex : '';

  if (!bibtexStr) {
    const codeEl = document.getElementById(`bibtex-raw-${id}`);
    if (codeEl) bibtexStr = codeEl.textContent;
  }

  const modal = document.getElementById('bibtexModal');
  const codeBlock = document.getElementById('bibtexModalCode');
  const copyBtn = document.getElementById('modalCopyBibtexBtn');

  if (!modal || !codeBlock) return;

  codeBlock.textContent = bibtexStr;
  modal.classList.add('open');

  if (copyBtn) {
    copyBtn.onclick = () => {
      navigator.clipboard.writeText(bibtexStr).then(() => {
        showToast('BibTeX citation copied to clipboard!', 'success');
      });
    };
  }
};

window.closeBibtexModal = function() {
  const modal = document.getElementById('bibtexModal');
  if (modal) modal.classList.remove('open');
};

/* --------------------------------------------------------------------------
   7. PROJECTS PAGE FILTER
   -------------------------------------------------------------------------- */
function initProjectsFilter() {
  const filterTabs = document.querySelectorAll('.project-filter-tab');
  const cards = document.querySelectorAll('.project-card');

  filterTabs.forEach(tab => {
    tab.addEventListener('click', () => {
      filterTabs.forEach(t => t.classList.remove('active'));
      tab.classList.add('active');
      const cat = tab.getAttribute('data-category');

      cards.forEach(card => {
        if (cat === 'all' || card.getAttribute('data-category') === cat) {
          card.style.display = 'flex';
        } else {
          card.style.display = 'none';
        }
      });
    });
  });
}

/* --------------------------------------------------------------------------
   8. JOURNEY / PARCOURS PAGE FILTER
   -------------------------------------------------------------------------- */
function initJourneyFilter() {
  const filterTabs = document.querySelectorAll('.journey-filter-tab');
  const cards = document.querySelectorAll('.journey-card');

  filterTabs.forEach(tab => {
    tab.addEventListener('click', () => {
      filterTabs.forEach(t => t.classList.remove('active'));
      tab.classList.add('active');
      const cat = tab.getAttribute('data-category');

      cards.forEach(card => {
        if (cat === 'all' || card.getAttribute('data-category') === cat) {
          card.style.display = 'flex';
        } else {
          card.style.display = 'none';
        }
      });
    });
  });
}

/* --------------------------------------------------------------------------
   9. CONTACT FORM HANDLER
   -------------------------------------------------------------------------- */
function initContactForm() {
  const form = document.getElementById('contactForm');
  if (!form) return;

  form.addEventListener('submit', (e) => {
    e.preventDefault();
    const name = document.getElementById('contactName').value.trim();
    const email = document.getElementById('contactEmail').value.trim();
    const subject = document.getElementById('contactSubject').value;
    const message = document.getElementById('contactMessage').value.trim();

    if (!name || !email || !message) {
      showToast('Please fill in all required fields.', 'error');
      return;
    }

    const mailtoUrl = `mailto:mohcine_baalla@um5.ac.ma?subject=[${encodeURIComponent(subject)}] Inquiry from ${encodeURIComponent(name)}&body=${encodeURIComponent(message)}%0A%0AFrom: ${encodeURIComponent(name)} (${encodeURIComponent(email)})`;
    window.location.href = mailtoUrl;

    showToast('Opening your email client to send message to mohcine_baalla@um5.ac.ma!', 'success');
    form.reset();
  });
}

/* --------------------------------------------------------------------------
   9. TOAST NOTIFICATION UTILITY
   -------------------------------------------------------------------------- */
function showToast(message, type = 'info') {
  let container = document.querySelector('.toast-container');
  if (!container) {
    container = document.createElement('div');
    container.className = 'toast-container';
    document.body.appendChild(container);
  }

  const toast = document.createElement('div');
  toast.className = `toast toast-${type}`;
  
  let icon = '<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"/><line x1="12" y1="16" x2="12" y2="12"/><line x1="12" y1="8" x2="12.01" y2="8"/></svg>';
  if (type === 'success') {
    icon = '<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#10b981" stroke-width="2.5"><polyline points="20 6 9 17 4 12"/></svg>';
  } else if (type === 'error') {
    icon = '<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#ef4444" stroke-width="2.5"><circle cx="12" cy="12" r="10"/><line x1="15" y1="9" x2="9" y2="15"/><line x1="9" y1="9" x2="15" y2="15"/></svg>';
  }

  toast.innerHTML = `${icon} <span>${message}</span>`;
  container.appendChild(toast);

  setTimeout(() => {
    toast.classList.add('fade-out');
    setTimeout(() => {
      toast.remove();
    }, 300);
  }, 3500);
}
