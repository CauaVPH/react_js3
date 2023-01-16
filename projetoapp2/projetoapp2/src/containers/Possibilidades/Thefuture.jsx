import './Thefuture.css'

const Thefuture = ({img, p1, h3, p2, p3}) => {

    return(
        <div className="Thefuture-div">
          <div className="div-img">
            <img src={img} alt="image"></img>
          </div>

          <div className="text">
             <article>
             <p className="p1">{p1}</p>
             <h3 className="h3">{h3}</h3>
             <p className="p2">{p2}</p>
             <p className="p3">{p3}</p>
             </article>
          </div>
        </div>
    )
}
export default Thefuture;