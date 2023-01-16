import './Header.css';
import ai from '../../assets/ai.png';
import people from '../../assets/people.png';

const Header = () => {

    return(

        <div className="containerCentral1">
            <div className="divHome">
               <h1>
                Let's Build Something<br/>
                amazing with GPT-3<br/> 
                OpenAI
               </h1>
               <p className="pDescrição">Yet bed any for travelling assistance indulgence
                unpleasing.
                Not thoughts all exercise blessing. Indulgence way
                everything joy alteration boisterous the attachment.Party 
                we years to order allow asked of
               </p>

               <input type="email" placeholder="Your Email Address"></input>
               <button>Get Started</button>
               <img className="imgPeople" src={people}></img> 
               <p className="People-text">1,600 people requested access a visit in last 24 hours</p>
            </div>

            <div className="divHeaderImg">
              <img src={ai} alt="" />
            </div>
        </div>
    )
}

export default Header;