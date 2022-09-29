import './App.css';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Home from "./pag/Home";
import GamePack from './pag/GamePack';
import Layout from './pag/Layout';
import BootstrapNavbar from './components/BootstrapNavbar';
import 'bootstrap/dist/css/bootstrap.min.css'
// import { Button } from 'react-bootstrap';

function App() {
  return (
 <BrowserRouter>
 <BootstrapNavbar />
 <Routes>
     <Route path='/' element={<Layout />}/>
     <Route path='/Home' element={<Home />}/>
     <Route path='/Game' element={<GamePack />}/>
 </Routes>
 </BrowserRouter>
  );
}

export default App;
