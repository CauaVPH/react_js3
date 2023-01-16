import './Features.css'

const Features = ({title, msg1, msg2, msg3, msg4}) => {

    return(
        <div className="divFeatures">
          <div className="text1">
            <h2>
                The Future us Now and<br/> You Just Need to 
                Realize It. <br/>Step into Future Today<br/>
                & Make it Happen
            </h2>
            <p>Request Early Access to Get Started</p>
          </div>
          <div className="items">
            <div className="div1">
                <article>
                  <section className="line"></section>
                  <h3>Improving end<br/> distrusts insantly</h3>
                </article>
                <section>
                {msg1}
                </section>
            </div>
            <div className="div2">
                <article>
                  <section className="line"></section>
                  <h3>Become the<br/> tended active</h3>
                </article>
                <section>
                {msg2}
                </section>
            </div>
            <div className="div3">
                <article>
                  <section className="line"></section>
                  <h3>Message or am<br/>nothing</h3>
                </article>
                <section>
                {msg3}
                </section>
            </div>
            <div className="div4">
                <article>
                 <section className="line"></section>
                 <h3>Really boy law<br/> county</h3>
                </article>
                <section>
                {msg4}
                </section>
            </div>
          </div>
        </div>
    )
}

export default Features;