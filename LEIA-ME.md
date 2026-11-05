# Site Dra. Deisilane Gonçalves | Estética de Resultados

## Onde editar
- **assets/js/config.js**: WhatsApp, mensagens de cada botão, endereço, horário, prêmios, números, tratamentos, antes/depois, depoimentos, FAQ, CNPJ, IDs do Meta Pixel e do Google Analytics.
- **index.html**: textos fixos (hero, CrioDetox, sobre, linha do tempo), SEO/Open Graph e o schema (CEP e horário no bloco `application/ld+json`).
- **privacidade.html**: preencha os itens entre [colchetes] (data, CNPJ, encarregado/DPO).

## Itens com [colchetes]
Qualquer texto do `config.js` entre [colchetes] **não aparece no site** até você preencher:
- números de autoridade (ex.: clientes atendidas);
- depoimentos (a seção inteira fica oculta enquanto estiver vazia);
- horário (aparece "Atendimento com hora marcada" até você preencher);
- CNPJ e registro profissional (o rodapé esconde a linha).

Ainda falta confirmar: nome oficial dos prêmios de 2024 e 2025, instituição da formação em Estética, CEP, horário e domínio do site.

## Fotos
Todas vieram do Instagram e estão em `assets/img/` (WebP, ~500 KB no total).
- Para trocar: substitua o arquivo mantendo o mesmo nome, ou mude o caminho no `index.html` / `config.js`.
- Antes e depois: cada resultado tem duas imagens (`-antes` e `-depois`) e um campo `proporcao` no `config.js`.
- Prévia do link no WhatsApp/Instagram: `assets/img/og-image.jpg` (1200x630).
- Publique antes e depois só com autorização por escrito das clientes.

## Rastreamento
Cole os IDs em `analytics` no `config.js`. Só carregam depois que a visitante aceita os cookies.
Eventos de clique no WhatsApp:
- Meta: `Contact` + `WhatsAppClick` (parâmetro `origem`)
- GA4: `whatsapp_click` (parâmetro `origem`: hero, crio, tratamento-1, final, flutuante etc.)

## Depois de editar
Ao mudar CSS ou JS, aumente o número `?v=3` nos links do `index.html` (ex.: `?v=4`) para os celulares baixarem a versão nova.

## Publicar
São arquivos estáticos: envie a pasta inteira para Netlify, Vercel, Hostinger etc. O site está no GitHub Pages: https://davidv1010.github.io/site-dra-deisilane-goncalves/ — se usar um domínio próprio, troque esse endereço no `index.html`.
