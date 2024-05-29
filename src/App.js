import React, { useState, lazy, Suspense } from 'react';
import {Routes, Route} from 'react-router-dom';
import {ErrorBoundary} from 'react-error-boundary'

import Navbar from './components/Navbar/Navbar.jsx';
import Home from './pages/Home/Home.jsx';

//import Cart from './pages/Cart/Cart.jsx';
// import PlaceOrder from './pages/PlaceOrder/PlaceOrder.jsx';

import './App.css';
import Footer from './components/Footer/Footer.jsx';
import LoginModal from './Modals/LoginModal/LoginModal.jsx';

import ErrorFallback from './error/ErrorBoundary.js';

const Cart = lazy(()=> import("./pages/Cart/Cart.jsx"));
const PlaceOrder = lazy(()=> import("./pages/PlaceOrder/PlaceOrder.jsx"));

function App() {

  const [login, setLogin] = useState(false)

  return (
    <>
      {login ? <LoginModal setLogin={setLogin} /> : <></>}
      <div className="app">
        <Navbar setLogin={setLogin} />
        <ErrorBoundary FallbackComponent={ErrorFallback} onReset={() => { }}>
          <Suspense fallback={<div>Loading</div>}>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/cart" element={<Cart />} />
              <Route path="/placeorder" element={<PlaceOrder />} />
            </Routes>
          </Suspense>
        </ErrorBoundary>
      </div>
      <Footer />
    </>
  );
}

export default App;
