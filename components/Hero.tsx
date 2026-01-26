
import React from 'react';
import { ArrowRight, ShieldCheck, FileText, CheckCircle2 } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <section className="relative pt-32 pb-16 lg:pt-52 lg:pb-32 px-6">
      {/* Background Orbs */}
      <div className="absolute top-1/4 -left-20 w-64 h-64 md:w-96 md:h-96 bg-purple-600/10 rounded-full blur-[100px] -z-10 animate-pulse"></div>
      <div className="absolute bottom-1/4 -right-20 w-80 h-80 md:w-[400px] md:h-[400px] bg-pink-600/5 rounded-full blur-[120px] -z-10 animate-pulse" style={{animationDelay: '2s'}}></div>

      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
        
        {/* Left Column: Text Content */}
        <div className="relative z-10 text-center lg:text-left flex-1 order-2 lg:order-1">
          <div className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-white/5 border border-white/10 text-[10px] md:text-xs font-bold text-gray-300 mb-6 md:mb-8 tracking-[0.15em] uppercase">
            <ShieldCheck className="w-4 h-4 text-whatsapp" />
            Privacidade em Primeiro Lugar
          </div>
          
          <h1 className="text-4xl md:text-5xl lg:text-7xl font-extrabold text-white mb-6 md:mb-8 leading-[1.1] tracking-tight">
            Descubra quem não te segue <span className="text-gray-400">em segundos.</span>
          </h1>
          
          <p className="text-base md:text-xl text-gray-400 mb-8 md:mb-12 leading-relaxed max-w-xl mx-auto lg:mx-0 font-medium">
            O Followback usa seus próprios dados exportados para limpar sua lista de forma 100% segura. Sem login, sem senhas, direto no WhatsApp.
          </p>
          
          <div className="flex flex-col sm:flex-row items-center gap-6 justify-center lg:justify-start">
            <a
              href="#comecar"
              className="w-full sm:w-auto px-10 py-5 rounded-2xl bg-whatsapp text-white font-extrabold text-lg flex items-center justify-center gap-3 hover:bg-[#20bd5a] transition-all transform hover:-translate-y-1 glow-whatsapp active:scale-[0.98]"
            >
              Começar agora <ArrowRight className="w-5 h-5" />
            </a>
            <div className="flex items-center gap-3">
              <div className="flex -space-x-3">
                {[1,2,3].map(i => (
                  <div key={i} className="w-10 h-10 rounded-full border-2 border-[#050505] bg-gray-800 flex items-center justify-center overflow-hidden">
                     <img src={`https://api.dicebear.com/7.x/avataaars/svg?seed=${i + 10}`} alt="User" />
                  </div>
                ))}
              </div>
              <p className="text-[10px] text-gray-500 font-bold uppercase tracking-widest">
                +10k ativos
              </p>
            </div>
          </div>

          <div className="mt-12 md:mt-16 flex items-center justify-center lg:justify-start gap-10 md:gap-16 opacity-40">
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
        <div className="relative flex justify-center flex-1 order-1 lg:order-2 w-full max-w-[320px] md:max-w-none">
          <div className="relative w-full max-w-[310px] h-[580px] md:h-[630px] bg-[#0b0e11] rounded-[45px] border-[8px] md:border-[10px] border-[#1a1c1e] shadow-[0_40px_100px_rgba(0,0,0,0.7)] overflow-hidden float-animation">
            {/* Notch */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-28 md:w-32 h-6 md:h-7 bg-[#1a1c1e] rounded-b-3xl z-20"></div>
            
            {/* WhatsApp UI Simulation */}
            <div className="h-full flex flex-col bg-[#0b141a] text-[#e9edef] font-sans">
              {/* Header */}
              <div className="bg-[#202c33] p-4 pt-10 md:pt-12 flex items-center gap-3 border-b border-white/5">
                <div className="w-8 h-8 md:w-9 md:h-9 rounded-full bg-gradient-to-br from-whatsapp to-green-700 flex items-center justify-center text-white font-bold text-xs md:text-sm shadow-inner">M</div>
                <div>
                  <div className="font-bold text-xs md:text-sm">Marcia Followback</div>
                  <div className="text-[9px] md:text-[10px] text-whatsapp font-bold">online</div>
                </div>
              </div>

              {/* Chat Content */}
              <div className="flex-1 p-3 md:p-4 space-y-4 overflow-y-auto overflow-x-hidden">
                {/* Bot Message 1 */}
                <div className="bg-[#202c33] rounded-2xl rounded-tl-none p-3 md:p-3.5 max-w-[85%] relative shadow-sm">
                  <p className="text-[12px] md:text-[13px] leading-relaxed">
                    Agora é bem simples: basta me enviar aqui o <strong>arquivo ZIP</strong> que você baixou do Instagram. 📦
                  </p>
                </div>

                {/* User Message (ZIP File) */}
                <div className="flex justify-end">
                  <div className="bg-[#005c4b] rounded-2xl rounded-tr-none p-3 md:p-3.5 max-w-[85%] relative border border-white/5">
                    <div className="flex items-center gap-3">
                      <div className="bg-black/20 p-2 rounded-xl">
                        <FileText className="w-5 h-5 md:w-6 md:h-6 text-[#25d366]" />
                      </div>
                      <div className="overflow-hidden">
                        <div className="truncate font-bold text-[11px] md:text-[12px]">insta_dados.zip</div>
                        <div className="text-[9px] text-gray-300">749 kB • ZIP</div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Bot Message (Result) */}
                <div className="bg-[#202c33] rounded-2xl rounded-tl-none p-3 md:p-4 max-w-[92%] relative shadow-lg border border-white/5">
                  <p className="font-black text-[10px] md:text-xs mb-3 flex items-center gap-2">📊 Relatório Final ✅</p>
                  <div className="space-y-2 text-[11px] md:text-[12px]">
                    <div className="flex justify-between text-gray-400"><span>Seguidores:</span> <span className="text-white font-bold">1.531</span></div>
                    <div className="flex justify-between text-gray-400"><span>Seguindo:</span> <span className="text-white font-bold">650</span></div>
                    <div className="pt-2 border-t border-white/10 mt-2 flex justify-between">
                      <span className="text-whatsapp font-bold">Amigos Reais:</span>
                      <span className="text-whatsapp font-black">447</span>
                    </div>
                    <div className="flex justify-between text-orange-400 font-bold bg-orange-400/5 p-2 rounded-lg mt-1">
                      <span>Não te seguem:</span>
                      <span>203</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Input Area */}
              <div className="p-3 md:p-4 bg-[#202c33] flex items-center gap-3">
                <div className="flex-1 bg-[#2a3942] rounded-2xl px-4 py-2 text-gray-500 text-[10px] md:text-xs">
                  Responda SIM...
                </div>
                <div className="w-8 h-8 md:w-10 md:h-10 rounded-full bg-whatsapp flex items-center justify-center shadow-lg">
                  <ArrowRight className="w-4 h-4 md:w-5 md:h-5 text-white" />
                </div>
              </div>
            </div>
          </div>
          
          {/* Subtle glow behind phone */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-gradient-to-br from-purple-500/10 to-pink-500/10 blur-[100px] -z-10"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
