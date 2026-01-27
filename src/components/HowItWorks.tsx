
import React from 'react';
import { Smartphone, Download, Send, Instagram } from 'lucide-react';

const HowItWorks: React.FC = () => {
  return (
    <section
      id="como-funciona"
      className="py-20 px-6 relative bg-gradient-to-b from-[#0c111a] via-[#0c121d] to-[#0c1321]"
    >
      <div className="max-w-[1400px] mx-auto">
        <div className="text-center mb-12 md:mb-20">
          <h2 className="text-3xl md:text-5xl font-extrabold text-white mb-4 md:mb-6 tracking-tight">Como funciona?</h2>
          <p className="text-gray-400 text-base md:text-lg max-w-2xl mx-auto font-medium">Um processo transparente, rápido e privado do início ao fim.</p>
        </div>

        {/* Mobile carousel */}
        <div className="md:hidden -mx-6 px-6 overflow-x-auto pb-4 flex gap-4 snap-x snap-mandatory">
          {[1, 2, 3, 4].map((step) => (
            <div key={step} className="min-w-[82vw] snap-center glass p-7 rounded-[2rem] border border-white/10">
              {step === 1 && (
                <>
                  <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-purple-600 to-indigo-700 flex items-center justify-center font-black text-white text-xl mb-6 shadow-xl shadow-purple-600/20">1</div>
                  <h3 className="text-xl font-bold text-white mb-3">Cadastro rápido</h3>
                  <p className="text-gray-400 text-sm leading-relaxed mb-4 font-medium">
                    Informe só primeiro nome e WhatsApp. Usamos apenas para gerar o relatório, guardamos por até 24h e expira automático.
                  </p>
                  <p className="text-gray-400 text-sm leading-relaxed font-medium">
                    Após enviar, você recebe mensagem da <strong>Marcia AI</strong> no WhatsApp.
                  </p>
                </>
              )}
              {step === 2 && (
                <>
                  <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-pink-600 to-rose-700 flex items-center justify-center font-black text-white text-xl mb-6 shadow-xl shadow-pink-600/20">2</div>
                  <h3 className="text-xl font-bold text-white mb-3">Exportar dados do Instagram</h3>
                  <p className="text-gray-400 text-sm leading-relaxed mb-4 font-medium">
                    Dentro do Instagram, peça a exportação oficial dos seus dados. Não usamos login, não pedimos senha, tudo acontece no próprio Instagram.
                  </p>
                  <div className="flex items-center gap-2 text-whatsapp font-semibold text-sm">
                    <Instagram className="w-5 h-5" />
                    <a href="https://www.instagram.com/reel/DUBs9nAjnlz/?igsh=ejFrOW9pMW4zMzNp" target="_blank" rel="noreferrer" className="underline decoration-white/40 underline-offset-4">
                      Ver vídeo: Como exportar seus dados
                    </a>
                  </div>
                </>
              )}
              {step === 3 && (
                <>
                  <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-blue-500 to-indigo-600 flex items-center justify-center font-black text-white text-xl mb-6 shadow-xl shadow-blue-500/20">3</div>
                  <h3 className="text-xl font-bold text-white mb-3">Baixar e compartilhar o ZIP</h3>
                  <p className="text-gray-400 text-sm leading-relaxed mb-4 font-medium">
                    Quando o Instagram gerar o arquivo, baixe o ZIP e envie direto para a Marcia AI no WhatsApp.
                  </p>
                  <div className="flex items-center gap-2 text-whatsapp font-semibold text-sm">
                    <Instagram className="w-5 h-5" />
                    <a href="https://www.instagram.com/reel/DUBGvIEDgwp/?igsh=YnVhMmJhc2R3MTJu" target="_blank" rel="noreferrer" className="underline decoration-white/40 underline-offset-4">
                      Ver vídeo: Como baixar e enviar o ZIP
                    </a>
                  </div>
                </>
              )}
              {step === 4 && (
                <>
                  <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-whatsapp to-green-700 flex items-center justify-center font-black text-white text-xl mb-6 shadow-xl shadow-whatsapp/20">4</div>
                  <h3 className="text-xl font-bold text-white mb-3">Relatório instantâneo</h3>
                  <p className="text-gray-400 text-sm leading-relaxed mb-4 font-medium">
                    A Marcia processa e entrega no WhatsApp: quem não te segue, seguidores, seguindo, mútuos e links clicáveis para cada perfil.
                  </p>
                  <p className="text-gray-400 text-sm leading-relaxed font-medium">
                    Tudo no WhatsApp, em segundos, sem guardar dados sensíveis.
                  </p>
                </>
              )}
            </div>
          ))}
        </div>

        {/* Desktop grid */}
        <div className="hidden md:grid grid-cols-1 md:grid-cols-4 gap-8 lg:gap-12 relative">
          {/* Step 1 */}
          <div className="glass p-8 rounded-[2.5rem] relative group hover:bg-white/[0.05] transition-all duration-500 border border-white/10">
            <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-purple-600 to-indigo-700 flex items-center justify-center font-black text-white text-2xl mb-8 shadow-xl shadow-purple-600/20 group-hover:scale-110 transition-transform">1</div>
            <h3 className="text-2xl font-bold text-white mb-4">Cadastro rápido</h3>
            <p className="text-gray-400 text-sm leading-relaxed mb-4 font-medium">
              Informe só primeiro nome e WhatsApp. Usamos apenas para gerar o relatório, guardamos por até 24h e expira automático.
            </p>
            <p className="text-gray-400 text-sm leading-relaxed font-medium">
              Você recebe uma mensagem da <strong>Marcia AI</strong> no WhatsApp.
            </p>
          </div>

          {/* Step 2 */}
          <div className="glass p-8 rounded-[2.5rem] relative group hover:bg-white/[0.05] transition-all duration-500 border border-white/10">
            <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-pink-600 to-rose-700 flex items-center justify-center font-black text-white text-2xl mb-8 shadow-xl shadow-pink-600/20 group-hover:scale-110 transition-transform">2</div>
            <h3 className="text-2xl font-bold text-white mb-4">Exportar dados do Instagram</h3>
            <p className="text-gray-400 text-sm leading-relaxed mb-6 font-medium">
              Dentro do Instagram, peça a exportação oficial. Não usamos login, não pedimos senha, tudo acontece no próprio Instagram.
            </p>
            <div className="flex items-center gap-2 text-whatsapp font-semibold text-sm">
              <Instagram className="w-5 h-5" />
              <a href="https://www.instagram.com/reel/DUBs9nAjnlz/?igsh=ejFrOW9pMW4zMzNp" target="_blank" rel="noreferrer" className="underline decoration-white/40 underline-offset-4">
                Ver vídeo: Como exportar seus dados
              </a>
            </div>
          </div>

          {/* Step 3 */}
          <div className="glass p-8 rounded-[2.5rem] relative group hover:bg-white/[0.05] transition-all duration-500 border border-white/10">
            <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-blue-500 to-indigo-600 flex items-center justify-center font-black text-white text-2xl mb-8 shadow-xl shadow-blue-500/20 group-hover:scale-110 transition-transform">3</div>
            <h3 className="text-2xl font-bold text-white mb-4">Baixar e compartilhar o ZIP</h3>
            <p className="text-gray-400 text-sm leading-relaxed mb-6 font-medium">
              Quando o Instagram gerar o arquivo, baixe o ZIP e envie direto para a Marcia AI no WhatsApp.
            </p>
            <div className="flex items-center gap-2 text-whatsapp font-semibold text-sm">
              <Instagram className="w-5 h-5" />
              <a href="https://www.instagram.com/reel/DUBGvIEDgwp/?igsh=YnVhMmJhc2R3MTJu" target="_blank" rel="noreferrer" className="underline decoration-white/40 underline-offset-4">
                Ver vídeo: Como baixar e enviar o ZIP
              </a>
            </div>
          </div>

          {/* Step 4 */}
          <div className="glass p-8 rounded-[2.5rem] relative group hover:bg-white/[0.05] transition-all duration-500 border border-white/10">
            <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-whatsapp to-green-700 flex items-center justify-center font-black text-white text-2xl mb-8 shadow-xl shadow-whatsapp/20 group-hover:scale-110 transition-transform">4</div>
            <h3 className="text-2xl font-bold text-white mb-4">Relatório instantâneo</h3>
            <p className="text-gray-400 text-sm leading-relaxed mb-4 font-medium">
              A Marcia processa e entrega no WhatsApp: quem não te segue, seguidores, seguindo, mútuos e links clicáveis para cada perfil.
            </p>
            <p className="text-gray-400 text-sm leading-relaxed font-medium">
              Tudo no WhatsApp, em poucos segundos, sem armazenar dados sensíveis.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
