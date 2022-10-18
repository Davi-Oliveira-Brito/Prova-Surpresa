import './index.scss'
import { useState } from 'react'

export default function Forma(){
    const [base, setbase] = useState();
    const [altura, setaltura] = useState();
    const [resposta, steResposta] = useState([]);

    function fazerForma() {
        let matriz = [];
        let array =[];

        for (let i = 0; i < base; i++) {
            array[i] = "*";   
            
            for (let j = 0; j < altura; j++) {
                matriz[j] = new Array (array);
            }
        }
        console.log(matriz, array);

        steResposta(matriz);


    }

    return(
        <main className='forma-mom'>
            <input type="text"  placeholder='base' value={base}  onChange={ e => setbase(Number(e.target.value))} />
            <input type="text"  placeholder='altura' value={altura}  onChange={ e => setaltura(Number(e.target.value))} />
            <button onClick={fazerForma}> Faça!</button>

            <div className='forminha'>{resposta.map(item => <p>{ item }</p>)}</div>
        </main>

    );

}