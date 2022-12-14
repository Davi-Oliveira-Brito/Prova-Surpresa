// Necessary imports
import { BrowserRouter, Routes, Route } from 'react-router-dom'

//imports
import Home from './pages/home/index.js'
import Signo from './pages/signo/index.js'
import Grama from './pages/calcGrama/index.js'
import Acai from './pages/calcAcai/index.js'
import Salario from './pages/calcSal/index.js'
import Paradas from './pages/qtdParadas/index.js'
import Temperatura from './pages/Temperatuta/index.js'
import Orcamento from './pages/orcamento/index.js'
import Ingresso from './pages/ingresso/index.js'
import Contagem from './pages/Contangem/index.js'
import Linha from './pages/LinhaAst/index.js'
import Forma from './pages/Forma/index.js'
import Cafe from './pages/Cafe/index.js'
import PageAlunos from './pages/QtdAlunos/index.js'
import PageJuros from './pages/jurosCompostos/index.js'

export default function Paths() {
  return (
    <BrowserRouter>
        <Routes>
            <Route exact path="/" element={< Home/>}></Route>
            <Route exact path="/signo" element={< Signo/>}></Route>
            <Route exact path="/grama" element={< Grama/>}></Route>
            <Route exact path="/acai" element={< Acai/>}></Route>
            <Route exact path="/salario" element={< Salario/>}></Route>
            <Route exact path="/paradas" element={< Paradas/>}></Route>
            <Route exact path="/temperatura" element={< Temperatura/>}></Route>
            <Route exact path="/orcamento" element={< Orcamento/>}></Route>
            <Route exact path="/ingresso" element={< Ingresso/>}></Route>
            <Route exact path="/contagem" element={< Contagem/>}></Route>
            <Route exact path="/linha" element={< Linha/>}></Route>
            <Route exact path="/forma" element={< Forma/>}></Route>
            <Route exact path="/cafe" element={< Cafe/>}></Route>
            <Route exact path="/qtdAlunos" element={< PageAlunos/>}></Route>
            <Route exact path="/juros" element={< PageJuros/>}></Route>
        </Routes>
    </BrowserRouter>
  )
}
