import './index.scss'
import { useState } from 'react'

export default function PageSigno(){
const [mes, setMes] = useState('');
const [dia, setDia] = useState(0);
const [resposta, setResposta] = useState('');

function signo() {
    let resp = '';
     if(mes === 'setembro' && dia >=23 ||mes === 'outubro' && dia <= 22){
      resp = 'Sim'
    }
    else{
        resp = 'Não';
    }

    setResposta(resp);
}

    return(
        <main>
            <input type="text" placeholder='mês' value={mes} onChange={e => setMes(e.target.value)} />
            <input type="text" placeholder='dia'  value={dia} onChange={e => setDia(e.target.value)}/>
            <button onClick={signo}>Teste!</button>
            <p> É do signo Libra? {resposta}</p>
        </main>
    );
}