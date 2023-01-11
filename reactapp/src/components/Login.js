import { useState } from 'react';

import style from './login.module.css';

function Login() {

    const Log = (i) => {
        i.preventDefault();

        if(nome != "null") {
            localStorage.setItem("valor", nome)
        } 
    }

    const [nome, defineNome] = useState();

    return (

        <div className={style.div1}>
            <form>
                <input className={style.text} onChange={(e) => defineNome(e.target.value)} type="text" placeholder="Email"></input>

                <input className={style.pass}type="password" placeholder="Senha"></input>

                <input onClick={Log} type="submit"></input>
            </form>
        </div>
    )
}

export default Login;