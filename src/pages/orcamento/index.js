import './index.scss'
import { useEffect, useState } from 'react'

export default function CalculoOrcamento(){

    const [gastos, setGastos] = useState();
    const [ganhos, setGanhos] = useState();
    const [resposta, setResposta] = useState("")

    function Orcamento(){
        let calc = ganhos - gastos;
        let porcent = (ganhos / 100);
        let resul = calc / porcent;
        let total = 100 - resul;

        if(total > 100) {
            setResposta("Orçamento compormetido! Hora de rever seus gastos")
        }

        else if (total >= 81 && total <=100) {
            setResposta ("Cuidado, seu oçamento porde ficar compormetido!")
        }

        
        else if (total >= 51 && total <=80) {
            setResposta ("Atenção, melhor conter os gastos")
        }
        
        else if (total >= 21 && total <=50) {
            setResposta ("Muito bem, seus gastos não ultrapassaram metade dos ganhos")
        }
        
        else if (total >= 0 && total <=20) {
            setResposta ("Parabéns, está gerenciando bem seu orçamento")
        }


    }

    return(
        <main className='mom'>
            <input type="text" placeholder='ganhos'  value={ganhos}  onChange={ e => setGanhos( Number(e.target.value))}/>
            <input type="text" placeholder='gastos' value={gastos}  onChange={ e => setGastos( Number(e.target.value))}/>
            <button onClick={Orcamento}> Verificar</button>
            <p>{resposta}</p>
        </main>

    );
}