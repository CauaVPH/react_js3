function RenderFunc() {

    const cumprimento = () => {
        const hora = new Date().getHours();
        if(hora > 0 &&  hora < 11) {
            return <p>Bom dia</p>
        } else {
            return <p>Boa tarde</p>
        }
    }

    const hora = new Date().getHours();
    
    const minutos = new Date().getMinutes();
   

    return(
        <div>
         <h2>O horário agora é {hora}:{minutos}: {cumprimento()}</h2>
        </div>
    )
}

export default RenderFunc;