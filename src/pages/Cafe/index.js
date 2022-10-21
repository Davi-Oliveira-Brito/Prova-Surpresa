import './index.scss'
import { useState } from 'react'

export default function CalcularCafé(){
    const [alunos, setAlunos] = useState(0);
    const [capacidadeInicial, setCapacidadeInicial] = useState(0);
    const [consumo, setConsumo] = useState(0);
    const [resposta, setResposta] = useState(0);
    function click() {
        let convesao = alunos * consumo;
        let coffeNecessario = convesao / 1000;
        let poscapacidade = capacidadeInicial;
         while( coffeNecessario > capacidadeInicial){
            poscapacidade = poscapacidade + capacidadeInicial;

         }
         console.log(poscapacidade)
        
        }

    return(
        <main className='café'>
              <input type="text" placeholder='alunos' value={alunos}  onChange={ e => setAlunos(Number(e.target.value))} />
              <input type="text" placeholder='CapacidadeInicial' value={capacidadeInicial}  onChange={ e => setCapacidadeInicial(Number(e.target.value))} />
              <input type="text" placeholder='ML' value={consumo}  onChange={ e => setConsumo(Number(e.target.value))} />
              <button onClick={() => click()} >Calcular</button>
              <p>{resposta}</p>
        </main>

    );

}
