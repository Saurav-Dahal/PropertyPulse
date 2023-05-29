import React from 'react';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import Explore from './pages/Explore';
import ForgetPassword from './pages/ForgetPassword';
import Offers from './pages/Offers';
import Profile from './pages/Profile';
import SignIn from './pages/SignIn';
import SignUp from './pages/SignUp';
import Navbar from './components/Navbar';
import './App.css';
import Listing from './pages/Listing';
import ListingDetails from './pages/ListingDetails';

const App = () => {

  return (
    <>  
      <Router>
        <Routes>
          <Route path='/' element={<Explore />}></Route>
          <Route path='/forget-password' element={<ForgetPassword />}></Route>
          <Route path='/offers' element={<Offers />}></Route>
          <Route path='/category/:categoryName' element={<Listing />}></Route>
          <Route path='/category/:categoryName/:listingId' element={<ListingDetails />}></Route>
          <Route path='/profile' element={<Profile />}></Route>
          <Route path='/signin' element={<SignIn />}></Route>
          <Route path='/signup' element={<SignUp />}></Route>
        </Routes>
        {<Navbar></Navbar>}
      </Router>
      <ToastContainer />
    </>
  );

}


export default App;
