import google from './assets/google.png';
import shopify from './assets/shopify.png';
import dropbox from './assets/dropbox.png';
import slack from './assets/slack.png';
import atlassian from './assets/atlassian.png';
import './EmpresasLogo.css';

const EmpresasLogo = () => {

    return(
        <div className="imgEmpresas">
          <img src={google}></img>
          <img src={slack}></img>
          <img src={atlassian}></img>
          <img src={dropbox}></img>
          <img src={shopify}></img>
        </div>
    )
}

export default EmpresasLogo;