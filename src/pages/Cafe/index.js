import './index.scss'
import { useState } from 'react'

export default function CalcularCafé(){
    const [n, setN] = useState(0);
    const [capacidade, setCapacidade] = useState(0);
    const [d, setD] = useState(0);
    const [resposta, setResposta] = useState(0
        );

    function click() {
        let convesao = d * n;
        let coffeNecessario = convesao / 1000;
        

        while(coffeNecessario > capacidade){
            capacidade+=capacidade
            
            
            if(coffeNecessario < capacidade){
                capacidade=capacidade;
                setResposta(capacidade);
            }
            
        }
        setResposta(capacidade);

        

    }



    return(
        <main className='café'>
              <input type="text" placeholder='alunos' value={n}  onChange={ e => setN(Number(e.target.value))} />
              <input type="text" placeholder='Capacidade' value={capacidade}  onChange={ e => setCapacidade(Number(e.target.value))} />
              <input type="text" placeholder='ML' value={d}  onChange={ e => setD(Number(e.target.value))} />
              <button onClick={click} >Calcular</button>
              <p>{resposta}</p>
        </main>

    );

}
