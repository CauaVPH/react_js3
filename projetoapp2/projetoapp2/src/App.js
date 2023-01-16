import NavBar from './components/navBarMenu/NavBar';
import { Header } from './containers';
import './App.css';
import EmpresasLogo from './EmpresasLogo';
import WhatGPT from './containers/WhatGPT/whatGPT';
import FeatureDefine from './components/FeaturesDefine/FeaturesDefine';
import Thefuture2 from './components/Thefuture/Thefuture2';
import RegisterBar from './components/barRegister/RegisterBar';
import Optionc from './components/Options/Optionc';
import Footer from './containers/Footer/Footer';

function App() {
  return (
    <div className="App">
      <div className="gradient__bg">
       <NavBar/>
       <Header/>
      </div>
      <EmpresasLogo/>
      <WhatGPT 
        title1="Chatbots" 
        title2="Knowledgebase" 
        title3="Education"
        />
      <FeatureDefine/>
      <Thefuture2/>
      <RegisterBar/>
      <Optionc/>
      <Footer/>
    </div>
  );
}

export default App;
