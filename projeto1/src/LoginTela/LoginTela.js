import styles from './LoginTela.module.css';
import { useState } from 'react';

const LoginTela = () => {

    "use strict"
    const [email, setEmail] = useState();
    const [userEmail, setUserEmail] = useState();
    const [senha, setSenha] = useState();

    function VerificaCarateres(e) {
        setUserEmail(email)
        e.preventDefault();
    }
     
    function RemoveAviso() {
        setUserEmail('')
    }

    return (
        <div className={styles.div1}>
            <h2>LOGIN</h2>
            <form>
              <input onChange={(event1) => setEmail(event1.target.value)} type="text" placeholder="Email"></input>
              <input onChange={(event2) => setSenha(event2.target.value)} type="password" placeholder="Senha"></input>
              <button 
                  onClick={VerificaCarateres}
                  className={styles.buttonLogin} 
                  type="submit" 
                  onFocus
              >LOGIN</button>
            </form>
        </div>
    )
}

export default LoginTela;