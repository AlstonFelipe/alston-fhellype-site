# Publicação manual — Site oficial de Alston Fhellype

## O que está pronto

O projeto é um site estático em React com os arquivos de origem, a página oficial do autor, as quatro capas, a foto fornecida, resumos editoriais sem preços e os arquivos `robots.txt`, `sitemap.xml` e `llms.txt`.

## Antes de publicar

Substitua `https://alstonfhellype.com.br/` pelo domínio real em `client/index.html`, `client/public/robots.txt`, `client/public/sitemap.xml` e `client/public/llms.txt` caso o endereço definitivo seja diferente. Se você ainda não tiver domínio, o site pode ser publicado primeiro em um endereço temporário; depois, atualize a URL canônica e o sitemap.

## Hospedagem

Por ser um site estático, o conteúdo pode ser hospedado em qualquer serviço que aceite uma build frontend. O comando de produção é:

```bash
pnpm install
pnpm build
```

A pasta final gerada é `dist/`. Em uma hospedagem estática, publique o conteúdo dessa pasta. Se a hospedagem exigir fallback para rotas, configure `index.html` como fallback; a página atual funciona em uma única rota pública.

## Indexação

Depois de publicar, envie `https://SEU-DOMINIO/sitemap.xml` ao Google Search Console e ao Bing Webmaster Tools. Verifique se o domínio está acessível sem bloqueios, mantenha o site atualizado e use o mesmo nome “Alston Fhellype” em perfis públicos e páginas de autor. Não há garantia de primeira posição nos resultados: a posição depende de indexação, autoridade do domínio, concorrência, links externos, qualidade do conteúdo e histórico de atualizações.

## Conteúdo e direitos

Os resumos presentes no site são sínteses editoriais do projeto, baseadas nos títulos, subtítulos e informações públicas fornecidas para a montagem. Revise os textos contra as descrições oficiais das páginas de venda antes de publicar se quiser uma correspondência literal. Os preços foram propositalmente omitidos.
