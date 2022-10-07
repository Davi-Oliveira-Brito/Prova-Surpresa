// Necessary imports
import { BrowserRouter, Routes, Route } from 'react-router-dom'

//imports
import Home from './pages/home/index.js'
import Signo from './pages/signo/index.js'

export default function Paths() {
  return (
    <BrowserRouter>
        <Routes>
            <Route exact path="/" element={< Home/>}></Route>
            <Route exact path="/signo" element={< Signo/>}></Route>
          
        
        </Routes>
    </BrowserRouter>
  )
}
