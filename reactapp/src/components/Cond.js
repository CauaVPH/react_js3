import { useState } from 'react';

const Cond = () => {

    const [nome, defineNome] = useState();

    const frutas = [
        "uva",
        "maça",
        "pera"
    ]

    function Retorna(e) {
        e.preventDefault()
        const t = frutas.filter((e) => {
            return e != nome
        })
        console.log(t)

        let b = document.getElementById("inp1");
        b.style.backgroundColor = 'red';
    }

    return(

        <div>
          <input id='inp1'
               type="text"
               onChange={(event) => defineNome(event.target.value)}
          ></input>
          <input 
               type="submit"
               onClick={Retorna}
          ></input>
          
        </div>

    )

}

export default Cond;