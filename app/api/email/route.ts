import { Resend } from "resend";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

const TO = "contatopedrowebstudio@gmail.com";
const FROM = "Pedro Web Studio <onboarding@resend.dev>";

function getApiKey() {
  return process.env["RESEND_API_KEY"]?.trim();
}

async function sendEmail(subject: string, html: string) {
  const apiKey = getApiKey();

  if (!apiKey) {
    console.error("RESEND_API_KEY não configurada neste ambiente.");
    return Response.json(
      { error: "Serviço de e-mail não configurado." },
      { status: 500 }
    );
  }

  const resend = new Resend(apiKey);
  const { data, error } = await resend.emails.send({
    from: FROM,
    to: TO,
    subject,
    html,
  });

  if (error || !data?.id) {
    console.error("Erro Resend:", error ?? "Resend não retornou id do e-mail.");
    return Response.json(
      { error: error?.message || "Não foi possível enviar o e-mail." },
      { status: 500 }
    );
  }

  console.info("E-mail enviado:", data.id);
  return Response.json({ success: true, id: data.id });
}

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

      return sendEmail(
        "Novo contato — Pedro Web Studio",
        `
          <h2>Novo contato pelo site</h2>
          <p><strong>Negócio:</strong> ${business}</p>
          <p><strong>O que precisa no site:</strong> ${goal}</p>
          <p><strong>Telefone:</strong> ${phone}</p>
        `
      );
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

      const lista = Array.isArray(funcionalidades)
        ? funcionalidades.join(", ")
        : "";

      return sendEmail(
        "Nova solicitação de orçamento — Pedro Web Studio",
        `
          <h2>Nova solicitação de orçamento</h2>

          <h3>Projeto</h3>
          <p><strong>Tipo:</strong> ${tipo}</p>
          <p><strong>Funcionalidades:</strong> ${lista}</p>
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
        `
      );
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
