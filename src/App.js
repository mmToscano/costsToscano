import {BrowserRouter as Router, Routes, Route, Link} from 'react-router-dom'
import Home from './pages/Home';
import Company from './pages/Company';
import Contact from './pages/Contact';
import NewProject from './pages/NewProject';

import Container from './components/layout/Container';
import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';
import Projects from './pages/Projects';

function App() {


  return (
    <Router>
      <Navbar/>
      <Container customClass='min-height'>
        <Routes>
          <Route exact path='/' element={<Home/>}></Route>
          <Route exact path='/contact' element={<Contact/>}></Route>
          <Route exact path='/projects' element={<Projects/>}></Route>
          <Route exact path='/company' element={<Company/>}></Route>
          <Route exact path='/newproject' element={<NewProject/>}></Route>
        </Routes>
      </Container>
      <Footer/>
    </Router>
    
    
  );


}

export default App;

/*
<Router>
      <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/empresa">Empresa</Link></li>
        <li><Link to="/contato">Contato</Link></li>
      </ul>
      <Routes>
        <Route exact path="/" element={<Home/>}/>
        <Route path="/empresa" element={<Empresa/>}/>
        <Route path="/contato" element={<Contato/>}/>
      </Routes>
      <Footer/>
    </Router>
*/


/*

 //usa-se isso quando é preciso usar o mesmo state em mais de um componente.
 const [nome, setNome] = useState();
 const meusItens = ['React', 'Vue', 'Angular', ]


<div className="App">
      <h1>State lift</h1>
      <SeuNome setNome={setNome}/>
      <Saudacao nome={nome}/>
      {nome}


    </div>


*/
