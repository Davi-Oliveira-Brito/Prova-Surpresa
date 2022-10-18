import './index.scss'
import { useEffect, useState } from "react";

export default function LinhaAst(){

    const [tamanho, setTamanho]= useState(0);
    const [resposta, setResposta] = useState([]);

    function line() {
        let array =[];
        
        for (let i = 1; i <= tamanho; i++) {
            array[i] = "*";   
        }
        setResposta(array);
    }



    return(

        <main className='momi'>
            <h1>Linha</h1>
            <input type="number" placeholder='Inicio' value={tamanho} onChange={ e => setTamanho(Number(e.target.value))} />
            <button onClick={line}> contar </button>
            <p className='line'>{resposta.map(item => <p>{ item }</p>)}</p>
        </main>
    );

}