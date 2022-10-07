import './index.scss'
import { useState, useEffect } from 'react'


 export default function PageGrama(){
    
    const [gramas , setGramas ] = useState();
    const [resposta , setResposta ] = useState('')

    function calcgrama (){
        let preco = 0;
        let calculo = 0; 
        
        
        if( gramas <= 0 ){
            alert('valor invalido') 
            
        }
        else if ( gramas > 999){
            preco = 3 / 100;
            calculo = gramas * preco;
        }else{
            preco = 3.5 /100;
            calculo = gramas * preco;
        }
        
        setResposta (calculo.toFixed([2]));
        
    }
    
    return(
        <main>
           <input type="number" placeholder='gramas' value={gramas} onChange={e => setGramas(Number(e.target.value))} /> 
            <button onClick={calcgrama}>Calcular</button>
            <p>O total a pagar é R${resposta.replace('.',',')}</p>
        </main>
        );
 }