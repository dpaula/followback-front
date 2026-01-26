
import React, { useState } from 'react';
import { ChevronDown, HelpCircle } from 'lucide-react';
import { FAQItem } from '../types';

const FAQ: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs: FAQItem[] = [
    {
      question: "Precisa logar no Instagram?",
      answer: "Absolutamente não. Nós nunca pedimos sua senha. O processo é feito através da exportação oficial de dados do Meta, garantindo 100% de segurança."
    },
    {
      question: "É realmente seguro?",
      answer: "Sim, é o método mais seguro do mercado. Como não interagimos diretamente com a API do Instagram usando seu login, não há risco de bloqueio ou banimento."
    },
    {
      question: "O que acontece com meu arquivo ZIP?",
      answer: "O arquivo é processado na memória temporária do servidor apenas para gerar o relatório e é deletado automaticamente em seguida. Não guardamos nenhum dado."
    },
    {
      question: "Funciona para qualquer tipo de conta?",
      answer: "Sim! Pessoal, profissional, criador de conteúdo... qualquer conta que permita a exportação de dados pode usar o Followback."
    },
    {
      question: "O serviço é gratuito?",
      answer: "Oferecemos uma análise básica gratuita. Para relatórios avançados e funcionalidades extras, consulte nossas opções direto no WhatsApp."
    }
  ];

  return (
    <section id="faq" className="py-32 px-6">
      <div className="max-w-3xl mx-auto">
        <div className="text-center mb-20">
          <div className="inline-flex items-center justify-center w-14 h-14 rounded-2xl bg-white/5 text-gray-400 mb-8 border border-white/5 shadow-inner">
            <HelpCircle className="w-7 h-7" />
          </div>
          <h2 className="text-3xl md:text-5xl font-black text-white mb-6 tracking-tight">Dúvidas Frequentes</h2>
          <p className="text-gray-400 font-medium">Transparência total para sua tranquilidade.</p>
        </div>

        <div className="space-y-5">
          {faqs.map((faq, i) => (
            <div key={i} className={`rounded-3xl border transition-all duration-500 overflow-hidden ${openIndex === i ? 'bg-white/[0.04] border-white/20' : 'bg-transparent border-white/5 hover:border-white/10'}`}>
              <button
                onClick={() => setOpenIndex(openIndex === i ? null : i)}
                className="w-full px-8 py-7 flex items-center justify-between text-left"
              >
                <span className={`font-bold transition-colors ${openIndex === i ? 'text-white' : 'text-gray-400'}`}>{faq.question}</span>
                <div className={`transition-transform duration-500 ${openIndex === i ? 'rotate-180' : ''}`}>
                  <ChevronDown className={`w-5 h-5 ${openIndex === i ? 'text-whatsapp' : 'text-gray-600'}`} />
                </div>
              </button>
              {openIndex === i && (
                <div className="px-8 pb-8 text-gray-400 text-sm leading-relaxed font-medium animate-fade-in">
                  {faq.answer}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;
