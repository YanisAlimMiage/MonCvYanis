
import './App.css';
import { Route,BrowserRouter as Router} from "react-router-dom";
import Navi from './component/nav';

import Accuil from './pages/Accuil';
import ExP from './pages/ExP';
import About from './pages/About'
import Projets from './pages/Projets';
import For_dep from './pages/For_dep';
import Projects from './pages/Projets'

import { ToastContainer, toast } from 'react-toastify';
import yanis from './../src/yanis.png';
import {Link} from 'react-router-dom';


function App() {
  
  return (
    <div className="App">
      
     

      
     
      
      <Router>
     
     <Route path="/" exact component={Accuil}/>
     <Route path="/cnx" exact component={Accuil}/>
     <Route path="/name" exact component={Accuil}/>
     <Route path="/exp" exact component={ExP}/>
     <Route path="/Projets" exact component={Projets}/>
     <Route path="/formation" exact component={For_dep}/>

     </Router>
     <About></About>
    
     <For_dep ></For_dep>
    
     <ExP></ExP>
     <Projects></Projects>

     <ToastContainer position={toast.POSITION.TOP_CENTER}/>
    
    </div>
    
  );
}

export default App;
