
import React from 'react';
import { Mic, Sparkles, Clock3, ShieldCheck, Activity, CalendarClock } from 'lucide-react';

const Features: React.FC = () => {
  const features = [
    {
      icon: <Mic className="w-7 h-7 text-emerald-300" />,
      title: 'Registro por voz',
      desc: 'Só falar o que comeu. A Márcia AI entende sotaques, variações e converte em refeição certinha.',
    },
    {
      icon: <Sparkles className="w-7 h-7 text-emerald-300" />,
      title: 'Macros instantâneas',
      desc: 'Calorias, proteínas, carbos e gorduras na hora, sem abrir tabela ou app extra.',
    },
    {
      icon: <Clock3 className="w-7 h-7 text-emerald-300" />,
      title: 'Saldo diário em tempo real',
      desc: 'Acompanhe o que ainda pode comer hoje e receba ajustes rápidos direto no WhatsApp.',
    },
    {
      icon: <CalendarClock className="w-7 h-7 text-emerald-300" />,
      title: 'Evolução semanal',
      desc: 'Resumo automático da sua semana para você e, se quiser, para sua nutri.',
    },
    {
      icon: <Activity className="w-7 h-7 text-emerald-300" />,
      title: 'Foco em performance',
      desc: 'Sugestões baseadas no seu objetivo: secar, manter ou ganhar massa com praticidade.',
    },
    {
      icon: <ShieldCheck className="w-7 h-7 text-emerald-300" />,
      title: 'Privacidade total',
      desc: 'Sem downloads, sem login em apps de terceiros. Tudo fica dentro do seu WhatsApp.',
    },
  ];

  return (
    <section id="recursos" className="py-20 sm:py-24 px-4 sm:px-6">
      <div className="max-w-screen-xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 lg:gap-10">
          {features.map((f) => (
            <div
              key={f.title}
              className="group p-8 sm:p-9 rounded-3xl glass border border-white/5 hover:border-emerald-400/25 hover:-translate-y-1 transition-all duration-400"
            >
              <div className="w-14 h-14 rounded-2xl bg-emerald-500/10 border border-emerald-500/30 flex items-center justify-center mb-7 shadow-inner shadow-emerald-500/10">
                {f.icon}
              </div>
              <h3 className="text-xl font-black text-white mb-3 group-hover:text-whatsapp transition-colors">
                {f.title}
              </h3>
              <p className="text-gray-400 text-sm leading-relaxed font-medium">{f.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
