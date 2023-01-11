import './App.css';
import Login from './components/Login';
import Teme from './components/Teme';
import Cond from './components/Cond';
import Condicional from './components/condicional';
import Lista from './components/Listas';

function App() {

  localStorage.setItem("colorfundo", 'aqua')
  const valuecor = localStorage.getItem("colorfundo")

  function D() {
    window.alert("hello")
  }

  function MudaTema() {

    const body = document.querySelector("body")

    if(body.classList.contains("tm1")) {
      body.classList.remove("tm1")
    } else {
      body.classList.add("tm1")
    }
}

  return (
    <div className="App">

     <Login/>
     <Teme color={MudaTema}/>
     <Cond/>
     <Condicional/>
     <Lista/>
    </div>
  );
}

export default App;
