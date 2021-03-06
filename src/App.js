import { Route, Routes } from 'react-router-dom';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Footer from './Shared/Footer/Footer';
import Header from './Shared/Header/Header';
import Home from './Pages/Home/Home/Home';
import ManageInventories from './Pages/ManageInventories/ManageInventories';
import Login from './Authentication/Login/LogIn';
import Register from './Authentication/Register/Register';
import Error from './Shared/404/Error';
import Blogs from './Pages/Blogs/Blogs';
import RequireAuth from './RequireAuth';
import AddItem from './Pages/AddItem/AddItem';
import Inventory from './Pages/Inventory/Inventory';
import MyItems from './Pages/MyItems/MyItems';
import Loading from './Loading';

function App() {
  return (
    <div>
      <Header />
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/home" element={<Home />}></Route>
        <Route path="/blogs" element={<Blogs />}></Route>
        <Route path="/login" element={<Login />}></Route>
        <Route path="/register" element={<Register />}></Route>
        <Route path="/addItem" element={
          <RequireAuth>
            <AddItem />
          </RequireAuth>
        }></Route>
        <Route path="/manageInventories" element={
          <RequireAuth>
            <ManageInventories />
          </RequireAuth>
        }></Route>
        <Route path="/myItems" element={
          <RequireAuth>
            <MyItems />
          </RequireAuth>
        }></Route>
        <Route path="/inventory/:dressId" element={
          <RequireAuth>
            <Inventory />
          </RequireAuth>
        }></Route>
        <Route path="*" element={<Error />}></Route>
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
