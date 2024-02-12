//CSS
import './App.css';

//HOOKS
import { BrowserRouter, Routes, Route } from 'react-router-dom';

//PAGES
import Contato from './pages/Contato';
import Home from './pages/Home';
import Formulario from './pages/Formulario';
import Mural from './pages/Mural';
import Torneios from './pages/Torneios';
import FormularioX1Prata from './components/FormularioX1Prata';
import JogadoresConfirmadosX1Prata from './components/JogadoresConfirmadosX1Prata';

//COMPONENTS
import Navbar from './components/Navbar'
import RegrasX1Prata from './components/RegrasX1Prata';



function App() {
  
  return (
    <div className="App">
      <BrowserRouter>

        <Navbar/>

        <Routes>
          <Route path='/' element={<Home/>} />
          <Route path='/formulario' element={<Formulario/>} />
          <Route path='/torneios' element={<Torneios/>} />
          <Route path='/mural' element={<Mural/>} />
          <Route path='/contato' element={<Contato/>} />
          <Route path='/torneios/inscricao-x1' element={<FormularioX1Prata/>} />
          <Route path='/torneios/regras-x1-prata' element={<RegrasX1Prata/>} />
          <Route path='/torneios/jogadores-confirmados' element={<JogadoresConfirmadosX1Prata/>} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
