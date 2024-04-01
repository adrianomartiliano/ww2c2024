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



//COMPONENTS
import Navbar from './components/Navbar'
import RegrasX1Prata from './components/RegrasX1Prata';
import FormularioX1Prata from './components/FormularioX1Prata';
import FormularioX3 from './components/FormularioX3';
import JogadoresConfirmadosX1Prata from './components/JogadoresConfirmadosX1Prata';
import ArmasPermitidasX1Prata from './components/ArmasPermitidasX1Prata';
import GrupoX1Prata from './components/GruposX1Prata';
import RegrasX3 from './components/RegrasX3';
import ConfirmadosX3 from './components/ConfirmadosX3';


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
          <Route path='/torneios/equipamentos-permitidos' element={<ArmasPermitidasX1Prata/>} />
          <Route path='/torneios/tabela-x1-prata' element={<GrupoX1Prata/>} />
          <Route path='/torneios/inscricao-x3' element={<FormularioX3/>} />
          <Route path='/torneios/regras-x3' element={<RegrasX3/>} />
          <Route path='/torneios/equipes-confirmadas-x3' element={<ConfirmadosX3/>} />

        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
