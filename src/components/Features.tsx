
import React from 'react';
import { List, Layout, Copy, ShieldOff, Zap, Lock } from 'lucide-react';

const Features: React.FC = () => {
  const features = [
    {
      icon: <List className="w-7 h-7 text-purple-400" />,
      title: "IA Especializada",
      desc: "Análise profunda que separa amigos reais de perfis comerciais e inativos."
    },
    {
      icon: <Layout className="w-7 h-7 text-pink-400" />,
      title: "Interface WhatsApp",
      desc: "Nada de instalar apps novos. Receba tudo onde você já passa o dia."
    },
    {
      icon: <Copy className="w-7 h-7 text-blue-400" />,
      title: "Ação Rápida",
      desc: "Copie os arrobas dos fantasmas e faça a limpeza em tempo recorde."
    },
    {
      icon: <ShieldOff className="w-7 h-7 text-orange-400" />,
      title: "Segurança Ativa",
      desc: "Como não logamos na sua conta, o Instagram nunca saberá que você usou o app."
    },
    {
      icon: <Zap className="w-7 h-7 text-amber-400" />,
      title: "Velocidade Real",
      desc: "Processamento em nuvem que entrega resultados em menos de 10 segundos."
    },
    {
      icon: <Lock className="w-7 h-7 text-whatsapp" />,
      title: "Privacidade Total",
      desc: "Seus dados de exportação são processados localmente e nunca arquivados."
    }
  ];

  return (
    <section id="recursos" className="py-32 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-10">
          {features.map((f, i) => (
            <div key={i} className="group p-10 rounded-[2.5rem] glass hover:bg-white/[0.06] hover:border-white/20 transition-all duration-500">
              <div className="w-14 h-14 rounded-2xl bg-white/5 flex items-center justify-center mb-8 group-hover:scale-110 transition-transform duration-500 shadow-inner">
                {f.icon}
              </div>
              <h3 className="text-xl font-black text-white mb-4 group-hover:text-whatsapp transition-colors">{f.title}</h3>
              <p className="text-gray-400 text-sm leading-relaxed font-medium">{f.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
