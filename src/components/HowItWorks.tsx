
import React from 'react';
import { Smartphone, Download, Send } from 'lucide-react';

const HowItWorks: React.FC = () => {
  return (
    <section id="como-funciona" className="py-24 px-6 relative">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-20">
          <h2 className="text-3xl md:text-5xl font-extrabold text-white mb-6 tracking-tight">Como funciona?</h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto font-medium">Um processo transparente e privado, do início ao fim.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12 relative">
          {/* Step 1 */}
          <div className="glass p-8 rounded-[2.5rem] relative group hover:bg-white/[0.05] transition-all duration-500">
            <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-purple-600 to-indigo-700 flex items-center justify-center font-black text-white text-2xl mb-8 shadow-xl shadow-purple-600/20 group-hover:scale-110 transition-transform">1</div>
            <h3 className="text-2xl font-bold text-white mb-4">Exportar dados</h3>
            <p className="text-gray-400 text-sm leading-relaxed mb-10 font-medium">
              Você gera suas listas oficialmente dentro do Instagram. Nós nunca pedimos acesso direto à sua conta.
            </p>
            <div className="flex gap-4 opacity-50">
              <div className="flex-1 aspect-[9/16] bg-white/5 rounded-2xl flex items-center justify-center border border-white/10">
                <Smartphone className="w-6 h-6 text-gray-500" />
              </div>
              <div className="flex-1 aspect-[9/16] bg-white/5 rounded-2xl flex items-center justify-center border border-white/10">
                <Smartphone className="w-6 h-6 text-gray-500" />
              </div>
            </div>
          </div>

          {/* Step 2 */}
          <div className="glass p-8 rounded-[2.5rem] relative group hover:bg-white/[0.05] transition-all duration-500">
            <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-pink-600 to-rose-700 flex items-center justify-center font-black text-white text-2xl mb-8 shadow-xl shadow-pink-600/20 group-hover:scale-110 transition-transform">2</div>
            <h3 className="text-2xl font-bold text-white mb-4">Baixar o ZIP</h3>
            <p className="text-gray-400 text-sm leading-relaxed mb-10 font-medium">
              O Instagram envia o arquivo compactado para o seu e-mail. Esse arquivo contém as listas de seguidores.
            </p>
            <div className="aspect-video bg-white/5 rounded-2xl flex items-center justify-center border border-white/10 group-hover:border-pink-500/30 transition-colors">
              <Download className="w-12 h-12 text-pink-500 animate-bounce" />
            </div>
          </div>

          {/* Step 3 */}
          <div className="glass p-8 rounded-[2.5rem] relative group hover:bg-white/[0.05] transition-all duration-500">
            <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-whatsapp to-green-700 flex items-center justify-center font-black text-white text-2xl mb-8 shadow-xl shadow-whatsapp/20 group-hover:scale-110 transition-transform">3</div>
            <h3 className="text-2xl font-bold text-white mb-4">Relatório Instantâneo</h3>
            <p className="text-gray-400 text-sm leading-relaxed mb-10 font-medium">
              Envie o ZIP para a Marcia no WhatsApp e receba quem não te segue de volta em segundos.
            </p>
            <div className="bg-whatsapp/10 rounded-2xl p-6 border border-whatsapp/20 flex items-center gap-5">
              <div className="w-10 h-10 rounded-full bg-whatsapp flex items-center justify-center flex-shrink-0">
                 <Send className="w-5 h-5 text-white" />
              </div>
              <div className="flex-1 space-y-2">
                <div className="h-2 w-full bg-white/10 rounded-full"></div>
                <div className="h-2 w-2/3 bg-white/10 rounded-full"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
