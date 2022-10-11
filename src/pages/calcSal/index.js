import './index.scss'
import { useState, useEffect } from 'react'

export default function CalcSal(){
    const [salario, setSalario] = useState();
    const [bonus, setBonus] = useState();
    const [desc, setDesc] = useState();
    const  [resposta, setResposta] = useState();

    function calculo(){
        let calc = (bonus * salario) / 100;
        let total = salario + calc -desc;
        setResposta('Seu salário líquido é R$ ' + total)
    }
    
    return(
        <main>
            <input type="number" placeholder='Salario' value={salario} onChange={e => setSalario(Number(e.target.value))}/>
            <input type="number" placeholder='Bonus' value={bonus} onChange={e => setBonus(Number(e.target.value))}/>
            <input type="number" placeholder='Desconto' value={desc} onChange={e => setDesc(Number(e.target.value))}/>
            <button onClick={calculo}> Calcular</button>
            <div>{resposta}</div>
        </main>
    );
}