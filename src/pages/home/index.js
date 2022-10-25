
 import './index.scss'
 import { useNavigate } from 'react-router-dom';

 export default function(){
    const Navigate = useNavigate();

    return (
        <main className='home'>
            <div className='link-s'>
                <p className='text' onClick={() => Navigate('/signo')} > Função Signo</p>
                <p className='text' onClick={() => Navigate('/grama')} > Função Grama</p>
                <p className='text' onClick={() => Navigate('/acai')} > Função Açai</p>
                <p className='text' onClick={() => Navigate('/salario')} > Função Salario</p>
                <p className='text' onClick={() => Navigate('/orcamento')} > Função Orçamento</p>
                <p className='text' onClick={() => Navigate('/ingresso')}> Função do Ingresso </p>
                <p className='text' onClick={() => Navigate('/paradas')} > Função das paradas </p>
                <p className='text' onClick={() => Navigate('/temperatura')} > Função das temperatura </p>
                <p className='text' onClick={() => Navigate('/contagem')} > Função das Contagem </p>
                <p className='text' onClick={() => Navigate('/linha')} > Função da Linha </p>
                <p className='text' onClick={() => Navigate('/forma')} > Função da forma </p>
                <p className='text' onClick={() => Navigate('/cafe')}  > Função do cafe </p>
                <p className='text' onClick={() => Navigate('/qtdAlunos')} > Função dos Alunos </p>
            </div>

        </main>
    );
 }