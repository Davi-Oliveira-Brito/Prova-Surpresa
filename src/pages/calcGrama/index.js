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
    
    useEffect(() => {
        calcgrama();
    },[gramas, resposta])
    
    return(
        <main className='pg-calcgramas'>

           <input className='input-gramas' type="number" placeholder='gramas' value={gramas} onChange={e => setGramas(Number(e.target.value))} /> 

            <p className='resp-gramas'>O total a pagar é R${resposta.replace('.',',')}</p>
        </main>
        );
 }