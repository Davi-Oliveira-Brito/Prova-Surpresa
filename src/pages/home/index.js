import { Link } from 'react-router-dom' 
 import './index.scss'
 
 export default function(){
    return (
        <main className='mamae'>
            <div>
            <Link  to= '/signo' > Função Signo</Link>
            <Link  to= '/grama' > Função Grama</Link>
            <Link  to= '/acai' > Função Açai</Link>
            <Link  to= '/salario' > Função Salario</Link>
            </div>

        </main>
    );
 }