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
    title: "Almeida Advocacia",
    category: "Website Institucional",
    description:
      "Uma presença digital sofisticada para um escritório de advocacia.",
    longDescription:
      "Uma presença digital sofisticada, construída para transmitir autoridade, confiança e profissionalismo jurídico.",
    challenge:
      "Transmitir seriedade e excelência técnica sem tornar o site frio ou distante.",
    solution:
      "Tipografia editorial, paleta navy e ouro, ritmo clássico e seções que reforçam proximidade estratégica.",
    tags: ["Next.js", "TypeScript", "Tailwind CSS"],
    accent: "#B89B5E",
    previewBg: "#F8F7F4",
    caseStudy: {
      headline: "Autoridade jurídica com proximidade humana.",
      overview:
        "A Almeida Advocacia precisava de um site institucional que transmitisse sofisticação e confiança — sem parecer distante. O objetivo era posicionar o escritório como estratégico, claro e acessível para potenciais clientes.",
      highlights: [
        "Identidade editorial com tipografia serifada",
        "Paleta navy e ouro para reforçar autoridade",
        "Estrutura clara: escritório, atuação e contato",
        "CTA contínuo para agendar conversa",
      ],
      approach: [
        {
          title: "Posicionamento",
          text: "Definimos uma narrativa centrada em estratégia, experiência e confiança — alinhada ao discurso de um escritório premium.",
        },
        {
          title: "Visual",
          text: "Cormorant para títulos, Manrope para leitura, ritmo clássico e um painel tipográfico no hero para criar presença sem depender de fotos genéricas.",
        },
        {
          title: "Conversão",
          text: "Cada seção conduz ao contato: áreas de atuação objetivas, copy próxima e botões de conversa em pontos-chave da página.",
        },
      ],
      result:
        "Uma demonstração institucional elegante, pronta para apresentar o escritório com credibilidade e convidar o visitante a iniciar uma conversa.",
    },
  },
  {
    id: "nobre-engenharia",
    title: "Nobre Engenharia",
    category: "Website Institucional",
    description:
      "Uma experiência digital moderna para uma empresa de engenharia.",
    longDescription:
      "Uma experiência digital moderna para apresentar projetos, serviços e a identidade técnica da empresa.",
    challenge:
      "Comunicar precisão e escala de obra em uma interface limpa e comercial.",
    solution:
      "Visual industrial, tipografia geométrica, accent laranja e hierarquia forte em números e processo.",
    tags: ["Next.js", "TypeScript", "Tailwind CSS"],
    accent: "#F05A28",
    previewBg: "#F4F5F2",
    caseStudy: {
      headline: "Precisão técnica com presença comercial.",
      overview:
        "A Nobre Engenharia precisava mostrar escala, processo e confiabilidade em um site que conversasse com clientes B2B sem parecer catálogo genérico.",
      highlights: [
        "Visual industrial com accent laranja",
        "Tipografia geométrica e hierarquia forte",
        "Projetos, números e processo em evidência",
        "CTA direto para contato comercial",
      ],
      approach: [
        {
          title: "Posicionamento",
          text: "Uma narrativa de transformação de espaços, com foco em entrega, precisão e visão de futuro.",
        },
        {
          title: "Visual",
          text: "Dark industrial no hero, laranja como energia de marca e cards de projeto com linguagem de obra.",
        },
        {
          title: "Conversão",
          text: "Do hero aos números e ao processo, o visitante entende capacidade e encontra o caminho para falar com a equipe.",
        },
      ],
      result:
        "Uma demonstração B2B moderna que comunica expertise técnica e gera interesse comercial com clareza.",
    },
  },
  {
    id: "prime-imoveis",
    title: "Prime Imóveis",
    category: "Website Institucional",
    description:
      "Uma plataforma elegante para apresentar imóveis e oportunidades.",
    longDescription:
      "Uma experiência elegante para apresentar imóveis selecionados e oportunidades de alto padrão.",
    challenge:
      "Criar desejo e curadoria em um mercado visualmente saturado.",
    solution:
      "Hero luxuoso, busca em destaque, tipografia serifada e cards de propriedade com ritmo editorial.",
    tags: ["Next.js", "TypeScript", "Tailwind CSS"],
    accent: "#C6A15B",
    previewBg: "#17202A",
    caseStudy: {
      headline: "Curadoria imobiliária com desejo visual.",
      overview:
        "A Prime Imóveis precisava de uma presença digital que comunicasse seleção e alto padrão — mais lifestyle do que listagem fria.",
      highlights: [
        "Hero luxuoso com tipografia Playfair",
        "Busca em destaque sobre a dobra",
        "Cards de imóveis com ritmo editorial",
        "Regiões e experiência de atendimento",
      ],
      approach: [
        {
          title: "Posicionamento",
          text: "O endereço certo muda tudo — uma narrativa de escolha, estilo de vida e curadoria.",
        },
        {
          title: "Visual",
          text: "Paleta slate e ouro, composição atmosférica no hero e busca flutuante como elemento central de conversão.",
        },
        {
          title: "Conversão",
          text: "Do explorar imóveis ao contato com consultor, o funil acompanha o desejo de encontrar o próximo endereço.",
        },
      ],
      result:
        "Uma vitrine digital sofisticada, pronta para apresentar oportunidades e conduzir o visitante a um consultor.",
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
      "Uma vitrine digital para promover um shopping e seus eventos.",
    longDescription:
      "Uma experiência urbana e noturna para promover lojas, gastronomia, cinema e eventos de um shopping center.",
    challenge:
      "Transmitir movimento, diversão e escala sem perder clareza de navegação.",
    solution:
      "Visual dark glam com accent ciano elétrico, tipografia bold e seções de lojas, food e agenda.",
    tags: ["Next.js", "TypeScript", "Tailwind CSS"],
    accent: "#2EE6A6",
    previewBg: "#0A0A0F",
    caseStudy: {
      headline: "Energia urbana para um shopping vivo.",
      overview:
        "O Shopping Aurora precisava promover lojas, food, cinema e agenda cultural com visual contemporâneo e ritmo de cidade.",
      highlights: [
        "Dark glam com ciano elétrico",
        "Tipografia Syne + Archivo",
        "Lojas, experiência e agenda",
        "Senso de movimento e evento",
      ],
      approach: [
        {
          title: "Posicionamento",
          text: "Compre. Coma. Viva. — o shopping como ponto de encontro da cidade.",
        },
        {
          title: "Visual",
          text: "Base noturna, accent mint e hierarquia bold para comunicar escala e diversão.",
        },
        {
          title: "Conversão",
          text: "Da exploração de lojas à agenda e ao como chegar — o visitante encontra motivo para ir.",
        },
      ],
      result:
        "Uma demonstração vibrante de centro comercial, pronta para promover experiências e eventos.",
    },
  },
  {
    id: "burger-lab",
    title: "Burger Lab",
    category: "Food & Beverage",
    description:
      "Um site moderno e ousado para uma hamburgueria artesanal.",
    longDescription:
      "Uma experiência digital bold para uma hamburgueria artesanal — cardápio, smash burgers e pedido rápido.",
    challenge:
      "Passar energia de street food premium sem parecer template de delivery genérico.",
    solution:
      "Tipografia condensada, preto + mostarda, menu em cards e CTA direto para pedir.",
    tags: ["Next.js", "TypeScript", "Tailwind CSS"],
    accent: "#F5B942",
    previewBg: "#111111",
    caseStudy: {
      headline: "Street food premium com atitude.",
      overview:
        "O Burger Lab precisava de um site ousado: smash, craft e pedido rápido — com personalidade de marca forte.",
      highlights: [
        "Tipografia condensada uppercase",
        "Preto + mostarda de alto contraste",
        "Cardápio em cards com preço claro",
        "CTA direto para delivery",
      ],
      approach: [
        {
          title: "Posicionamento",
          text: "Burgers que batem diferente — laboratório de sabor com vibe de rua.",
        },
        {
          title: "Visual",
          text: "Barlow Condensed, dark base e mostarda para energia imediata e leitura rápida do menu.",
        },
        {
          title: "Conversão",
          text: "Do hero ao cardápio e ao pedido — o caminho para pedir é óbvio e rápido.",
        },
      ],
      result:
        "Uma demonstração food bold e moderna, ideal para marcas que querem presença digital com personalidade.",
    },
  },
  {
    id: "orbit-saas",
    title: "Orbit",
    category: "SaaS / Startup",
    description:
      "Uma landing moderna para um produto SaaS de analytics.",
    longDescription:
      "Uma landing page de produto para uma startup SaaS — hero com UI mock, features, pricing e CTA de trial.",
    challenge:
      "Comunicar produto técnico com clareza, velocidade e visual de startup atual.",
    solution:
      "Interface clean em zinc, accent sky, tipografia Plus Jakarta e seções de produto/pricing.",
    tags: ["Next.js", "TypeScript", "Tailwind CSS"],
    accent: "#0EA5E9",
    previewBg: "#09090B",
    caseStudy: {
      headline: "Produto SaaS claro, rápido e atual.",
      overview:
        "A Orbit precisava de uma landing que explicasse o produto, mostrasse a interface e levasse ao trial sem ruído.",
      highlights: [
        "Hero centrado com mock de dashboard",
        "Features e pricing objetivos",
        "Paleta zinc + sky",
        "CTA de trial em evidência",
      ],
      approach: [
        {
          title: "Posicionamento",
          text: "Analytics que a startup realmente usa — foco em decisão rápida e clareza.",
        },
        {
          title: "Visual",
          text: "Plus Jakarta, mono para detalhes técnicos e UI mock que prova o produto na primeira dobra.",
        },
        {
          title: "Conversão",
          text: "Do trial gratuito ao pricing — o funil acompanha o ciclo de avaliação de um SaaS.",
        },
      ],
      result:
        "Uma landing de produto moderna, pronta para apresentar a Orbit e converter para o trial.",
    },
  },
];

export function getProjectById(id: string) {
  return projects.find((project) => project.id === id);
}
