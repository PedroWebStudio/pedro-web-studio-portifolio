import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { type } = body;

    if (type === "contact") {
      const { business, goal, phone } = body;

      if (!business || !goal || !phone) {
        return Response.json(
          { error: "Preencha todos os campos obrigatórios." },
          { status: 400 }
        );
      }

      const { error } = await resend.emails.send({
        from: "onboarding@resend.dev",
        to: "contatopedrowebstudio@gmail.com",
        subject: "Novo contato — Pedro Web Studio",
        html: `
          <h2>Novo contato pelo site</h2>
          <p><strong>Negócio:</strong> ${business}</p>
          <p><strong>O que precisa no site:</strong> ${goal}</p>
          <p><strong>Telefone:</strong> ${phone}</p>
        `,
      });

      if (error) {
        console.error("Erro Resend:", error);

        return Response.json(
          { error: "Não foi possível enviar o contato." },
          { status: 500 }
        );
      }

      return Response.json({ success: true });
    }

    if (type === "orcamento") {
      const {
        tipo,
        funcionalidades = [],
        identidade,
        nome,
        empresa,
        segmento,
        instagram,
        descricao,
        prazo,
        investimento,
        nomeContato,
        email,
        whatsapp,
      } = body;

      if (!nomeContato || !email || !whatsapp || !tipo || !descricao) {
        return Response.json(
          { error: "Preencha todos os campos obrigatórios." },
          { status: 400 }
        );
      }

      const { error } = await resend.emails.send({
        from: "onboarding@resend.dev",
        to: "contatopedrowebstudio@gmail.com",
        subject: "Nova solicitação de orçamento — Pedro Web Studio",
        html: `
          <h2>Nova solicitação de orçamento</h2>

          <h3>Projeto</h3>
          <p><strong>Tipo:</strong> ${tipo}</p>
          <p><strong>Funcionalidades:</strong> ${funcionalidades.join(", ")}</p>
          <p><strong>Identidade visual:</strong> ${identidade}</p>

          <h3>Negócio</h3>
          <p><strong>Nome:</strong> ${nome}</p>
          <p><strong>Empresa:</strong> ${empresa}</p>
          <p><strong>Segmento:</strong> ${segmento}</p>
          <p><strong>Instagram / Site:</strong> ${instagram}</p>
          <p><strong>Descrição:</strong> ${descricao}</p>

          <h3>Prazo e investimento</h3>
          <p><strong>Prazo:</strong> ${prazo}</p>
          <p><strong>Investimento:</strong> ${investimento}</p>

          <h3>Contato</h3>
          <p><strong>Nome:</strong> ${nomeContato}</p>
          <p><strong>E-mail:</strong> ${email}</p>
          <p><strong>WhatsApp:</strong> ${whatsapp}</p>
        `,
      });

      if (error) {
        console.error("Erro Resend:", error);

        return Response.json(
          { error: "Não foi possível enviar o orçamento." },
          { status: 500 }
        );
      }

      return Response.json({ success: true });
    }

    return Response.json(
      { error: "Tipo de formulário inválido." },
      { status: 400 }
    );
  } catch (error) {
    console.error("Erro na API:", error);

    return Response.json(
      { error: "Erro interno ao processar o formulário." },
      { status: 500 }
    );
  }
}
