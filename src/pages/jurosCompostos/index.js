import './index.scss'
import { useState } from 'react'


export default function PageJuros(){

    const [entrada, setEntrada] = useState();
    const [valorEmpreendimento, setValorempreendimento] = useState() ;
    const [taxa, setTaxa] = useState();
    const [periodo, setPeriodo] = useState();
    const [resposta, setResposta] = useState({
        montante: 0,
        juros: 0,
        parcela: 0
    });

    function click() {
        let capital = valorEmpreendimento - entrada;
        let conversao = taxa / 100
        let montante = capital * (Math.pow(1 + conversao, periodo));
        let juros = montante - capital;
        let parcela = montante / (periodo * 12);

        if (montante <= 0) {
            montante = 'valor invalido'
        }
        if (juros <= 0) {
            juros = 'valor invalido'
        }
        if (!parcela) {
            parcela = 'valor invalido'
        }

        setResposta({montante: montante.toFixed(2), 
                    juros: juros.toFixed(2), 
                    parcela: parcela.toFixed(2)});
    }
return(
    <main>
        <input type="text"  placeholder='Valor empreendido' value={valorEmpreendimento} onChange={e =>setValorempreendimento(Number(e.target.value))}/>
        <input type="text" placeholder='Entrada' value={entrada} onChange={e => setEntrada(Number(e.target.value))}/>
        <input type="text" placeholder='Taxa' value={taxa} onChange={e => setTaxa(Number(e.target.value))}/>
        <input type="text" placeholder='Periodo' value={periodo} onChange={e => setPeriodo(Number(e.target.value))}/>
        <button onClick={click}>Calcular</button>
        <div className='forminha'>
            <p>Montante:</p> <br/>
            {resposta.montante}<br/>
            <p>Juros:</p> <br/>
            {resposta.juros}<br/>
            <p>Parcelas:</p> <br/>
            {resposta.parcela}<br/>
        </div>
    </main>
);

}