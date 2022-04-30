import { Route, Routes } from 'react-router-dom';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Footer from './Shared/Footer/Footer';
import Header from './Shared/Header/Header';
import Home from './Pages/Home/Home/Home';
import Inventories from './Pages/Home/Inventiories/Inventories';

function App() {
  return (
    <div className="">
      <Header/>
      <Routes>
        <Route path="/" element={<Home/>}></Route>
        <Route path="/inventory" element={<Inventories/>}></Route>
      </Routes>
      <Footer/>
    </div>
  );
}

export default App;
