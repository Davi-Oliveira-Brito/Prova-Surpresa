import './index.scss'

import { useState } from 'react'

export default function Contagem(){
const [inicio, setInicio] = useState();
const [fim, setFim] = useState();
const [resposta, setResposta] = useState([]);

    function CalcContagem() {
        let array = []; 
    
        for (let i = inicio; i <= fim; i++ ) {
          array = [...array, i];  
          console.log(array);          
        }
        
        setResposta(array);
        
        
        
    }


    return (
        <main>
            <div className="mamis">
                <input type="text" placeholder='Inicio' value={inicio} onChange={ e => setInicio(Number(e.target.value))} />
                <input type="text" placeholder='Fim' value={fim} onChange={ e => setFim(Number(e.target.value))} />
                <button onClick={CalcContagem}> Contar </button>
                <p>{resposta}</p>
            </div>
        </main>

    );


}