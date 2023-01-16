import './NavBarMenu.css';

const NavBar = () => {

    return(
        <header>
          <div className="itemsHeader1">
            <h3>GPT-3</h3>
            <p>Home</p>
            <p>What is GPT?</p>
            <p>Open AI</p>
            <p>Case Studies</p>
            <p>Library</p>
          </div>
          <div className="itemsHeader2">
            <i className="fa-solid fa-bars menuClick"></i>
            <p>Sign in</p>
            <p id="p-login">Sign up</p>
          </div>

          <div id="menu" className="menu1">

          </div>
        </header>
    )
}

export default NavBar;