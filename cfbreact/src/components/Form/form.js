import { useState } from 'react';
import './form.css'

const Form = () => {

    const [nome, setNome] = useState();
   
    return(
        <form>
            <label>Email</label>
            <input type="text"></input>
            <label>Senha</label>
            <input type="password"></input>
        </form>
    )

}

export default Form;