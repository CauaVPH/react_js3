function Lista() {

    const Lista1 = ['vini', 'caua', 'kauezin'];
    //key, acha o componente

    return (
        <>
         {Lista1.map((item, index) => (
                <p key={index}>{item}</p>
            ))} 
        </>
    )
}

export default Lista;