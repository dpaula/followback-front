
import React, { useState } from 'react';
import { ChevronDown, HelpCircle } from 'lucide-react';
import { FAQItem } from '../types';

const FAQ: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs: FAQItem[] = [
    {
      question: "Preciso instalar algum app novo?",
      answer: "Não. Toda a conversa, registros e resumos acontecem dentro do seu WhatsApp. Nada de cadastros ou logins extras."
    },
    {
      question: "Ela entende medidas do dia a dia?",
      answer: "Sim! Pode falar “um prato de arroz”, “duas conchas de feijão”, “um filé de frango” que a Márcia AI interpreta e converte para macros."
    },
    {
      question: "Quem vê meus dados?",
      answer: "Só você. As informações são processadas temporariamente para gerar o saldo de macros e não são armazenadas para uso posterior."
    },
    {
      question: "Funciona sem nutricionista?",
      answer: "Sim, o AI Fit guia seu dia a dia. Se você tiver nutri, pode compartilhar o resumo semanal para acompanhamento."
    },
    {
      question: "E se eu não puder falar por áudio?",
      answer: "Pode digitar. O fluxo por texto funciona igual e a IA responde com os macros do mesmo jeito."
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
