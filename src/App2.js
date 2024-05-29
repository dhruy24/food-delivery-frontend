import React, { useState} from 'react';
import {Routes, Route} from 'react-router-dom';

import Navbar from './components/Navbar/Navbar.jsx';
import Home from './pages/Home/Home.jsx';

import Cart from './pages/Cart/Cart.jsx';
import PlaceOrder from './pages/PlaceOrder/PlaceOrder.jsx';

import './App.css';
import Footer from './components/Footer/Footer.jsx';
import LoginModal from './Modals/LoginModal/LoginModal.jsx';

function App() {

  const [login, setLogin] = useState(false)

    return (
        <>
            {login ? <LoginModal setLogin={setLogin} /> : <></>}
            <div className="app">
                <Navbar setLogin={setLogin} />
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/cart" element={<Cart />} />
                    <Route path="/placeorder" element={<PlaceOrder />} />
                </Routes>
            </div>
            <Footer />
        </>
    );
}

export default App;
