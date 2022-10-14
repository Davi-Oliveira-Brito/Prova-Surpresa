import { Link } from 'react-router-dom' 
 import './index.scss'
 
 export default function(){
    return (
        <main className='mamae'>
            <div className='link-s'>
            <Link className='text'  to= '/signo' > Função Signo</Link>
            <Link className='text' to= '/grama' > Função Grama</Link>
            <Link className='text'  to= '/acai' > Função Açai</Link>
            <Link className='text' to= '/salario' > Função Salario</Link>
            <Link className='text' to= '/orcamento' > Função Orçamento</Link>
            <Link className='text' to= '/ingresso' > Função do Ingresso </Link>
            <Link className='text' to= '/paradas' > Função das paradas </Link>
            <Link className='text' to= '/temperatura' > Função das temperatura </Link>
            <Link className='text' to= '/ingresso' > Função das temperatura </Link>

            </div>

        </main>
    );
 }