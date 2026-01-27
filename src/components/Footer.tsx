
import React from 'react';
import { Instagram, Twitter, Facebook, ArrowUpRight, Activity } from 'lucide-react';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-24 px-6 border-t border-white/5 bg-black/40 backdrop-blur-md">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-16 mb-24">
          {/* Brand Column */}
          <div className="md:col-span-2 space-y-8">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-emerald-500 flex items-center justify-center shadow-lg shadow-emerald-500/30">
                <Activity className="w-6 h-6 text-black" />
              </div>
              <span className="text-2xl font-black tracking-tighter text-white uppercase italic">
                AI Fit
              </span>
            </div>
            <p className="text-gray-400 text-base leading-relaxed max-w-sm font-medium">
              Nutrição no WhatsApp: registre por áudio, receba macros instantâneas e acompanhe seu saldo diário sem instalar nada.
            </p>
            <div className="flex gap-5">
              {[Instagram, Twitter, Facebook].map((Icon, i) => (
                <a key={i} href="#" className="w-12 h-12 rounded-2xl bg-white/5 border border-white/5 flex items-center justify-center text-gray-500 hover:text-white hover:border-white/20 transition-all hover:-translate-y-1">
                  <Icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </div>

          {/* Nav Columns */}
          <div>
            <h4 className="font-black text-gray-500 mb-8 text-[10px] uppercase tracking-[0.3em]">Produto</h4>
            <ul className="space-y-5 text-sm text-gray-400 font-bold">
              <li><a href="#como-funciona" className="hover:text-white transition-colors flex items-center gap-2 group">Processo <ArrowUpRight className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-all" /></a></li>
              <li><a href="#recursos" className="hover:text-white transition-colors flex items-center gap-2 group">Benefícios <ArrowUpRight className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-all" /></a></li>
              <li><a href="#faq" className="hover:text-white transition-colors flex items-center gap-2 group">Suporte <ArrowUpRight className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-all" /></a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-black text-gray-500 mb-8 text-[10px] uppercase tracking-[0.3em]">Legal</h4>
            <ul className="space-y-5 text-sm text-gray-400 font-bold">
              <li><a href="#" className="hover:text-white transition-colors">Termos de Uso</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Privacidade</a></li>
              <li><a href="#" className="text-whatsapp hover:brightness-110 transition-colors">Contato Direto</a></li>
            </ul>
          </div>
        </div>

        <div className="pt-10 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-8">
          <p className="text-[11px] font-bold text-gray-600 uppercase tracking-widest">
            © {currentYear} AI Fit • Macros no WhatsApp.
          </p>
          <div className="text-[9px] text-gray-700 font-black uppercase tracking-[0.4em] text-center md:text-right">
            Cuide-se com orientação profissional quando necessário.
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
