
import React from 'react';
import { Mic, Sparkles, BarChart3 } from 'lucide-react';

const HowItWorks: React.FC = () => {
  const steps = [
    {
      icon: <Mic className="w-6 h-6 text-emerald-300" />,
      title: 'Grave um áudio',
      desc: 'Conte para a Márcia AI o que você comeu. Pode ser falando ou enviando uma lista rápida.',
    },
    {
      icon: <Sparkles className="w-6 h-6 text-emerald-300" />,
      title: 'Ela entende e registra',
      desc: 'A IA transforma o áudio em refeição, já calcula calorias e macros e valida com você.',
    },
    {
      icon: <BarChart3 className="w-6 h-6 text-emerald-300" />,
      title: 'Macros em segundos',
      desc: 'Receba o saldo diário e sua evolução semanal direto no WhatsApp, sem instalar apps.',
    },
  ];

  return (
    <section id="como-funciona" className="py-20 sm:py-24 px-4 sm:px-6 relative">
      <div className="absolute inset-x-0 top-10 h-40 bg-gradient-to-b from-emerald-500/5 to-transparent pointer-events-none"></div>
      <div className="max-w-screen-xl mx-auto">
        <div className="text-center space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-[11px] uppercase tracking-[0.25em] font-bold text-gray-300">
            Passo a passo
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight">
            Como funciona o AI Fit?
          </h2>
          <p className="text-gray-400 text-base sm:text-lg max-w-3xl mx-auto">
            Simplificamos a nutrição eliminando fricção. Fale por voz, receba os números e siga o plano sem abrir outro app.
          </p>
        </div>

        <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
          {steps.map((step, index) => (
            <div
              key={step.title}
              className="glass border border-white/5 rounded-3xl p-6 sm:p-7 flex flex-col gap-4 hover:border-emerald-400/20 transition-all duration-300"
            >
              <div className="flex items-center gap-4">
                <div className="w-11 h-11 rounded-2xl bg-emerald-500/10 border border-emerald-500/30 flex items-center justify-center">
                  {step.icon}
                </div>
                <div className="text-[12px] font-bold text-emerald-200 uppercase tracking-[0.2em]">
                  Passo {index + 1}
                </div>
              </div>
              <h3 className="text-xl font-bold text-white">{step.title}</h3>
              <p className="text-gray-400 text-sm leading-relaxed">{step.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
