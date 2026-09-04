# ZURA FLEET — Landing Page (HTML/CSS/JS puro)

Landing page da ZURA FLEET para apresentação dos planos Premium, Plus e Full,
com hero centralizado, personagem, vitrine de planos e formulário de
orçamento que abre uma mensagem pronta no WhatsApp.

Este projeto **não depende de Node, build step ou framework** — é HTML, CSS
e JavaScript puro, pronto para ser hospedado diretamente no GitHub Pages.

## Estrutura de pastas

```
├── index.html              → página principal
├── 404.html                → página de erro (usada pelo GitHub Pages)
├── robots.txt               → orientação para rastreadores
├── sitemap.xml               → mapa do site (edite a URL antes de publicar)
├── .nojekyll                 → impede o GitHub Pages de ignorar a pasta assets
└── assets/
    ├── css/
    │   └── style.css        → todo o estilo do site
    ├── js/
    │   └── main.js           → interação da vitrine de planos e do formulário
    └── img/
        ├── logo.png
        ├── character.png
        ├── premium-texture.jpg
        ├── plus-texture.jpg
        └── favicon-16.png / favicon-32.png / favicon-180.png / favicon-192.png / favicon-512.png
```

## Como publicar no GitHub Pages

1. Crie um repositório novo (vazio) no GitHub.
2. Dentro desta pasta, rode:
   ```bash
   git init
   git add .
   git commit -m "feat: landing page ZURA FLEET"
   git branch -M main
   git remote add origin https://github.com/SEU-USUARIO/SEU-REPOSITORIO.git
   git push -u origin main
   ```
3. No GitHub, vá em **Settings → Pages**.
4. Em "Build and deployment", selecione **Deploy from a branch**, escolha a
   branch `main` e a pasta `/ (root)`.
5. Aguarde alguns minutos — o site ficará disponível em
   `https://SEU-USUARIO.github.io/SEU-REPOSITORIO/`.
6. Abra `sitemap.xml` e troque a URL de exemplo pela URL final do site.

## Testar localmente

Basta abrir o `index.html` no navegador, ou rodar um servidor simples:

```bash
python3 -m http.server 8000
```

E acessar `http://localhost:8000`.

## Sobre as imagens dos planos

O pacote de exportação original referenciava três imagens de apresentação
dos planos (`zura-fleet-plan-1/2/3`) hospedadas no armazenamento interno da
plataforma onde o projeto foi criado — elas não vieram no arquivo exportado,
só as texturas de fundo (`premium-texture` e `plus-texture`) e a logo/
personagem, que foram usadas normalmente no site.

Para não deixar "imagem quebrada", os painéis de cada plano (seção
"Qual camada organiza a sua operação?") foram montados com essas texturas
como plano de fundo e o nome do plano em destaque — no mesmo estilo visual
do restante do site. Quando você tiver a arte final de cada plano, basta:

1. Colocar o arquivo de imagem em `assets/img/` (ex.: `plano-premium.png`).
2. Em `index.html`, dentro do painel do plano correspondente, trocar o bloco
   `<div class="plan-visual ...">...</div>` por uma tag `<img>` apontando
   para o novo arquivo, mantendo a classe `plan-image-shell` no elemento pai
   para preservar o enquadramento com cantos.

## Editar textos e número do WhatsApp

- Textos dos planos e do hero: direto no `index.html`.
- Número de WhatsApp: constante `WHATSAPP_NUMBER` no início de
  `assets/js/main.js` (formato `55DDDNÚMERO`, sem espaços ou símbolos).
