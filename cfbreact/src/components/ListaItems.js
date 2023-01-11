import './Listaitems.css'
import { useState } from 'react';

function ListaItems() {

    const ListFrutas = ["uva","pera","maça","abacate","laranja"]
    const [valor, defValor] = useState();

    const [valorD, defineValorD] = useState();

    const Define = () => {
        defineValorD(valor)
    }

    let arr = [];
    const i = ListFrutas.filter((vl3) => {
        return vl3 != valorD;
    })

    i.forEach(element => {
        arr.unshift(element)
    });

    const Retorna = () => {
        if(valorD != undefined || valorD != null) {
            return(
                <p>{arr.map((vl2, index) => (<li key={index}>{vl2}</li>))}</p>
            )
        } else if(valorD == undefined || valorD == null || valorD == ListFrutas[0]) {
            return(<p>Sem valor</p>)
        }
    }

    return(
        <div>
            <input onChange={(vl) => defValor(vl.target.value)} type="text" placeholder="Digite a fruta"></input>
            <button onClick={Define}>Buscar</button>
            <Retorna/>
        </div>
    )
}

export default ListaItems;