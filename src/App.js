import { Route, Routes } from 'react-router-dom';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Footer from './Shared/Footer/Footer';
import Header from './Shared/Header/Header';
import Home from './Pages/Home/Home/Home';
import Inventories from './Pages/Home/Inventiories/Inventories';
import ManageInventories from './Pages/ManageInventories/ManageInventories';
import Login from './Authentication/Login/Login';

function App() {
  return (
    <div className="">
      <Header/>
      <Routes>
        <Route path="/" element={<Home/>}></Route>
        <Route path="/inventory" element={<Inventories/>}></Route>
        <Route path="/manageInventories" element={<ManageInventories/>}></Route>
        <Route path="/login" element={<Login/>}></Route>
      </Routes>
      <Footer/>
    </div>
  );
}

export default App;
