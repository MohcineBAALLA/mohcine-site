# Mohcine BAALLA - Official Personal & Academic Website

This repository contains the complete source code for **[mohcine.site](https://mohcine.site)**, the personal academic portfolio and professional website of **Mohcine BAALLA** (PhD Researcher in Cybersecurity & Social IoT Trust at ENSIAS, Mohammed V University in Rabat).

---

## 📁 Repository Structure

```
├── index.html            # Homepage (Hero, ENSIAS Identity, Quick Bio, Highlights)
├── parcours.html         # Academic & Professional Journey, Competitions, Community
├── competences.html      # Technical Skills, Cybersecurity & AI Competencies
├── research.html         # Research Axes, Methodologies, Trust Framework
├── publications.html     # Peer-Reviewed Published Papers & DOI links
├── projects.html         # Key Projects & Applied Platforms
├── cv.html               # Clean, Web-Based Interactive Curriculum Vitae
├── contact.html          # Contact Information & Direct Channels
├── CNAME                 # Custom domain configuration for mohcine.site
├── assets/
│   ├── css/
│   │   └── style.css     # Unified ENSIAS Dark-Themed Styling & Responsiveness
│   ├── js/
│   │   ├── data.js       # Centralized Content & Profile Data
│   │   └── main.js       # Dynamic Interactions, Navigation, Filters
│   └── images/
│       ├── mohcine_baalla.jpg           # Profile Photo
│       └── siot_trust_architecture.jpg  # SIoT Framework Diagram
└── README.md             # Deployment instructions
```

---

## 🚀 How to Deploy to GitHub & GitHub Pages

### 1. Initialize Git in this folder
Open PowerShell or your terminal inside this `github_deploy` folder:

```bash
git init
git add .
git commit -m "Initial commit - Mohcine BAALLA portfolio website"
```

### 2. Connect to your GitHub repository
Create a new public repository on GitHub (e.g. `mohcine-baalla.github.io` or `personal-website`), then run:

```bash
git branch -M main
git remote add origin https://github.com/<YOUR-GITHUB-USERNAME>/<YOUR-REPO-NAME>.git
git push -u origin main
```

### 3. Enable GitHub Pages & Custom Domain
1. On your GitHub repo page, navigate to **Settings** > **Pages**.
2. Under **Build and deployment** > **Source**, choose **Deploy from a branch**.
3. Select branch `main` and folder `/(root)`, then click **Save**.
4. In the **Custom domain** box, verify `mohcine.site` is listed (populated automatically by the `CNAME` file).
5. Check **Enforce HTTPS**.

### 4. DNS Configuration for `mohcine.site`
At your domain registrar (where you purchased `mohcine.site`), configure your DNS records:
- **A Records** (for apex domain `mohcine.site`):
  - `185.199.108.153`
  - `185.199.109.153`
  - `185.199.110.153`
  - `185.199.111.153`
- **CNAME Record** (for `www.mohcine.site`):
  - Host: `www`
  - Value: `<YOUR-GITHUB-USERNAME>.github.io`

---

## 👤 Author
- **Mohcine BAALLA**
- PhD Researcher | Cybersecurity & AI Specialist
- ENSIAS, Mohammed V University in Rabat, Morocco
- Website: [https://mohcine.site](https://mohcine.site)
- LinkedIn: [linkedin.com/in/mohcine-baalla](https://www.linkedin.com/in/mohcine-baalla/)
