import { useState } from 'react'
import { ingressos } from '../data/evento'

function Inscricao() {
  const [email, setEmail] = useState('')
  const [ingressoSelecionado, setIngressoSelecionado] = useState(ingressos[0].tipo)
  const [enviado, setEnviado] = useState(false)

  function enviar(e) {
    e.preventDefault()
    setEnviado(true)
  }

  return (
    <section id="inscricao" className="bg-card px-4 py-20 border-t border-slate-900">
      <div className="max-w-md mx-auto text-center">
        <h2 className="text-3xl font-bold text-texto mb-3">Garanta Seu Lugar</h2>
        <p className="text-slate-400 mb-8">As vagas são limitadas pelo espaço físico. Escolha sua categoria:</p>

        {enviado ? (
          <div role="status" className="bg-green-950 text-primaria p-6 rounded-xl font-medium border border-primaria/30 text-left">
            🚀 <strong>Inscrição confirmada!</strong> Enviamos o link do Discord oficial e as diretrizes do regulamento para o e-mail: <strong>{email}</strong> na modalidade <strong>{ingressoSelecionado}</strong>.
          </div>
        ) : (
          <form onSubmit={enviar} className="flex flex-col gap-4 text-left bg-fundo p-6 rounded-2xl border border-slate-800 shadow-xl">
            <label className="flex flex-col gap-2 font-semibold text-slate-300 text-sm">
              E-mail do Capitão / Participante
              <input
                type="email"
                required
                placeholder="seu-email@link.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full px-4 py-3 rounded-xl bg-card border border-slate-800 text-texto focus:outline-none focus:ring-2 focus:ring-primaria focus:border-transparent min-h-[44px]"
              />
            </label>

            <label className="flex flex-col gap-2 font-semibold text-slate-300 text-sm">
              Tipo de Inscrição
              <select
                value={ingressoSelecionado}
                onChange={(e) => setIngressoSelecionado(e.target.value)}
                className="w-full px-4 py-3 rounded-xl bg-card border border-slate-800 text-texto focus:outline-none focus:ring-2 focus:ring-primaria focus:border-transparent min-h-[44px]"
              >
                {ingressos.map((ing) => (
                  <option key={ing.tipo} value={ing.tipo}>
                    {ing.tipo} — {ing.descricao}
                  </option>
                ))}
              </select>
            </label>

            <button type="submit" className="w-full mt-2 bg-primaria hover:bg-green-600 text-fundo font-black py-3 rounded-xl shadow-md transition-colors cursor-pointer min-h-[44px]">
              CONFIRMAR INSCRIÇÃO
            </button>
          </form>
        )}
      </div>
    </section>
  )
}

export default Inscricao
