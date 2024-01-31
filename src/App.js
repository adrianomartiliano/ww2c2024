//CSS
import './App.css';

//HOOKS
import { useState, useEffect } from "react";
import { BrowserRouter, Routes, Route } from 'react-router-dom';

//PAGES
import Contato from './pages/Contato';
import Home from './pages/Home';
import Formulario from './pages/Formulario';

//COMPONENTS
import Navbar from './components/Navbar'

// import firebase from './firebase';

function App() {

  const [userx1prata, setUserx1prata] = useState([]);
  const urluserx1prata = "http://localhost/backend/conexao.php";

  useEffect(() => {
    const fetchData = async () => {
      
      try {
        
        const response = await fetch(urluserx1prata);
        console.log("Aqui passou")
        if (!response.ok) {
          throw new Error('Erro ao fazer a requisição: ' + response.statusText);
        }
        
        const data = await response.json();
        setUserx1prata(data);
        console.log(data);
      } catch (error) {
        console.error('Erro ao recuperar os dados:', error);
      }
    };
    fetchData();
  }, []);
  

  return (
    <div className="App">
      <BrowserRouter>

        <Navbar/>

        <Routes>
          <Route path='/' element={<Home/>} />
          <Route path='/formulario' element={<Formulario/>} />
          <Route path='/contato' element={<Contato/>} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
