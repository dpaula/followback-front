
import React, { useMemo, useState } from 'react';
import { useForm } from 'react-hook-form';
import { MessageCircle, CheckCircle2, Loader2, Share2, ShieldCheck, AlertTriangle, Phone } from 'lucide-react';
import { FormData, ApiResponse } from '../types';

const PreRegisterForm: React.FC = () => {
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [linkConvite, setLinkConvite] = useState('');
  const [feedback, setFeedback] = useState<{ type: 'success' | 'warning' | 'error' | 'info'; message: string } | null>(null);

  const refFromQuery = useMemo(
    () => new URLSearchParams(window.location.search).get('ref') || '',
    []
  );

  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm<FormData>({
    defaultValues: {
      urlOrigem: window.location.href,
      codigoConviteIndicador: refFromQuery,
    },
  });

  const formatPhone = (value: string) => {
    const numbers = value.replace(/\D/g, '');
    if (numbers.length <= 11) {
      let masked = numbers;
      if (numbers.length > 2) masked = `(${numbers.slice(0, 2)}) ${numbers.slice(2)}`;
      if (numbers.length > 7) masked = `(${numbers.slice(0, 2)}) ${numbers.slice(2, 7)}-${numbers.slice(7, 11)}`;
      return masked;
    }
    return value.slice(0, 15);
  };

  const onSubmit = async (data: FormData) => {
    setLoading(true);
    setFeedback(null);
    try {
      const cleanPhone = data.telefone.replace(/\D/g, '');
      const payload = {
        nome: data.nome.trim(),
        telefone: cleanPhone,
        codigoConviteIndicador: data.codigoConviteIndicador || undefined,
        urlOrigem: data.urlOrigem,
      };

      const phoneE164 = cleanPhone.startsWith('55') ? cleanPhone : `55${cleanPhone}`;
      const webhook = new URL('https://n8n.autevia.com.br/webhook/flow-start');
      webhook.searchParams.set('number', phoneE164);
      webhook.searchParams.set('name', payload.nome);
      if (payload.codigoConviteIndicador) webhook.searchParams.set('ref', payload.codigoConviteIndicador);
      webhook.searchParams.set('url', payload.urlOrigem);

      const response = await fetch(webhook.toString(), {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload),
      });

      if (!response.ok) {
        const errorBody = await response.json().catch(() => ({}));
        const err = new Error(errorBody?.message || 'Não foi possível concluir seu pré-cadastro.') as Error & {
          status?: number;
        };
        err.status = response.status;
        throw err;
      }

      const result: ApiResponse = await response.json();

      if (result.linkConvite) {
        setLinkConvite(result.linkConvite);
      }
      setFeedback({
        type: 'success',
        message: 'Acesso liberado! Agora é só abrir a conversa no WhatsApp.',
      });
      setSuccess(true);
    } catch (error) {
      console.error(error);
      const message =
        error instanceof Error
          ? error.message
          : 'Tivemos um problema. Tente novamente em instantes.';

      const status = (error as any)?.status as number | undefined;
      const normalized = message.toLowerCase();
      const isDuplicate =
        status === 409 ||
        normalized.includes('cadastr') ||
        normalized.includes('já está') ||
        normalized.includes('existe');

      if (isDuplicate) {
        setFeedback({
          type: 'warning',
          message: 'Esse número já está cadastrado. Reenviei o link pra você no WhatsApp.',
        });
      } else {
        setFeedback({
          type: 'error',
          message,
        });
      }
    } finally {
      setLoading(false);
    }
  };

  const shareViaWhatsApp = () => {
    if (!linkConvite) return;
    const text = `Olha que massa esse app para ver quem não te segue no Insta: ${linkConvite}`;
    window.open(`https://wa.me/?text=${encodeURIComponent(text)}`, '_blank');
  };

  return (
    <section
      id="comecar"
      className="py-20 md:py-32 px-5 md:px-6 flex flex-col items-center relative overflow-hidden bg-gradient-to-b from-[#0c1321] via-[#0c151c] to-[#0c1816]"
    >
      {/* Background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-[500px] h-[500px] bg-whatsapp/5 rounded-full blur-[120px] -z-10"></div>

      <div className="max-w-2xl text-center mb-12 md:mb-16 relative">
        <h2 className="text-3xl md:text-5xl font-black text-white mb-4 tracking-tight italic">Tudo Pronto?</h2>
        <p className="text-gray-400 text-base md:text-lg font-medium">Preencha abaixo para liberar o acesso da Marcia no seu WhatsApp.</p>
      </div>

      <div className="w-full max-w-lg relative">
        <div className="relative overflow-hidden rounded-[2rem] md:rounded-[3rem] shadow-2xl border border-white/10 bg-gradient-to-b from-white/[0.04] via-white/[0.025] to-white/[0.035] backdrop-blur-xl">
          <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/20 to-transparent"></div>

          {!success ? (
            <>
              <div className="flex items-center gap-3 text-whatsapp font-bold text-[10px] md:text-xs uppercase tracking-[0.2em] mb-6 md:mb-8 px-6 pt-6 md:px-8 md:pt-8">
                <ShieldCheck className="w-5 h-5" />
                Seus dados estão protegidos
              </div>

              {feedback && (
                <div
                  className={`mx-6 md:mx-8 mb-6 rounded-2xl px-4 py-3 flex items-start gap-3 text-sm animate-fade-in ${
                    feedback.type === 'warning'
                      ? 'bg-amber-400/10 border border-amber-400/30 text-amber-100'
                      : feedback.type === 'error'
                      ? 'bg-red-500/10 border border-red-500/30 text-red-100'
                      : 'bg-whatsapp/10 border border-whatsapp/30 text-white'
                  }`}
                >
                  {feedback.type === 'warning' ? (
                    <AlertTriangle className="w-4 h-4 mt-0.5" />
                  ) : feedback.type === 'error' ? (
                    <AlertTriangle className="w-4 h-4 mt-0.5" />
                  ) : (
                    <CheckCircle2 className="w-4 h-4 mt-0.5" />
                  )}
                  <span className="leading-relaxed">{feedback.message}</span>
                </div>
              )}

              <form onSubmit={handleSubmit(onSubmit)} className="space-y-6 px-6 pb-14 md:px-8 md:pb-12">
                <div className="space-y-2.5">
                  <label className="text-[11px] font-black text-gray-400 uppercase tracking-[0.2em] ml-1">Primeiro Nome</label>
                  <input
                    type="text"
                    placeholder="Seu nome"
                    className="w-full bg-white/[0.02] border border-white/10 rounded-2xl px-5 py-4 focus:ring-4 focus:ring-whatsapp/15 focus:border-whatsapp/40 focus:outline-none transition-all placeholder:text-gray-600 text-white shadow-inner shadow-black/10"
                    {...register('nome', { required: 'Qual o seu nome?' })}
                  />
                  {errors.nome && <p className="text-red-500 text-[10px] font-black uppercase mt-1 ml-1">{errors.nome.message}</p>}
                </div>

                <div className="space-y-2.5">
                  <label className="text-[11px] font-black text-gray-400 uppercase tracking-[0.2em] ml-1">WhatsApp</label>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-3 flex items-center text-gray-500">
                      <Phone className="w-4 h-4" />
                    </div>
                    <input
                      type="tel"
                      placeholder="(00) 00000-0000"
                      className="w-full bg-white/[0.02] border border-white/10 rounded-2xl pl-10 pr-5 py-4 focus:ring-4 focus:ring-whatsapp/15 focus:border-whatsapp/40 focus:outline-none transition-all placeholder:text-gray-600 text-white shadow-inner shadow-black/10"
                      {...register('telefone', { 
                        required: 'Precisamos do seu número',
                        pattern: { value: /^\(\d{2}\) \d{5}-\d{4}$/, message: 'Formato inválido' }
                      })}
                      onChange={(e) => setValue('telefone', formatPhone(e.target.value), { shouldValidate: true })}
                    />
                  </div>
                  {errors.telefone && <p className="text-red-500 text-[10px] font-black uppercase mt-1 ml-1">{errors.telefone.message}</p>}
                </div>

                <input type="hidden" {...register('urlOrigem')} />
                <input type="hidden" {...register('codigoConviteIndicador')} />

                <button
                  type="submit"
                  disabled={loading}
                  className="w-full bg-whatsapp hover:bg-[#20bd5a] text-white font-black py-4.5 md:py-5 rounded-2xl flex items-center justify-center gap-3 transition-all transform active:scale-95 disabled:opacity-60 mt-4 text-base md:text-lg shadow-[0_12px_30px_rgba(37,211,102,0.25)] sticky bottom-0 md:static"
                >
                  {loading ? <Loader2 className="w-6 h-6 animate-spin" /> : <>Receber Acesso <MessageCircle className="w-5 h-5" /></>}
                </button>

                <p className="text-[10px] text-center text-gray-500 font-bold uppercase tracking-widest mt-6">
                  Não solicitamos senha. Não guardamos arquivos.
                </p>
              </form>
            </>
          ) : (
            <div className="text-center py-6 animate-fade-in">
              <div className="w-20 h-20 bg-whatsapp/20 rounded-[2rem] flex items-center justify-center mx-auto mb-8 glow-whatsapp transform rotate-6">
                <CheckCircle2 className="w-10 h-10 text-whatsapp" />
              </div>
              <h2 className="text-2xl md:text-3xl font-black text-white mb-4">Sucesso Total!</h2>
              <p className="text-gray-400 mb-10 leading-relaxed font-medium">As instruções acabaram de chegar. Abra seu WhatsApp e envie o seu arquivo ZIP para começar a análise.</p>
              
              {linkConvite && (
                <div className="space-y-6">
                  <button
                    onClick={shareViaWhatsApp}
                    className="w-full py-5 bg-whatsapp hover:bg-[#20bd5a] text-white rounded-2xl flex items-center justify-center gap-3 font-extrabold transition-all transform hover:-translate-y-1"
                  >
                    Compartilhar Link <Share2 className="w-5 h-5" />
                  </button>
                  <div className="bg-white/5 border border-white/5 p-3 rounded-xl">
                    <p className="text-[9px] text-gray-600 font-black uppercase tracking-[0.2em] mb-1">Seu link pessoal</p>
                    <p className="text-[11px] font-mono text-gray-500 truncate">{linkConvite}</p>
                  </div>
                </div>
              )}
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default PreRegisterForm;
