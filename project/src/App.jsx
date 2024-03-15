import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import MerchantLogin from './Components/MerchantLogin';
import MerchantSignup from './Components/MerchantSignup';
import LandingPage from './Components/LandingPage';
import MerchantHomePage from './Components/MerchantHomePage';
import ProductView from './Components/ProductView';
import Order from './Components/Order';
import CreateProduct from './Components/CreateProduct';
import MerchantNavbar from './Components/MerchantNavbar';
import UpdateMerchant from './Components/UpdateMerchant';
import DashBord from "./Components/DashBord";
import Discription from './Components/Discription';
import Adress from './Components/Adress';
import AboutUs from './Components/AboutUs';
import Error from './Components/Error';
import Home from './Components/Home';
import Admin from './Components/Admin';
import AdminLogin from './Components/AdminLogin';



const App = () => {
  return (
    <div>
      <BrowserRouter>
      <DashBord/>
      <Routes>
        <Route path='/merchantsignup' element={<MerchantSignup/>} />
        <Route path='/login' element={<MerchantLogin/>} />
        <Route path='/merchant' element={<MerchantHomePage/>} />
        <Route path='/Productview' element={<ProductView/>} />
        <Route path='/order' element={<Order/>} />
        <Route path='/product' element={<CreateProduct/>} />
        <Route path='/update' element={<UpdateMerchant/>} />
        <Route path='/landingpage' element={<LandingPage/>} />
        <Route path='/discription' element={<Discription/>} />
        <Route path='/adress' element={<Adress/>} />
        <Route path='/aboutus' element={<AboutUs/>} />
        <Route path='/error' element={<Error/>} />
        <Route path='/' element={<Home/>} />
        <Route path='/admin' element={<Admin/>} />
        <Route path='/adminlogin' element={<AdminLogin/>} />
        
      </Routes>

      </BrowserRouter>

    </div>
  )
}

export default App