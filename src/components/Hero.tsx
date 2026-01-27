
import React from 'react';
import { ArrowRight, CheckCircle2, Mic, Play } from 'lucide-react';

const Hero: React.FC = () => {
  const quickPoints = [
    'Registro por áudio',
    'Sem burocracia',
    'Nutri 24h por dia',
  ];

  return (
    <section className="relative overflow-hidden pt-28 pb-16 sm:pt-32 sm:pb-24 px-4 sm:px-6">
      {/* Background glows */}
      <div className="absolute -left-24 top-10 w-72 h-72 sm:w-[380px] sm:h-[380px] bg-emerald-500/15 rounded-full blur-[120px] -z-10"></div>
      <div className="absolute -right-32 bottom-6 w-96 h-96 sm:w-[460px] sm:h-[460px] bg-emerald-400/10 rounded-full blur-[160px] -z-10"></div>

      <div className="max-w-screen-xl mx-auto grid grid-cols-1 lg:grid-cols-[1.05fr,0.95fr] gap-12 lg:gap-16 items-center">
        {/* Left Column: Text Content */}
        <div className="relative z-10 text-center lg:text-left flex flex-col gap-6 order-2 lg:order-1">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-100 text-[11px] font-semibold self-center lg:self-start shadow-inner shadow-emerald-500/10">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
            Lista de espera aberta
          </div>

          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-white leading-[1.05] tracking-tight">
            Entre na Lista de Espera
          </h1>

          <p className="text-base sm:text-lg text-gray-300 leading-relaxed max-w-2xl mx-auto lg:mx-0">
            Já no ar e liberando acessos aos poucos: fale com a Márcia AI por
            áudio, ela entende, registra calorias e macros na hora, mostra saldo
            diário e evolução semanal — tudo direto no WhatsApp, sem instalar
            app.
          </p>

          <div className="flex flex-col sm:flex-row items-center gap-3 sm:gap-4 justify-center lg:justify-start">
            <a
              href="#comecar"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl bg-whatsapp text-black font-extrabold text-base sm:text-lg shadow-xl shadow-emerald-500/25 hover:-translate-y-[2px] transition-all active:scale-[0.98]"
            >
              Entrar na Lista de Espera <ArrowRight className="w-5 h-5" />
            </a>
            <span className="text-[11px] uppercase tracking-[0.25em] font-bold text-emerald-100/80">
              Vagas liberadas semanalmente
            </span>
          </div>

          <div className="flex flex-wrap items-center justify-center lg:justify-start gap-3 pt-2 border-t border-white/5">
            {quickPoints.map((item) => (
              <div
                key={item}
                className="flex items-center gap-2 text-sm text-gray-200 bg-white/5 rounded-full px-4 py-2 border border-white/10"
              >
                <CheckCircle2 className="w-4 h-4 text-whatsapp" />
                <span className="font-semibold">{item}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Right Column: Smartphone Mockup */}
        <div className="order-1 lg:order-2 relative flex justify-center">
          <div className="absolute -inset-10 bg-emerald-500/8 blur-[100px] -z-10"></div>

          <div className="relative w-full max-w-[380px] sm:max-w-[430px] float-animation">
            <div className="absolute left-1/2 -translate-x-1/2 -top-3 px-3 py-1 rounded-full glass border border-white/10 text-[11px] text-gray-200 shadow-lg">
              Prévia real no WhatsApp
            </div>

            <div className="mt-6 rounded-[32px] bg-[#0b1116] border-[9px] border-[#0f1b23] shadow-[0_35px_120px_rgba(0,0,0,0.65)] overflow-hidden">
              <div className="h-full flex flex-col bg-[#0b141a] text-[#e9edef] font-sans">
                {/* Header */}
                <div className="bg-[#111c24] p-4 flex items-center gap-3 border-b border-white/5">
                  <div className="w-9 h-9 rounded-full bg-gradient-to-br from-whatsapp to-emerald-600 flex items-center justify-center text-white font-bold text-sm shadow-inner">
                    M
                  </div>
                  <div className="flex-1">
                    <div className="font-bold text-sm">Márcia AI</div>
                    <div className="text-[10px] text-whatsapp font-bold">
                      online
                    </div>
                  </div>
                  <div className="flex gap-3 text-gray-500">
                    <Mic className="w-4 h-4" />
                    <Play className="w-4 h-4" />
                  </div>
                </div>

                {/* Chat Content */}
                <div className="flex-1 p-3 sm:p-4 space-y-3 overflow-hidden">
                  <div className="bg-[#1f2c33] rounded-2xl rounded-tl-none p-3 sm:p-3.5 max-w-[90%] shadow-sm text-[12px] leading-relaxed">
                    Perfeito, vamos registrar seu almoço! Me conta agora o que
                    você comeu e em qual data foi (hoje ou outra data, informando
                    dia/mês/ano).
                  </div>

                  <div className="bg-[#1f2c33] rounded-2xl rounded-tl-none p-3 sm:p-3.5 max-w-[90%] shadow-sm text-[12px] leading-relaxed">
                    Beleza, vamos registrar seu almoço de hoje. O que você comeu?
                    Pode listar os itens e, se quiser, as quantidades (ex: 2
                    colheres de arroz, 1 filé de frango, salada).
                  </div>

                  <div className="flex justify-end">
                    <div className="bg-[#075e54] rounded-2xl rounded-tr-none p-3 sm:p-3.5 max-w-[82%] border border-white/5 shadow-lg space-y-2">
                      <div className="flex items-center gap-3">
                        <div className="w-10 h-10 rounded-full bg-black/10 flex items-center justify-center">
                          <Mic className="w-5 h-5 text-emerald-200" />
                        </div>
                        <div className="flex-1 h-2 rounded-full bg-emerald-200/30 overflow-hidden">
                          <div className="h-full w-4/5 bg-emerald-300 rounded-full animate-pulse"></div>
                        </div>
                        <span className="text-[10px] text-emerald-50">0:51</span>
                      </div>
                    </div>
                  </div>

                  <div className="bg-[#1f2c33] rounded-2xl rounded-tl-none p-3 sm:p-4 max-w-[95%] shadow-lg border border-white/5 space-y-3">
                    <div className="flex items-center gap-2 text-[11px] font-semibold text-emerald-200">
                      <CheckCircle2 className="w-4 h-4" />
                      Refeição criada com sucesso!
                    </div>

                    <div className="space-y-2 text-[12px]">
                      <div className="flex justify-between text-gray-300">
                        <span className="font-semibold">Almoço</span>
                        <span className="text-xs text-gray-400">hoje</span>
                      </div>
                      <div className="grid grid-cols-4 gap-2 text-center text-[11px] font-semibold">
                        <div className="bg-black/10 rounded-xl py-2">
                          <div className="text-emerald-300 text-sm font-black">
                            595
                          </div>
                          <p className="text-gray-400 text-[10px] uppercase tracking-wide">
                            kcal
                          </p>
                        </div>
                        <div className="bg-black/10 rounded-xl py-2">
                          <div className="text-amber-300 text-sm font-black">
                            58.3 g
                          </div>
                          <p className="text-gray-400 text-[10px] uppercase tracking-wide">
                            Proteínas
                          </p>
                        </div>
                        <div className="bg-black/10 rounded-xl py-2">
                          <div className="text-cyan-300 text-sm font-black">
                            55 g
                          </div>
                          <p className="text-gray-400 text-[10px] uppercase tracking-wide">
                            Carboidratos
                          </p>
                        </div>
                        <div className="bg-black/10 rounded-xl py-2">
                          <div className="text-orange-300 text-sm font-black">
                            13.4 g
                          </div>
                          <p className="text-gray-400 text-[10px] uppercase tracking-wide">
                            Gorduras
                          </p>
                        </div>
                      </div>
                      <div className="space-y-1 text-gray-300 mt-2">
                        <div className="text-[11px] font-semibold uppercase tracking-wide text-gray-400">
                          Itens adicionados:
                        </div>
                        <ul className="list-disc list-inside space-y-1 text-[11px]">
                          <li>Arroz branco com brócolis refogado</li>
                          <li>Peito de frango em cubos ao molho</li>
                          <li>Salada verde com azeite</li>
                        </ul>
                      </div>
                    </div>

                    <div className="w-max px-3 py-1 rounded-full bg-black/20 text-[10px] font-semibold text-gray-200 border border-white/10">
                      Macros instantâneas · 595 kcal · 58 g proteína
                    </div>
                  </div>
                </div>

                {/* Input Area */}
                <div className="p-3 sm:p-4 bg-[#111c24] flex items-center gap-3">
                  <div className="flex-1 bg-[#2a3942] rounded-2xl px-4 py-2 text-gray-500 text-[11px] sm:text-xs">
                    Diga o que você comeu...
                  </div>
                  <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-whatsapp flex items-center justify-center shadow-lg shadow-emerald-500/25">
                    <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 text-black" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
