# Julia Luersen C. Souza — Portfolio

🇺🇸 **English** · 🇧🇷 [Português](README.pt-BR.md)

Personal portfolio website of Julia Luersen Chaves Souza, featuring her science projects, sports, volunteering, hobbies and certificates.

🌐 **[julialuersen.com](https://julialuersen.com)**

Built with plain HTML, CSS and JavaScript, with no framework and no build step. It is hosted on Apache, with friendly URLs defined in `.htaccess`.

## Structure

```
.
├── index.html                  # Home ("Me")
├── .htaccess                   # Friendly URLs and 301 redirects
├── css/style.css               # Single stylesheet for the whole site
├── js/
│   ├── modal.js                # Click-to-enlarge photos (galleries, cards, certificates)
│   └── navigation.js           # Menu dropdowns (hover on desktop, tap on mobile)
├── pages/                      # Projects
│   ├── projeto1.html           # HydroGen Power
│   ├── projeto2.html           # Snake Robotics Team
│   └── projeto3.html           # Bean Germination
├── sports/
│   ├── sports-tenis.html       # Tennis & Beach Tennis
│   └── sports-dance.html       # Jazz Dance & Ballet
├── volunteering/
│   └── church-youth.html       # Church Youth
├── hobbies/
│   ├── hobbies1.html           # Music
│   └── hobbies2.html           # Dirt Bike Rider
├── certificates/
│   └── certificates.html       # Certificates
├── assets/                     # Images, grouped by page
└── _rascunhos/                 # Drafts (not linked in the menu)
```

`sports/sports-tenis2.html` and `_rascunhos/` are old versions/drafts and have no route.

## Routes

| URL | File |
|---|---|
| [`/`](https://julialuersen.com) | `index.html` |
| `/HydroGen` | `pages/projeto1.html` |
| `/SnakeTeam` | `pages/projeto2.html` |
| `/BeansGermination` | `pages/projeto3.html` |
| `/Tenis&Beach` | `sports/sports-tenis.html` |
| `/Dances` | `sports/sports-dance.html` |
| `/Church` | `volunteering/church-youth.html` |
| `/Music` | `hobbies/hobbies1.html` |
| `/DirtBikeRider` | `hobbies/hobbies2.html` |
| `/Certificates` | `certificates/certificates.html` |

Old URLs (`/projeto1`, `/pages/projeto1.html`, etc.) redirect to the new ones with a 301.

## Running locally

The menu's friendly URLs require Apache with `mod_rewrite` and `AllowOverride All`. The folder must be the site root, because links use absolute paths (`/HydroGen`). With XAMPP, for example, just put the folder in `htdocs` as the VirtualHost root.

Without Apache, any static server can open the pages by file path, but the menu links won't work:

```bash
python -m http.server 8000
# http://localhost:8000/sports/sports-tenis.html
```

## Notes

- **CSS cache:** each page loads `css/style.css?v=N`. When you change the CSS, bump `v` on the affected pages so browsers don't keep the old version.
- **Layout:** `.container` > `.main-wrapper` > `.content-wrapper`. On desktop the `.content-wrapper` is the scrolling element (fixed navbar and footer). Below 900px the page scrolls normally and the footer is no longer fixed.
- **Decorative circles:** `.circle-top-right` and `.circle-bottom-left` live inside `.content-wrapper` and scroll with the content.
- **Enlargeable photos:** any image inside `.gallery-item`, `.photo-card` or `.certificate-frame` opens in the modal (`#photoModal`) automatically.
- **Tennis page:** shows cut-out photos of Julia coming out of the circles (`assets/sports/beach-tennis-*.webp`, WebP with a transparent background). The left one sits at the top of the page and the right one sits next to the second gallery (`.cutout-anchor`). The legs are cut with CSS `mask-image`. They are hidden on tablet/mobile (≤ 900px).

## Author

Developed by Pedro Thomas.
