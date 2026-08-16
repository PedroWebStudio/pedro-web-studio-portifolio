import AlmeidaPreview from "./AlmeidaPreview";
import NobrePreview from "./NobrePreview";
import PrimePreview from "./PrimePreview";
import BellaVitaPreview from "./BellaVitaPreview";
import MercadinhoPreview from "./MercadinhoPreview";
import ShoppingPreview from "./ShoppingPreview";
import BurgerLabPreview from "./BurgerLabPreview";
import DemiroPreview from "./DemiroPreview";
import type { ComponentType } from "react";

export const projectPreviews: Record<string, ComponentType> = {
  "almeida-advocacia": AlmeidaPreview,
  "nobre-engenharia": NobrePreview,
  "prime-imoveis": PrimePreview,
  "bella-vita": BellaVitaPreview,
  "mercadinho-bom-dia": MercadinhoPreview,
  "shopping-aurora": ShoppingPreview,
  "burger-lab": BurgerLabPreview,
  "demiro-cortes": DemiroPreview,
};
