import './Option.css'

const Option = (
    {img1, img2, img3, img4, img5,
    data1, data2, data3, data4, data5}) => {

    return(
        <div className="containerCentral">
           <h1>A lot is happening, <br/>
           We are blogging about it.</h1>
           <article>

            <div className="item-div" id="div1">
                <img src={img1} alt="" />
                {data1}
                <h3>GPT-3 and Open AI is the<br/>future.Let us
                explore how it is?</h3>
                <p className="redfull">Read Full Article</p>
            </div>

            <div className="item-div" id="div2">
                <img src={img2} alt="" />
                {data2}
                <h3>GPT-3 and Open AI is the<br/>future.Let us
                explore how it is?</h3>
                <p className="redfull">Read Full Article</p>
            </div>

            <div className="item-div" id="div3">
                <img src={img3} alt="" />
                {data3}
                <h3>GPT-3 and Open AI is the<br/>future.Let us
                explore how it is?</h3>
                <p className="redfull">Read Full Article</p>
            </div>

            <div className="item-div" id="div4">
                <img src={img4} alt="" />
                {data4}
                <h3>GPT-3 and Open AI is the<br/>future.Let us
                explore how it is?</h3>
                <p className="redfull">Read Full Article</p>
            </div>

            <div className="item-div" id="div5">
               <img src={img5} alt="" />
                {data5}
                <h3>GPT-3 and Open AI is the<br/>future.Let us
                explore how it is?</h3>
                <p className="redfull">Read Full Article</p>
            </div>

           </article>
        </div>
    )
}

export default Option