import './index.scss'
import {useState, useEffect } from 'react'


export default function PageAlunos(){
    //function gerar alunos
    const [quantidade, setQuantidade] = useState();
    const [respAluno, setRespAluno] = useState([]);
    
    
    const [respMedia, setRespMedia] = useState(0);

    //atribuir notas aos alunos
    const [nota, setNota] = useState(0);

    function gerarAlunos(){
        
        let alunos = [];
        for (let i = 0; i < quantidade; i++) {
            alunos[i] = 0;
        }
        setRespAluno(alunos);
    }
    
    console.log(respAluno);

    function calcularMedia(){
        
        let calc = 0;
        let cont = 0;
        
        for(let i = 0; i < respAluno.length; i++) {
            calc += respAluno[i]
        }
        console.log(calc);
        
        setRespMedia(calc / respAluno.length)
    }

  
    return(
        <main>
            <h1>Função das notinha.....</h1>
            <label> Quantidade alunos </label>
            <input type="text"  placeholder=' digite a Quantidade' value={quantidade} onChange={ e => setQuantidade(Number(e.target.value))}/>
            <button onClick={gerarAlunos}>Gerar</button>
            <div>{respAluno.map((item, pos) => <p> aluno { pos}<input type="text" value={item.nota} onChange={e => setNota(Number(e.target.value))} />  </p>)} </div>
        

            <button onClick={calcularMedia}>Calcular</button>
            <p>{respMedia}</p>

        </main>
    );
    
}