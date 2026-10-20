type Props = {
  nome: string
  genero: string
  bio: string
}

function CartaoAtracao({ nome, genero, bio }: Props) {
  return (
    <article className="bg-card p-6 rounded-2xl shadow-md border border-slate-800 flex flex-col justify-between hover:border-slate-700 transition-colors">
      <div>
        <span className="text-xs font-bold text-primaria uppercase tracking-widest">{genero}</span>
        <h3 className="text-xl font-bold text-texto mt-2">{nome}</h3>
        <p className="text-slate-400 mt-3 text-sm leading-relaxed">{bio}</p>
      </div>
    </article>
  )
}

export default CartaoAtracao
