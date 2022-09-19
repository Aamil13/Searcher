import  {Paths}  from "./Component/Paths"
import Navb from "./Component/Navb";
import "./mainc.css"
import {BrowserRouter as Router } from "react-router-dom"
import Footer from "./Component/Footer";

function App() {
  return (
    <div className="maincontainer ">
      <div>
      <Router>
        <Navb/>
        
        <Paths/>

        <Footer/>
        </Router>
       
      </div>
      
    </div>
  );
}

export default App;
