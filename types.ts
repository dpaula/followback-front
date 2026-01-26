
export interface FormData {
  nome: string;
  telefone: string;
  email?: string;
  codigoConviteIndicador?: string;
  urlOrigem: string;
}

export interface ApiResponse {
  linkConvite?: string;
  message?: string;
}

export interface FAQItem {
  question: string;
  answer: string;
}
