import Cabecalho from './components/Cabecalho'
import Hero from './components/Hero'
import Sobre from './components/Sobre'
import Programacao from './components/Programacao'
import Atracoes from './components/Atracoes'
import Inscricao from './components/Inscricao'
import Rodape from './components/Rodape'
import Grafico from './components/Grafico'

function App() {
  return (
    <div className="min-h-screen bg-fundo font-sans antialiased text-texto">
      <Cabecalho />
      <main>
        <Hero />
        <Sobre />
        <Programacao />
        <Atracoes />
        <Grafico />
        <Inscricao />
      </main>
      <Rodape />
    </div>
  )
}

export default App