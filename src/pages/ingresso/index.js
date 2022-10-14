import './index.scss'

import { useState, useEffect } from 'react'

export default function Ingresso() {

    const [qtdInteiro, setQtdInteiro] = useState();
    const [qtdMeia, setQtdMeia] = useState();
    const [dia, setDia] = useState('');
    const [nacional, setNacional] = useState(false);
    const [resposta, setResposta] = useState("")

    function calcIngresso() {


        let total = 0;
        if (nacional === true) {
            total = (qtdMeia * 5) + (qtdInteiro * 5);
            setResposta(' O total a se pagar é de R$ ' + total + ' !!!!!')
        }
        else if (dia === "QUARTA-FEIRA") {
            total = (qtdMeia * 14.25) + (qtdInteiro * 14.25)
            setResposta(' O total a se pagar é de R$ ' + total + ' !!!!!')
        }
        else {
            total = (qtdInteiro * 28.50) + (qtdMeia * 14.25)
            setResposta(' O total a se pagar é de R$ ' + total + ' !!!!!')
        }

    }


    return (

        <main className='main'>
            <label>Inteiras</label>

            <input type="text" placeholder='Quantidade de inteiras' className='input-int' value={qtdInteiro} onChange={e => setQtdInteiro(Number(e.target.value))}/>

            <label>Meias</label>

            <input type="text" placeholder='Quantidade de meias' value={qtdMeia} onChange={e => setQtdMeia(Number(e.target.value))} />

            <label>Dia da Semana</label>

            <input type="text" placeholder='Dia da Semana' value={dia} onChange={e => setDia(e.target.value)} />

            <label>Filme nacional</label>

            <input type="checkbox" checked={nacional} onChange={e => setNacional(e.target.checked)} />

            <button onClick={calcIngresso}> Calcular</button>

            <p>{resposta}</p>
        </main>

    );
}