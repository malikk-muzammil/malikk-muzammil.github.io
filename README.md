# Malik Muhammad Muzammil — Portfolio

A static personal portfolio website built with **HTML5, CSS3 and vanilla JavaScript**.
No frameworks, no build step, no backend.

## Folder structure

```
portfolio/
├── index.html
├── css/
│   └── style.css
├── js/
│   └── script.js
├── assets/
│   ├── images/
│   │   ├── profile/
│   │   ├── projects/
│   │   └── certificates/
│   ├── icons/
│   └── resume/
│       └── Malik-Muhammad-Muzammil-CV.pdf   (add this file yourself)
└── README.md
```

## Run it locally (Windows + VS Code)

1. Copy the `portfolio` folder anywhere on your PC (e.g. `C:\Users\You\Documents\portfolio`).
2. Open VS Code → **File → Open Folder…** → select the `portfolio` folder.
3. Easiest way to view it: right-click `index.html` in the Explorer → **Reveal in File Explorer** → double-click it.
4. Better way: install the **Live Server** extension in VS Code, then right-click `index.html` → **Open with Live Server**. The site reloads automatically when you save.

## How to update your information

Everything personal lives in **one place**: the top of `js/script.js`.

- `CONFIG` — name, email, GitHub, LinkedIn, CV path
- `SKILLS` — skill categories and badges
- `JOURNEY` — learning timeline (`status` can be `done`, `now`, `next`)
- `PROJECTS` — project cards
- `LEARNING_TOPICS` — Currently Learning badges

Colors, fonts and spacing live in the `:root` block at the top of `css/style.css`.
Change `--accent` to restyle the whole site.

## Add your CV

Put the PDF at:

```
assets/resume/Malik-Muhammad-Muzammil-CV.pdf
```

The **Download CV** button already points there. To use a different filename, update `CONFIG.cv`.

## Add project GitHub links

In `js/script.js`, fill in the empty strings:

```js
github: "https://github.com/malikk-muzammil/your-repo",
demo: "",
```

Buttons with an empty value are hidden automatically.

## Add a profile image later

1. Save the image as `assets/images/profile/profile.jpg`.
2. In `index.html`, inside the hero section, add:

```html
<img src="assets/images/profile/profile.jpg" alt="Malik Muhammad Muzammil" class="hero__photo" />
```

3. Style `.hero__photo` in `css/style.css` (e.g. `border-radius: 50%; width: 180px;`).

## Add project screenshots

Save them in `assets/images/projects/` and add an `<img>` inside the project card markup in `renderProjects()`.

## Add the certificate

Save the scan in `assets/images/certificates/` and link it from the Achievement section in `index.html`.

## Deploy to GitHub Pages

1. Create a new repository on GitHub (e.g. `portfolio`).
2. Upload all files (keep the folder structure) or push with Git:

```bash
git init
git add .
git commit -m "Portfolio website"
git branch -M main
git remote add origin https://github.com/malikk-muzammil/portfolio.git
git push -u origin main
```

3. On GitHub: **Settings → Pages → Source: Deploy from a branch → Branch: `main` / `root` → Save**.
4. Your site goes live at `https://malikk-muzammil.github.io/portfolio/`.

It also deploys as-is on Netlify, Vercel and Cloudflare Pages — just drag the folder in.
