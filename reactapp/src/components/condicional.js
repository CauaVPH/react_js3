import { useState } from 'react';
import './condicional.css';

function Condicional() {

    const [email, setEmail] = useState();
    const [userEmail, setUserEmail] = useState();

    function MostraLogin(e) {
        e.preventDefault();
        setUserEmail(email)
    }

    function LimparEmail(e) {
        e.preventDefault();
        setUserEmail('')

    }

    return(

       <div>
         <h2>Cadastre seu dados: </h2>
         <form>
            <input onChange={(el) => setEmail(el.target.value)} type="email"></input>
            <button onClick={MostraLogin} >Enviar email</button>
            {
             userEmail && (
                <div className="divMostraEmail">
                    <p>{userEmail}</p>
                    <button onClick={LimparEmail}>Limpar Email</button>
                </div>
            )
        }
         </form>
       </div>
    )
}

export default Condicional;