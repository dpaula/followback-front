
import React from 'react';
import { ArrowRight, ShieldCheck } from 'lucide-react';
import phoneChat from '../assets/phone-chat.jpg';

const Hero: React.FC = () => {
  return (
    <section className="relative overflow-hidden pt-24 pb-14 lg:pt-40 lg:pb-28 px-6">
      {/* Background Orbs */}
      <div className="absolute top-1/4 -left-32 w-64 h-64 md:w-[420px] md:h-[420px] bg-purple-500/12 rounded-full blur-[110px] -z-10 animate-pulse"></div>
      <div className="absolute bottom-1/4 -right-32 w-80 h-80 md:w-[480px] md:h-[480px] bg-pink-500/12 rounded-full blur-[130px] -z-10 animate-pulse" style={{ animationDelay: '2s' }}></div>

      {/* Full-width accent line to emphasize span */}
      <div className="hidden lg:block absolute left-1/2 -translate-x-1/2 top-24 w-screen max-w-none h-px bg-gradient-to-r from-transparent via-white/20 to-transparent opacity-80"></div>

      <div className="max-w-[1500px] mx-auto flex flex-col lg:flex-row items-start lg:items-center gap-10 lg:gap-16 xl:gap-24 px-0 lg:px-4">
        {/* Left Column: Text Content */}
        <div className="relative z-10 text-center lg:text-left flex-1 order-1">
          <div className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-white/5 border border-white/10 text-[10px] md:text-xs font-bold text-gray-200 mb-6 md:mb-8 tracking-[0.18em] uppercase">
            <ShieldCheck className="w-4 h-4 text-whatsapp" />
            Privacidade em Primeiro Lugar
          </div>

          <h1 className="text-3xl md:text-5xl lg:text-6xl font-extrabold text-white mb-4 md:mb-6 leading-[1.05] tracking-tight">
            Veja quem não te segue em segundos.
          </h1>

          <p className="text-base md:text-xl text-gray-300 mb-7 md:mb-10 leading-relaxed max-w-2xl mx-auto lg:mx-0 font-medium">
            Baixe o ZIP oficial do Instagram e envie. Sem login, sem senha. Em menos de 10s você recebe o relatório completo direto no WhatsApp.
          </p>

          <div className="flex flex-col sm:flex-row items-center gap-4 md:gap-6 justify-center lg:justify-start">
            <a
              href="#comecar"
              className="w-full sm:w-auto px-10 py-5 rounded-2xl bg-whatsapp text-white font-extrabold text-lg flex items-center justify-center gap-3 hover:bg-[#20bd5a] transition-all transform hover:-translate-y-1 glow-whatsapp active:scale-[0.98]"
            >
              Começar agora <ArrowRight className="w-5 h-5" />
            </a>
            <a
              href="#como-funciona"
              className="text-sm font-semibold text-gray-300 hover:text-white transition-colors underline decoration-white/30 decoration-2 underline-offset-4"
            >
              Ver como funciona
            </a>
          </div>

          <div className="mt-12 md:mt-14 flex items-center justify-center lg:justify-start gap-10 md:gap-16 opacity-50">
            <div>
              <span className="text-2xl md:text-3xl font-black text-white block">4.9/5</span>
              <span className="text-[10px] uppercase font-bold tracking-widest text-gray-400">Avaliações</span>
            </div>
            <div className="h-10 w-px bg-white/10"></div>
            <div>
              <span className="text-2xl md:text-3xl font-black text-white block">100%</span>
              <span className="text-[10px] uppercase font-bold tracking-widest text-gray-400">Seguro</span>
            </div>
          </div>
        </div>

        {/* Right Column: Smartphone Mockup */}
        <div className="relative flex justify-center lg:justify-end flex-1 order-2 w-full max-w-[380px] md:max-w-none lg:translate-x-6 xl:translate-x-10">
          <div className="relative w-full max-w-[360px] md:max-w-[408px] h-[660px] md:h-[768px] bg-gradient-to-b from-[#0f1826] via-[#0b111d] to-[#0a0f18] rounded-[42px] md:rounded-[48px] border-[8px] md:border-[10px] border-[#1a1c1e] shadow-[0_40px_110px_rgba(0,0,0,0.6)] overflow-hidden">
            {/* Notch */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-28 md:w-32 h-6 md:h-7 bg-[#1a1c1e] rounded-b-3xl z-20 shadow-[0_10px_30px_rgba(0,0,0,0.45)]"></div>

            {/* Phone Screenshot */}
            <div className="absolute inset-0">
              <img
                src={phoneChat}
                alt="Conversa no WhatsApp mostrando o fluxo do Followback"
                className="w-full h-full object-cover object-top"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-b from-black/5 via-transparent to-black/8 pointer-events-none"></div>
            </div>
          </div>

          {/* Subtle glow behind phone */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[135%] h-[135%] bg-gradient-to-br from-purple-500/12 to-pink-500/12 blur-[120px] -z-10"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
