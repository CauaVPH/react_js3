import { useState } from "react";

function VerificaNome() {

    const [nome, setNome] = useState();

    const nomes = ['vini', 'joão', 'kaue'];

    const elemento = document.getElementById("inputText");

    function Verificar() {
        if(nomes.includes(nome)) {
            let valorNaLista = nomes.indexOf(nome)
            console.log('igual, o nome é: ' + nomes[valorNaLista])
        } else {
            console.log('nao')
        }
    }

    function VerNome() {
        if(nomes.includes(nome)) {
            let valorNaLista = nomes.indexOf(nome)
            return <p>igual, o nome é: {nomes[valorNaLista]}</p>
        } else {
            return <p>Não</p>
        }
    }

    return(
        <>
         <input onChange={((el) => setNome(el.target.value))} id="inputText" type="text"></input>
         <button onClick={Verificar}>VERIFICAR</button>
         <VerNome/>
        </>
    )

}

export default VerificaNome;