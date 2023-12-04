import Cabecalho from "./Componentes/Cabecalho";
import Conteudo from "./Componentes/Conteudo";
import Rodape from "./Componentes/Rodape";
import { Analytics } from '@vercel/analytics/react';

function App() {
  return (
    <div className="App">
      <Cabecalho />
      <Conteudo />
      <Rodape />
      <Analytics />
    </div>
  );
}

export default App;