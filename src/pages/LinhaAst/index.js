import './index.scss'
import { useEffect, useState } from "react";

export default function LinhaAst(){

    const [tamanho, setTamanho]= useState();
    const [resposta, setResposta] = useState([]);

    function line() {
        let array =[];
        
        for (let i = 0; i < tamanho; i++) {
            array[i] = ["*"];

        }
        setResposta(array);
        console.log(setResposta);
    }

    useEffect(() => {
        line();
    },[tamanho, resposta])

    return(

        <main>
            <h1>Linha</h1>
            <input type="number" placeholder='Inicio' value={tamanho} onChange={ e => setTamanho(Number(e.target.value))} />
            <p>{resposta}</p>
        </main>
    );

}