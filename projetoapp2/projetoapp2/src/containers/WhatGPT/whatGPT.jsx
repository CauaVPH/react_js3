import './WhatGPT.css'

const WhatGPT = ({title1, title2, title3}) => {

    return(
        <div className="whatGPT">
          <div className="inicio">
            <section className="line"></section>
            <h3>What is GPT-3</h3>
            <div className="text">
                <p>We so opinion friends me message as delight. Whole front do of plate heard oh ought. 
                His defective nor convinced residence own. 
                Connection has put impossible own apartments boisterous. 
                At jointure ladyship an insisted so humanity he. 
                Friendly bachelor entrance to on by."
                </p>
            </div>
          </div>
          <div className="inicio2">
            <h2>The possibilities beyond<br/> your imagination</h2>
            <p>Explore The Library</p>
          </div>
          <div className="inicio3">

            <div className="div1">
                <section className="line"></section>
                <h3>{title1}</h3>
                <p>We so opnion friends me message as delight.Whole front
                    do of plate heard oh ought.
                </p>
            </div>
            <div className="div2">
                <section className="line"></section>
                <h3>{title2}</h3>
                <p>At jointure ladyship an insisted so humanity he. Friendly 
                  bachelor entrance to on by. As put impossible own apartments b
                </p>
            </div>
            <div className="div3">
                <section className="line"></section>
                <h3>{title3}</h3>
                <p>At jointure ladyship an insisted so humanity he. Friendly 
                  bachelor entrance to on by. As put impossible own apartments b</p>
            </div>

          </div>
        </div>
    )
}

export default WhatGPT;