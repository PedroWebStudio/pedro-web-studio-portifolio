export interface Project {
  id: string;
  title: string;
  category: string;
  description: string;
  longDescription: string;
  challenge: string;
  solution: string;
  tags: string[];
  accent: string;
  previewBg: string;
  caseStudy: {
    headline: string;
    overview: string;
    highlights: string[];
    approach: { title: string; text: string }[];
    result: string;
  };
}

export const projects: Project[] = [
  {
    id: "almeida-advocacia",
    title: "Miriam Rodrigues Santos",
    category: "Website Institucional",
    description:
      "Site institucional elegante para uma advogada — autoridade com proximidade.",
    longDescription:
      "Uma presença digital sóbria e sofisticada para advocacia pessoal, com tipografia editorial e paleta vinho e ouro.",
    challenge:
      "Transmitir seriedade e excelência técnica sem tornar o site frio ou distante.",
    solution:
      "Hero com marca e retrato, narrativa de proximidade, áreas de atuação limpas e CTA de conversa.",
    tags: ["Next.js", "TypeScript", "Tailwind CSS"],
    accent: "#D4AF37",
    previewBg: "#5A0B22",
    caseStudy: {
      headline: "Autoridade jurídica com proximidade humana.",
      overview:
        "O escritório precisava de um site institucional que transmitisse sofisticação e confiança — sem parecer distante. O objetivo era posicionar a advogada como estratégica, clara e acessível.",
      highlights: [
        "Identidade vinho e ouro alinhada à marca",
        "Hero com presença da advogada e espaço para foto",
        "Estrutura clara: sobre, atuação e contato",
        "Tom editorial, sem excesso de blocos e cards",
      ],
      approach: [
        {
          title: "Posicionamento",
          text: "Narrativa centrada em clareza, critério e escuta — alinhada a uma advocacia pessoal de alto padrão.",
        },
        {
          title: "Visual",
          text: "Cormorant para títulos, Outfit para leitura, vinho como atmosfera e ouro como acento pontual.",
        },
        {
          title: "Conversão",
          text: "Cada seção conduz ao contato: apresentação, áreas de atuação objetivas e convite à conversa.",
        },
      ],
      result:
        "Uma demonstração institucional elegante, pronta para apresentar a advogada com credibilidade e convidar o visitante a iniciar uma conversa.",
    },
  },
  {
    id: "nobre-engenharia",
    title: "Nobre Engenharia",
    category: "Website Institucional",
    description:
      "Site técnico de engenharia com filtro de obras e briefing.",
    longDescription:
      "Interface blueprint dark com portfólio filtrável, ficha técnica interativa, processo em stepper e formulário de briefing.",
    challenge:
      "Comunicar precisão e escala sem cair no layout institucional genérico.",
    solution:
      "Grid de engenharia, métricas em faixa, obras com filtros e painel técnico ao vivo.",
    tags: ["Next.js", "TypeScript", "Tailwind CSS"],
    accent: "#F05A28",
    previewBg: "#101820",
    caseStudy: {
      headline: "Precisão técnica com presença comercial.",
      overview:
        "A Nobre Engenharia precisava mostrar escala, processo e confiabilidade em um site B2B com ferramentas reais de exploração.",
      highlights: [
        "Visual blueprint dark + laranja",
        "Filtro de obras por tipo e status",
        "Ficha técnica interativa",
        "Briefing com modal de envio",
      ],
      approach: [
        {
          title: "Posicionamento",
          text: "Engenharia de precisão — obra complexa com controle total.",
        },
        {
          title: "Visual",
          text: "Grid técnico, tipografia Space Grotesk e métricas de impacto na primeira dobra.",
        },
        {
          title: "Conversão",
          text: "Do portfólio ao briefing — o lead comercial começa no site.",
        },
      ],
      result:
        "Uma demonstração B2B técnica e funcional, pronta para apresentar engenharia com credibilidade.",
    },
  },
  {
    id: "prime-imoveis",
    title: "Prime Imóveis",
    category: "Website Institucional",
    description:
      "Buscador de imóveis com filtros, favoritos e comparação.",
    longDescription:
      "Plataforma imobiliária com carrossel de destaques, busca por tipo/região/preço, favoritos e comparação lado a lado.",
    challenge:
      "Criar desejo e utilidade real — mais do que vitrine estática.",
    solution:
      "Hero em carrossel, painel de filtros, favoritar/comparar e lista viva de resultados.",
    tags: ["Next.js", "TypeScript", "Tailwind CSS"],
    accent: "#C6A15B",
    previewBg: "#11151C",
    caseStudy: {
      headline: "Curadoria imobiliária com busca de verdade.",
      overview:
        "A Prime Imóveis precisava de uma presença que comunicasse alto padrão e ainda ajudasse a achar o imóvel certo.",
      highlights: [
        "Carrossel de destaques full-bleed",
        "Filtros de tipo, região, preço e dorms",
        "Favoritos e comparação de até 2 imóveis",
        "Lista de resultados em tempo real",
      ],
      approach: [
        {
          title: "Posicionamento",
          text: "O endereço certo muda tudo — com ferramentas para decidir.",
        },
        {
          title: "Visual",
          text: "Dark luxo com ouro champagne e tipografia Fraunces.",
        },
        {
          title: "Conversão",
          text: "Da busca à comparação e ao contato com o consultor.",
        },
      ],
      result:
        "Uma vitrine digital sofisticada e funcional para imóveis de alto padrão.",
    },
  },
  {
    id: "bella-vita",
    title: "Bella Vita",
    category: "Website Institucional",
    description:
      "Uma experiência visual leve e sofisticada para uma clínica.",
    longDescription:
      "Uma experiência visual leve e sofisticada, desenvolvida para uma clínica de bem-estar e estética.",
    challenge:
      "Gerar acolhimento e confiança sem perder sofisticação clínica.",
    solution:
      "Paleta sage e blush, tipografia suave, formas arredondadas e seções respiradas focadas em cuidado.",
    tags: ["Next.js", "TypeScript", "Tailwind CSS"],
    accent: "#6B8F71",
    previewBg: "#FAF7F2",
    caseStudy: {
      headline: "Cuidado clínico com leveza visual.",
      overview:
        "A Bella Vita precisava de um site que transmitisse bem-estar e confiança — acolhedor, moderno e sem parecer invasivo.",
      highlights: [
        "Paleta sage e blush suave",
        "Tipografia Fraunces + Outfit",
        "Formas arredondadas e ritmo respirado",
        "Foco em agendamento e cuidados",
      ],
      approach: [
        {
          title: "Posicionamento",
          text: "Cuidado que respeita o ritmo do paciente — naturalidade, presença e escuta.",
        },
        {
          title: "Visual",
          text: "Ivory suave, cards orgânicos e tipografia leve para reforçar clínica de bem-estar premium.",
        },
        {
          title: "Conversão",
          text: "CTAs de agendamento em pontos-chave e seções que explicam a abordagem sem sobrecarregar.",
        },
      ],
      result:
        "Uma demonstração acolhedora e sofisticada, ideal para clínicas que querem transmitir cuidado e confiança.",
    },
  },
  {
    id: "mercadinho-bom-dia",
    title: "Mercadinho Bom Dia",
    category: "Comércio Local",
    description:
      "Um site simples e acolhedor para um mercadinho de bairro.",
    longDescription:
      "Uma presença digital quente e direta para um mercadinho de bairro — horários, ofertas e proximidade com o cliente.",
    challenge:
      "Parecer acessível e local, sem visual genérico de e-commerce grande.",
    solution:
      "Tipografia amigável, vermelho tomate e verde folha, cards de oferta e seções de vizinhança.",
    tags: ["Next.js", "TypeScript", "Tailwind CSS"],
    accent: "#E85D4C",
    previewBg: "#FFF8F0",
    caseStudy: {
      headline: "Comércio de bairro com carinho e clareza.",
      overview:
        "O Mercadinho Bom Dia precisava de um site simples: horários, ofertas e a sensação de proximidade do comércio local.",
      highlights: [
        "Visual quente e amigável",
        "Ofertas e seções em destaque",
        "Horário e endereço fáceis de achar",
        "Linguagem de vizinhança",
      ],
      approach: [
        {
          title: "Posicionamento",
          text: "Do bairro para o bairro — fresco, perto e com atendimento humano.",
        },
        {
          title: "Visual",
          text: "Nunito bold, vermelho tomate, verde folha e cards com sombra offset para energia acessível.",
        },
        {
          title: "Conversão",
          text: "Ofertas, como chegar e contato direto — sem fricção para o cliente do dia a dia.",
        },
      ],
      result:
        "Uma demonstração local e simpática, perfeita para comércios que querem presença digital sem complicação.",
    },
  },
  {
    id: "shopping-aurora",
    title: "Shopping Aurora",
    category: "Centro Comercial",
    description:
      "Diretório digital de shopping com busca, filtros, cinema e mapa.",
    longDescription:
      "Uma experiência urbana para explorar lojas, produtos, sessões de cinema, agenda e como chegar — com busca e filtros em tempo real.",
    challenge:
      "Parecer um shopping de verdade, não só uma landing institucional genérica.",
    solution:
      "Hero com busca central, diretório filtrável, vitrine de produtos, cinema, agenda e Maps.",
    tags: ["Next.js", "TypeScript", "Tailwind CSS"],
    accent: "#2EE6A6",
    previewBg: "#07070C",
    caseStudy: {
      headline: "O shopping como app de descoberta.",
      overview:
        "O Shopping Aurora precisava de um site útil: achar loja, filtrar produto, ver cinema e chegar sem fricção.",
      highlights: [
        "Busca e filtros de lojas por categoria e piso",
        "Vitrine de produtos com pesquisa",
        "Sessões de cinema e agenda filtrável",
        "Como chegar com Google Maps",
      ],
      approach: [
        {
          title: "Posicionamento",
          text: "Diretório vivo da cidade — o visitante resolve no site antes de ir.",
        },
        {
          title: "Visual",
          text: "Dark urbano com mint elétrico, busca central e listas de diretório em vez do split clássico.",
        },
        {
          title: "Conversão",
          text: "Da busca à rota no Maps — cada seção empurra a visita presencial.",
        },
      ],
      result:
        "Uma demonstração completa de shopping center, com funcionalidades reais de descoberta e navegação.",
    },
  },
  {
    id: "burger-lab",
    title: "Burger Lab",
    category: "Food & Beverage",
    description:
      "Hamburgueria com montagem de pedido, filtros e sacola.",
    longDescription:
      "Experiência bold de street food com cardápio filtrável, montagem de burger com extras, sacola lateral e checkout demo.",
    challenge:
      "Passar energia de lab sem parecer template de delivery genérico.",
    solution:
      "Hero tipográfico gigante, menu em lista, builder de extras e drawer de sacola.",
    tags: ["Next.js", "TypeScript", "Tailwind CSS"],
    accent: "#F5B942",
    previewBg: "#0E0E0E",
    caseStudy: {
      headline: "Street food premium com pedido montável.",
      overview:
        "O Burger Lab precisava de um site ousado: smash, craft e pedido rápido — com personalidade e utilidade.",
      highlights: [
        "Filtros smash / spicy / veggie",
        "Montar burger com extras",
        "Sacola flutuante com qty e total",
        "Tipografia condensada de alto impacto",
      ],
      approach: [
        {
          title: "Posicionamento",
          text: "Burgers that hit different — laboratório de sabor com vibe de rua.",
        },
        {
          title: "Visual",
          text: "Barlow Condensed + Rubik, preto e mostarda, hierarquia tipográfica agressiva.",
        },
        {
          title: "Conversão",
          text: "Do menu à sacola — o caminho para pedir é óbvio e rápido.",
        },
      ],
      result:
        "Uma demonstração food bold e funcional, ideal para marcas com personalidade forte.",
    },
  },
  {
    id: "demiro-cortes",
    title: "Demiro Cortes",
    category: "Barbearia",
    description:
      "Site preto e amarelo para barbearia — com agendamento e mapa.",
    longDescription:
      "Uma experiência digital ousada para barbearia: serviços, agendamento em etapas e como chegar no Google Maps.",
    challenge:
      "Sair do visual genérico de barbearias e das landings repetidas do portfólio.",
    solution:
      "Identidade preto + amarelo elétrico, hero diagonal, fluxo de agendamento interativo e mapa embutido.",
    tags: ["Next.js", "TypeScript", "Tailwind CSS"],
    accent: "#FFD400",
    previewBg: "#0A0A0A",
    caseStudy: {
      headline: "Barbearia com atitude e horário marcado.",
      overview:
        "A Demiro Cortes precisava de um site com personalidade forte, agendamento simples e localização clara para o cliente chegar sem fricção.",
      highlights: [
        "Paleta preto e amarelo de alto contraste",
        "Agendamento em etapas com confirmação",
        "Google Maps embutido + rota",
        "Animações próprias (poste, marquee, steps)",
      ],
      approach: [
        {
          title: "Posicionamento",
          text: "Corte com atitude — direto, urbano e sem enrolação.",
        },
        {
          title: "Visual",
          text: "Anton + DM Sans, diagonal amarela no hero e detalhes de barbearia clássica revisitada.",
        },
        {
          title: "Conversão",
          text: "Do serviço ao horário confirmado, com mapa para o cliente saber como chegar.",
        },
      ],
      result:
        "Uma demonstração de barbearia completa, com funcionalidades reais de agenda e localização.",
    },
  },
];

export function getProjectById(id: string) {
  return projects.find((project) => project.id === id);
}
