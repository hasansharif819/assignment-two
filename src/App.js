import { Route, Routes } from 'react-router-dom';
import './App.css';
import About from './pages/About/About';
import Client from './pages/Client/Client';
import Downloads from './pages/Downloads/Downloads';
import Home from './pages/Home/Home';
import Products from './pages/Home/Products/Products';
import Footer from './pages/Shared/Footer/Footer';
import Header from './pages/Shared/Header/Header';

function App() {
  return (
    <div className="App">
      <Header></Header>
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/aboutus' element={<About></About>}></Route>
        <Route path='/products' element={<Products></Products>}></Route>
        <Route path='/client' element={<Client></Client>}></Route>
        <Route path='/downloads' element={<Downloads></Downloads>}></Route>
        </Routes> 
        <Footer></Footer>   
    </div>
  );
}

export default App;
