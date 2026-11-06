# Julia Luersen C. Souza — Portfólio

🇺🇸 [English](README.md) · 🇧🇷 **Português**

Site pessoal de portfólio da Julia Luersen Chaves Souza, com projetos científicos, esportes, voluntariado, hobbies e certificados. O conteúdo das páginas é em inglês.

🌐 **[julialuersen.com](https://julialuersen.com)**

Feito com HTML, CSS e JavaScript puro, sem framework e sem build. Hospedagem em Apache, com URLs amigáveis no `.htaccess`.

## Estrutura

```
.
├── index.html                  # Home ("Me")
├── .htaccess                   # URLs amigáveis e redirecionamentos 301
├── css/style.css               # Estilo único do site inteiro
├── js/
│   ├── modal.js                # Ampliar fotos ao clicar (galerias, cards, certificados)
│   └── navigation.js           # Dropdowns do menu (hover no desktop, toque no celular)
├── pages/                      # Projetos
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
├── assets/                     # Imagens, separadas por página
└── _rascunhos/                 # Rascunhos (não publicados no menu)
```

`sports/sports-tenis2.html` e `_rascunhos/` são versões antigas/rascunhos e não têm rota.

## Rotas

| URL | Arquivo |
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

As URLs antigas (`/projeto1`, `/pages/projeto1.html` etc.) redirecionam com 301 para as novas.

## Rodando localmente

As URLs amigáveis do menu dependem do Apache com `mod_rewrite` e `AllowOverride All`. A pasta precisa ser a raiz do site, porque os links usam caminhos absolutos (`/HydroGen`). Com XAMPP, por exemplo, é só colocar a pasta em `htdocs` como raiz do VirtualHost.

Sem Apache, qualquer servidor estático abre as páginas pelo caminho do arquivo, mas os links do menu não funcionam:

```bash
python -m http.server 8000
# http://localhost:8000/sports/sports-tenis.html
```

## Observações

- **Cache do CSS:** cada página carrega `css/style.css?v=N`. Ao alterar o CSS, aumente o `v` nas páginas afetadas para o navegador não usar a versão antiga.
- **Layout:** `.container` > `.main-wrapper` > `.content-wrapper`. No desktop o `.content-wrapper` é quem rola (navbar e rodapé fixos). Abaixo de 900px a página rola normalmente e o rodapé deixa de ser fixo.
- **Bolinhas decorativas:** `.circle-top-right` e `.circle-bottom-left` ficam dentro do `.content-wrapper` e rolam junto com o conteúdo.
- **Fotos ampliáveis:** qualquer imagem dentro de `.gallery-item`, `.photo-card` ou `.certificate-frame` abre no modal (`#photoModal`) automaticamente.
- **Página de tênis:** tem a Julia recortada saindo das bolinhas (`assets/sports/beach-tennis-*.webp`, WebP com fundo transparente). A da esquerda fica no início da página e a da direita fica ao lado da segunda galeria (`.cutout-anchor`). O corte das pernas é feito com `mask-image` em CSS. No tablet/celular (≤ 900px) elas ficam ocultas.

## Autor

Desenvolvido por Pedro Thomas.
