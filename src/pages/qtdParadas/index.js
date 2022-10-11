import './index.scss'

import { useState, useEffect } from 'react'

export default function QtdParadas() {
    const [capacidade,setCapacidade] = useState();
    const [consumo,setConsumo] = useState();
    const [distancia,setDistancia] = useState();
    const [resposta, setResposta] = useState(0);

    function calcularParadas(){

        let calc =  (distancia / consumo) / capacidade;
        setResposta(Math.ceil(calc));
        
    }

    useEffect(() => {
        calcularParadas();
    },[resposta])

    return(
        <div>
            <input type="number" value={capacidade} placeholder='Capacidade' onChange={e => setCapacidade(Number( e.target.value))} />
            <input type="number" placeholder='Consumo' value={consumo} onChange={e => setConsumo(Number( e.target.value))} />   
            <input type="number" placeholder='Distancia' value={distancia} onChange={e => setDistancia(Number(e.target.value))}/>   
            <button onClick={calcularParadas}>Calcular</button>
            <p> voce precisará fazer {resposta} paradas para abastecer</p>
        </div>

    );

}