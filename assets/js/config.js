/* =========================================================================
   CONFIGURAÇÃO DO SITE — EDITE AQUI
   Todos os textos variáveis, links do WhatsApp, prêmios, números,
   tratamentos, depoimentos, FAQ e IDs de rastreamento ficam neste arquivo.
   Itens entre [colchetes] são para você preencher.
   ========================================================================= */

window.SITE = {

  /* ---------- CONTATO ---------- */
  whatsapp: "5531992363511",            // 55 + DDD + número, só dígitos
  instagram: "https://www.instagram.com/deisilanegoncalvesestetica/",
  instagramHandle: "@deisilanegoncalvesestetica",
  endereco: "Avenida Professor Clóvis Salgado, 998, sala 1 – Igarapé/MG",
  horario: "[Seg a Sex: 9h às 19h • Sáb: 9h às 13h]",
  // Texto usado para gerar o mapa do Google (pode ser o endereço completo ou o nome no Google Maps)
  mapaBusca: "Avenida Professor Clóvis Salgado, 998, Igarapé - MG",
  cnpj: "[00.000.000/0001-00]",
  registroProfissional: "[Registro profissional]",

  /* ---------- MENSAGENS DO WHATSAPP POR BOTÃO ----------
     Cada botão do site tem data-wa="chave". A mensagem identifica a origem. */
  mensagens: {
    hero:        "Olá, Dra. Deisilane! Vim pelo site e quero agendar uma avaliação do CrioDetox Sculpt.",
    premios:     "Olá, Dra. Deisilane! Vi seus prêmios no site e quero agendar minha avaliação.",
    crio:        "Olá, Dra. Deisilane! Vim pelo site e quero saber se o CrioDetox Sculpt é para mim.",
    antesdepois: "Olá, Dra. Deisilane! Vi os resultados de antes e depois no site e quero agendar uma avaliação.",
    sobre:       "Olá, Dra. Deisilane! Conheci sua história pelo site e quero agendar minha avaliação.",
    depoimentos: "Olá, Dra. Deisilane! Li os depoimentos no site e quero agendar minha avaliação.",
    passos:      "Olá, Dra. Deisilane! Quero agendar minha avaliação personalizada (vim pelo site).",
    faq:         "Olá, Dra. Deisilane! Vim pelo site e tenho uma dúvida antes de agendar minha avaliação.",
    preco:       "Olá, Dra. Deisilane! Vim pelo site e gostaria de saber valores do CrioDetox Sculpt após a avaliação.",
    final:       "Olá, Dra. Deisilane! Vim pelo site e quero agendar minha avaliação.",
    flutuante:   "Olá, Dra. Deisilane! Vim pelo site e quero agendar uma avaliação."
  },

  /* ---------- PRÊMIOS ---------- */
  premios: [
    // Troque pelo nome oficial de cada prêmio quando tiver (ex.: "Melhores do Ano – Igarapé")
    { nome: "Premiada em 2025", ano: "2025", contexto: "Terceiro ano seguido." },
    { nome: "Premiada em 2024", ano: "2024", contexto: "Segundo ano seguido." },
    { nome: "Melhores do Ano – Igarapé", ano: "2023", contexto: "2º lugar em Igarapé." }
  ],

  /* ---------- NÚMEROS DE AUTORIDADE ---------- */
  // Itens com [colchetes] não aparecem no site. Ex.: { valor: "8", rotulo: "anos de experiência" }
  numeros: [
    { valor: "3",     rotulo: "anos seguidos premiada" },
    { valor: "2,6 mil", rotulo: "seguidoras no Instagram" },
    { valor: "1",     rotulo: "protocolo próprio: CrioDetox Sculpt" },
    { valor: "[X]+",  rotulo: "clientes atendidas" }
  ],

  /* ---------- OUTROS TRATAMENTOS (destaques do Instagram) ---------- */
  tratamentos: [
    { nome: "Lipedema", frase: "Alívio e menos inflamação.",
      msg: "Olá, Dra. Deisilane! Vim pelo site e quero saber mais sobre o tratamento para lipedema." },
    { nome: "Drenagem e pós-operatório", frase: "Menos inchaço, recuperação mais leve.",
      msg: "Olá, Dra. Deisilane! Vim pelo site e quero saber mais sobre drenagem e pós-operatório." },
    { nome: "Depilação a laser", frase: "Adeus à lâmina e aos pelos encravados.",
      msg: "Olá, Dra. Deisilane! Vim pelo site e quero saber mais sobre a depilação a laser." },
    { nome: "Limpeza de pele e Hidra Gloss", frase: "Pele limpa, hidratada e com brilho.",
      msg: "Olá, Dra. Deisilane! Vim pelo site e quero agendar uma limpeza de pele ou Hidra Gloss." },
    { nome: "Dermaplaning", frase: "Pele macia e iluminada na hora.",
      msg: "Olá, Dra. Deisilane! Vim pelo site e quero saber mais sobre o dermaplaning." },
    { nome: "Taping", frase: "Menos inchaço e mais suporte.",
      msg: "Olá, Dra. Deisilane! Vim pelo site e quero saber mais sobre o taping." }
  ],

  /* ---------- ANTES E DEPOIS ----------
     Coloque as fotos em assets/img/ e preencha os caminhos.
     Deixe "" para mostrar o espaço reservado. */
  antesDepois: [
    // proporcao = largura/altura do quadro (ex.: "4/5" vertical, "16/9" horizontal)
    { antes: "assets/img/ad-costas-antes.webp",    depois: "assets/img/ad-costas-depois.webp",
      legenda: "CrioDetox Sculpt • menos medidas nas costas", proporcao: "9/8" },
    { antes: "assets/img/ad-lipedema-antes.webp",  depois: "assets/img/ad-lipedema-depois.webp",
      legenda: "Lipedema • protocolo para desinflamar", proporcao: "3/5" },
    { antes: "assets/img/ad-abdomen-antes.webp",   depois: "assets/img/ad-abdomen-depois.webp",
      legenda: "Abdômen • antes e depois imediato", proporcao: "5/3" },
    { antes: "assets/img/ad-drenagem-antes.webp",  depois: "assets/img/ad-drenagem-depois.webp",
      legenda: "Drenagem • resultado após 1 sessão", proporcao: "15/8" },
    { antes: "assets/img/ad-limpeza-antes.webp",   depois: "assets/img/ad-limpeza-depois.webp",
      legenda: "Limpeza de pele • região dos olhos", proporcao: "3/2" }
  ],

  /* ---------- DEPOIMENTOS ----------
     Use o texto OU o print (imagem). Se "print" tiver caminho, a imagem aparece no lugar do texto. */
  depoimentos: [
    { texto: "[Depoimento real da cliente]", nome: "[Nome]", cidade: "[Cidade]", print: "" },
    { texto: "[Depoimento real da cliente]", nome: "[Nome]", cidade: "[Cidade]", print: "" },
    { texto: "[Depoimento real da cliente]", nome: "[Nome]", cidade: "[Cidade]", print: "" }
  ],

  /* ---------- PERGUNTAS FREQUENTES ---------- */
  faq: [
    { p: "O CrioDetox Sculpt dói?",
      r: "É um dos procedimentos menos dolorosos. Você sente frio nos primeiros minutos e logo fica confortável." },
    { p: "O CrioDetox Sculpt faz emagrecer?",
      r: "Não é para perder peso. O foco é reduzir medidas na região tratada." },
    { p: "Posso fazer em qualquer parte do corpo?",
      r: "Não. A região precisa ter gordura localizada. A avaliação mostra as áreas certas." },
    { p: "Quantas sessões preciso?",
      r: "Depende do seu corpo e objetivo. Você sai da avaliação com o plano." },
    { p: "Quando começo a ver resultado?",
      r: "Muitas clientes notam mudanças nas primeiras semanas. Cada corpo tem seu tempo." },
    { p: "Tem contraindicação?",
      r: "Sim. Por isso a avaliação vem primeiro, para garantir sua segurança." },
    { p: "Quanto custa?",
      r: "Depende do seu plano. Você recebe o valor na avaliação.",
      cta: "preco" }
  ],

  /* ---------- RASTREAMENTO ----------
     Cole os IDs. Só carregam depois que a visitante aceita os cookies. */
  analytics: {
    metaPixelId: "",        // ex.: "123456789012345"
    ga4Id: ""               // ex.: "G-XXXXXXXXXX"
  }
};
