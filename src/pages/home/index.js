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
            <Link  to= '/orcamento' > Função Orçamento</Link>
            <Link  to= '/ingresso' > Função do Ingresso </Link>
            <Link  to= '/paradas' > Função das paradas </Link>
            <Link  to= '/temperatura' > Função das temperatura </Link>
            <Link  to= '/ingresso' > Função das temperatura </Link>

            </div>

        </main>
    );
 }