// Necessary imports
import { BrowserRouter, Routes, Route } from 'react-router-dom'

//imports
import Home from './pages/home/index.js'
import Signo from './pages/signo/index.js'
import Grama from './pages/calcGrama/index.js'
import Acai from './pages/calcAcai/index.js'

export default function Paths() {
  return (
    <BrowserRouter>
        <Routes>
            <Route exact path="/" element={< Home/>}></Route>
            <Route exact path="/signo" element={< Signo/>}></Route>
            <Route exact path="/grama" element={< Grama/>}></Route>
            <Route exact path="/acai" element={< Acai/>}></Route>
            
        
        </Routes>
    </BrowserRouter>
  )
}
