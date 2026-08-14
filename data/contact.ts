export const contact = {
  email: "contato@pedrowebstudio.com.br",
  whatsappNumber: "5511999999999",
  whatsappMessage:
    "Olá Pedro! Tenho um projeto em mente e gostaria de conversar.",
};

export function getWhatsAppUrl() {
  const text = encodeURIComponent(contact.whatsappMessage);
  return `https://wa.me/${contact.whatsappNumber}?text=${text}`;
}

export function getEmailUrl() {
  const subject = encodeURIComponent("Novo projeto — Pedro Web Studio");
  const body = encodeURIComponent(
    "Olá Pedro,\n\nGostaria de conversar sobre um projeto.\n\nSobre o negócio:\n\nO que preciso:\n\n",
  );
  return `mailto:${contact.email}?subject=${subject}&body=${body}`;
}
