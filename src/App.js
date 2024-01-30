//CSS
import './App.css';

//HOOKS
import { useState, useEffect } from "react";
import { BrowserRouter, Routes, Route } from 'react-router-dom';

//PAGES
import Contato from './pages/Contato';
import Home from './pages/Home';

//COMPONENTS
import Navbar from './components/Navbar'

// import firebase from './firebase';

function App() {

  const [userx1prata, setUserx1prata] = useState([]);
  const urluserx1prata = "http://localhost:3000/userx1prata";

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch(urluserx1prata);
        if (!res.ok) {
          throw new Error('Erro ao buscar os dados');
        }
        const data = await res.json();
        setUserx1prata(data);
      } catch (error) {
        console.error('Erro:', error);
      }
    };
    console.log(userx1prata)
    fetchData();
  }, []);

  return (
    <div className="App">
      <BrowserRouter>

        <Navbar/>

        <Routes>
          <Route path='/' element={<Home/>} />
          <Route path='/contato' element={<Contato/>} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
