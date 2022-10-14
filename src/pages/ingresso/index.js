import './index.scss'

import { useState, useEffect } from 'react'

export default function Ingresso() {

    const [qtdInteiro, setQtdInteiro] = useState();
    const [qtdMeia, setQtdMeia] = useState();
    const [dia, setDia] = useState('');
    const [nacional, setNacional] = useState(false);
    const [resposta, setResposta] = useState("")

    function calcIngresso() {

        try {
            let total = 0;

            //if (!qtdInteiro || !qtdMeia)
            //    throw new Error('Ingressos inválidos')

            if (qtdInteiro < 0 || qtdMeia < 0)
                throw new Error('Ingressos inválidos')

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


        } catch (err) {

            console.log(err.message);
            alert(err.message);
        }

    }



    return (

        <main className='main'>
            <label className='label-s' >Inteiras</label>

            <input type="number" placeholder='Quantidade de inteiras' className='input-int' value={qtdInteiro} onChange={e => setQtdInteiro(Number(e.target.value))} />

            <label className='label-s'>Meias</label>

            <input type="number" placeholder='Quantidade de meias' className='input-meia' value={qtdMeia} onChange={e => setQtdMeia(Number(e.target.value))} />

            <label className='label-s'>Dia da Semana</label>

            <input type="text" placeholder='Dia da Semana' className='input-dia' value={dia} onChange={e => setDia(e.target.value)} />

            <div className="nacionalismo">
                <label className='label-s'>Filme nacional</label>

                <input type="checkbox" className='input-nacional' checked={nacional} onChange={e => setNacional(e.target.checked)} />
            </div>

            <button className='botao' onClick={calcIngresso}> Calcular</button>

            <p>{resposta}</p>
        </main>

    );
}