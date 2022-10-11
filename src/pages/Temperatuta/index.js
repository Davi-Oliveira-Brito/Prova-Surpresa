import './index.scss'

import { useState, useEffect } from 'react'

export default function CalcTemp(){
   
    const [temp , setTemp] = useState();
    const [resposta, setResposta] = useState('');

    function calculo(){
        let x =''
        if(temp < 36 || temp === 41)
        x = 'Hipotermia';
        else if(temp >= 36 && temp < 37.6)
        x = 'Normal';
        else if(temp > 37.6 && temp < 39.6)
        x = 'Febre'
        else if(temp >= 39.6 && temp < 41 )
        x = 'Febre Alta'

        setResposta(x)
    }
    return(
        <main>
            <input type="number" placeholder='Temperatura' value={temp} onChange={e => setTemp(Number(e.target.value))}/>
            <button onClick={calculo}>Situação</button>
            <p>{resposta}</p>
        </main>

    );
}