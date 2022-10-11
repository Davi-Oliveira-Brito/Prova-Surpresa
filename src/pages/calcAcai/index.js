import './index.scss'
import { useState,useEffect } from 'react'

export default function PageAcai(){
    const[peq,setPeq] = useState(0);
    const[med,setMed] = useState(0);
    const[gra,setGra] = useState(0);
    const[desc,setDesc] = useState(0);
    const[resposta,setResposta] = useState(0);

    function calcacai(){
        let a = (peq * 13.5) + (med * 15) + (gra * 17.5);
        let b = (a / 100) * desc;
        let c = a - b;
       
        if(peq < 0 || med < 0 || gra < 0){
            setResposta('Numero invalido')
        } 


        else if(desc > 100){
            setResposta('Desconto invalido')
        }
       else
        setResposta('O total é de R$ ' + c)
    }
    console.log(resposta);
    useEffect(() => {
        calcacai();
    }, [peq,med,gra,desc,resposta]);
    return(
        <main>
            <input type="number" placeholder='Pequeno' value={peq} onChange={e => setPeq(e.target.value)}/>
            <input type="number" placeholder='Médio' value={med}  onChange={e => setMed(e.target.value)}/>
            <input type="number" placeholder='Grande' value={gra} onChange={e => setGra(e.target.value)}/>
            <input type="number" placeholder='Desconto' value={desc} onChange={e => setDesc(e.target.value)}/>
            <div>{resposta}</div>
        </main>
    );
}