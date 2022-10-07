import { Link } from 'react-router-dom' 
 
 
 export default function(){
    return (
        <main>
            <div>
            <Link  to= '/signo' > Função Signo</Link>
            <Link  to= '/grama' > Função Grama</Link>
            <Link  to= '/acai' > Função Açai</Link>
            </div>

        </main>
    );
 }