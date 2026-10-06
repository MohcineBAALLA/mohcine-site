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
  
  // Page-specific initializers based on current DOM elements
  if (document.getElementById('metricsContainer')) {
    renderHomeMetrics();
  }
  if (document.getElementById('newsTimelineContainer')) {
    renderHomeNews();
  }
  if (document.getElementById('pubListContainer')) {
    initPublicationsPage();
  }
  if (document.getElementById('projectsContainer')) {
    initProjectsPage();
  }
  if (document.getElementById('skillsContainer')) {
    initSkillsPage();
  }
  if (document.getElementById('parcoursContainer')) {
    renderParcoursPage();
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

      // Mouse subtle interaction
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

    // Draw relational links (representing SIoT trust edges)
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
   6. PUBLICATIONS PAGE (FILTER, SEARCH, BIBTEX, TOASTS)
   -------------------------------------------------------------------------- */
function initPublicationsPage() {
  const container = document.getElementById('pubListContainer');
  const searchInput = document.getElementById('pubSearchInput');
  const filterTabs = document.querySelectorAll('.filter-tab');

  let activeCategory = 'all';
  let searchTerm = '';

  function render() {
    if (!container || !window.PUBLICATIONS_DATA) return;

    const filtered = window.PUBLICATIONS_DATA.filter(pub => {
      const matchesCat = activeCategory === 'all' || pub.category === activeCategory;
      const q = searchTerm.toLowerCase().trim();
      const matchesSearch = !q || (
        pub.title.toLowerCase().includes(q) ||
        pub.authors.join(' ').toLowerCase().includes(q) ||
        pub.venue.toLowerCase().includes(q) ||
        pub.abstract.toLowerCase().includes(q) ||
        pub.keywords.join(' ').toLowerCase().includes(q)
      );
      return matchesCat && matchesSearch;
    });

    if (filtered.length === 0) {
      container.innerHTML = `
        <div style="text-align: center; padding: 60px 20px; background: var(--bg-card); border-radius: var(--radius-lg); border: 1px dashed var(--border-subtle);">
          <h3 style="margin-bottom: 8px;">No matching publications found</h3>
          <p class="text-muted">Try clearing the search query or selecting a different category filter.</p>
        </div>
      `;
      return;
    }

    container.innerHTML = filtered.map(pub => {
      const authorsHtml = pub.authors.map(a => 
        a.includes('Mohcine') || a.includes('Baalla') 
          ? `<span class="author-highlight">${a}</span>` 
          : a
      ).join(', ');

      const doiLink = pub.doiUrl && pub.doiUrl !== '#' 
        ? `<a href="${pub.doiUrl}" target="_blank" rel="noopener" class="btn-tag">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6M15 3h6v6M10 14L21 3"/></svg>
            DOI / Paper Link
          </a>`
        : '';

      const pdfLink = pub.id === 'baalla2026semantic' || pub.id === 'baalla2025zkp'
        ? `<a href="${window.RESEARCHER_INFO ? window.RESEARCHER_INFO.cvPath : 'CV_Mohcine_BAALLA.pdf'}" class="btn-tag" title="View in Dossier">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><polyline points="14 2 14 8 20 8"/><line x1="16" y1="13" x2="8" y2="13"/><line x1="16" y1="17" x2="8" y2="17"/></svg>
            PDF / Dossier
          </a>`
        : '';

      return `
        <article class="pub-card" id="${pub.id}">
          <div class="pub-meta-top">
            <span class="badge ${pub.statusClass}">${pub.statusBadge}</span>
            <span class="pub-year-badge">${pub.year}</span>
          </div>

          <h3 class="pub-title">${pub.title}</h3>
          <p class="pub-authors">${authorsHtml}</p>
          <p class="pub-venue"><strong>${pub.venue}</strong> • ${pub.venueDetails}</p>

          <!-- Collapsible Abstract Drawer -->
          <div class="pub-abstract-drawer" id="abstract-${pub.id}">
            <p class="pub-abstract-text"><strong>Abstract:</strong> ${pub.abstract}</p>
            <h4 class="pub-contributions-title">Key Methodological Contributions</h4>
            <ul class="pub-contributions-list">
              ${pub.contributions.map(c => `<li class="pub-contribution-item">${c}</li>`).join('')}
            </ul>
            <div style="margin-top: 12px; display: flex; flex-wrap: wrap; gap: 6px;">
              ${pub.keywords.map(kw => `<span class="badge-pill">#${kw}</span>`).join('')}
            </div>
          </div>

          <div class="pub-actions-row">
            <div class="pub-btn-group">
              <button class="btn-tag" onclick="toggleAbstract('${pub.id}')">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"/><line x1="12" y1="16" x2="12" y2="12"/><line x1="12" y1="8" x2="12.01" y2="8"/></svg>
                <span id="abstract-btn-text-${pub.id}">Abstract & Contributions</span>
              </button>
              ${doiLink}
              ${pdfLink}
            </div>

            <div class="pub-btn-group">
              <button class="btn-tag" onclick="copyBibtex('${pub.id}')" title="Copy citation to clipboard">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="9" y="9" width="13" height="13" rx="2" ry="2"/><path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"/></svg>
                Copy BibTeX
              </button>
              <button class="btn-tag" onclick="openBibtexModal('${pub.id}')" title="View raw citation modal">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="16 18 22 12 16 6"/><polyline points="8 6 2 12 8 18"/></svg>
                View BibTeX
              </button>
            </div>
          </div>
        </article>
      `;
    }).join('');
  }

  // Filter Tabs Event Listeners
  filterTabs.forEach(tab => {
    tab.addEventListener('click', () => {
      filterTabs.forEach(t => t.classList.remove('active'));
      tab.classList.add('active');
      activeCategory = tab.getAttribute('data-category');
      render();
    });
  });

  // Search Input Event Listener
  if (searchInput) {
    searchInput.addEventListener('input', (e) => {
      searchTerm = e.target.value;
      render();
    });
  }

  render();
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
  const pub = window.PUBLICATIONS_DATA.find(p => p.id === id);
  if (!pub) return;

  navigator.clipboard.writeText(pub.bibtex).then(() => {
    showToast('BibTeX citation copied to clipboard!', 'success');
  }).catch(() => {
    showToast('Failed to copy BibTeX to clipboard', 'error');
  });
};

window.openBibtexModal = function(id) {
  const pub = window.PUBLICATIONS_DATA.find(p => p.id === id);
  if (!pub) return;

  const modal = document.getElementById('bibtexModal');
  const codeBlock = document.getElementById('bibtexModalCode');
  const copyBtn = document.getElementById('modalCopyBibtexBtn');

  if (!modal || !codeBlock) return;

  codeBlock.textContent = pub.bibtex;
  modal.classList.add('open');

  if (copyBtn) {
    copyBtn.onclick = () => {
      navigator.clipboard.writeText(pub.bibtex).then(() => {
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
   7. PROJECTS & TESTBEDS PAGE
   -------------------------------------------------------------------------- */
function initProjectsPage() {
  const container = document.getElementById('projectsContainer');
  const filterTabs = document.querySelectorAll('.project-filter-tab');
  let activeCat = 'all';

  function render() {
    if (!container || !window.PROJECTS_DATA) return;

    const filtered = window.PROJECTS_DATA.filter(proj => {
      return activeCat === 'all' || proj.category === activeCat;
    });

    container.innerHTML = filtered.map(proj => `
      <div class="project-card">
        <div class="project-category-row">
          <span class="badge ${proj.category === 'testbed' ? 'badge-sapphire' : proj.category === 'ml' ? 'badge-emerald' : 'badge-cyan'}">
            ${proj.categoryLabel}
          </span>
          ${proj.featured ? '<span class="badge badge-amber">Doctoral Core</span>' : ''}
        </div>
        <h3 class="project-title">${proj.title}</h3>
        <p class="project-subtitle">${proj.subtitle}</p>
        <p class="project-desc">${proj.description}</p>
        ${proj.metrics ? `<div class="project-metrics-box">${proj.metrics}</div>` : ''}
        <div class="tech-tags-wrap">
          ${proj.stack.map(s => `<span class="tech-pill">${s}</span>`).join('')}
        </div>
      </div>
    `).join('');
  }

  filterTabs.forEach(tab => {
    tab.addEventListener('click', () => {
      filterTabs.forEach(t => t.classList.remove('active'));
      tab.classList.add('active');
      activeCat = tab.getAttribute('data-category');
      render();
    });
  });

  render();
}

/* --------------------------------------------------------------------------
   8. SKILLS & COMPETENCES PAGE
   -------------------------------------------------------------------------- */
function initSkillsPage() {
  const container = document.getElementById('skillsContainer');
  if (!container || !window.SKILLS_DATA) return;

  const categories = [
    { key: 'programming', title: 'Programming & System Scripting', icon: 'code' },
    { key: 'aiGraph', title: 'Machine Learning & Graph AI (PyG)', icon: 'cpu' },
    { key: 'simulation', title: 'Network & IoT Simulation Testbeds', icon: 'activity' },
    { key: 'securityCrypto', title: 'Cybersecurity, Cryptography & TMS', icon: 'shield' },
    { key: 'systemsDevops', title: 'Operating Systems, DevOps & Containers', icon: 'server' },
    { key: 'languages', title: 'Human Languages & Communication', icon: 'globe' }
  ];

  container.innerHTML = categories.map(cat => {
    const list = window.SKILLS_DATA[cat.key] || [];
    return `
      <div class="skill-category-card">
        <div class="skill-category-header">
          <h3 class="skill-category-title">${cat.title}</h3>
        </div>
        <div class="skills-list">
          ${list.map(skill => `
            <div class="skill-item">
              <div class="skill-header-row">
                <span class="skill-name">${skill.name}</span>
                <span class="skill-tag-pill">${skill.tag}</span>
              </div>
              <div class="skill-bar-outer">
                <div class="skill-bar-inner" style="width: ${skill.level}%;"></div>
              </div>
            </div>
          `).join('')}
        </div>
      </div>
    `;
  }).join('');
}

/* --------------------------------------------------------------------------
   9. PARCOURS PAGE
   -------------------------------------------------------------------------- */
function renderParcoursPage() {
  const container = document.getElementById('parcoursContainer');
  if (!container || !window.PARCOURS_MILESTONES) return;

  container.innerHTML = window.PARCOURS_MILESTONES.map(item => `
    <div class="timeline-item">
      <div class="timeline-node"></div>
      <div class="timeline-content">
        <div class="timeline-header">
          <span class="badge ${item.badgeClass}">${item.badge}</span>
          <span class="timeline-date">${item.year}</span>
        </div>
        <h3 class="timeline-title">${item.title}</h3>
        <p style="font-weight: 600; color: var(--ensias-azure-400); margin-bottom: 8px; font-size: 0.92rem;">
          ${item.institution}
        </p>
        <p class="timeline-desc">${item.description}</p>
      </div>
    </div>
  `).join('');
}

/* --------------------------------------------------------------------------
   10. CONTACT FORM HANDLER
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

    // Direct mailto trigger fallback
    const mailtoUrl = `mailto:mohcine_baalla@um5.ac.ma?subject=[${encodeURIComponent(subject)}] Inquiry from ${encodeURIComponent(name)}&body=${encodeURIComponent(message)}%0A%0AFrom: ${encodeURIComponent(name)} (${encodeURIComponent(email)})`;
    window.location.href = mailtoUrl;

    showToast('Opening your email client to dispatch message to mohcine_baalla@um5.ac.ma!', 'success');
    form.reset();
  });
}

/* --------------------------------------------------------------------------
   11. TOAST NOTIFICATION UTILITY
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
