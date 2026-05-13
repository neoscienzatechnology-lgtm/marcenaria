# Marcenaria Tarozzo — GitHub Pages com imagens

Versão corrigida com imagens reais dentro de `public/images`.

## Como atualizar o site publicado

1. Extraia este ZIP.
2. Entre no repositório `marcenaria` no GitHub.
3. Apague/substitua os arquivos atuais pelos arquivos deste pacote.
4. Faça commit na branch `main` ou `master`.
5. Vá na aba **Actions** e aguarde o workflow finalizar.
6. O site em GitHub Pages será atualizado.

## Importante

As imagens estão dentro de `public/images` e são chamadas no React usando `import.meta.env.BASE_URL`. Isso evita o erro de imagens quebradas no GitHub Pages, inclusive quando o site está em `/marcenaria/`.


## Versão MANUAL-REAL

Esta versão usa:
- `public/images/logo-principal-manual.png`
- `public/images/logo-verde-manual.png`
- `public/images/logo-claro-manual.png`
- `public/images/cartao-visita-manual.png`
- `public/images/placa-redonda-manual.png`
- `public/images/manual-marca-completo.png`

Ou seja: o logo e aplicações principais foram extraídos do manual de marca atualizado com o slogan **Detalhes para a vida**.
