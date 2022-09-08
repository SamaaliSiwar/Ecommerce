import React from 'react';
import { useSelector } from 'react-redux';
import {BrowserRouter, Link, Route, Routes} from 'react-router-dom';
import CartScreen from './screens/CartScreen';
import HomeScreen from './screens/HomeScreen';
import ProductScreen from './screens/ProductScreen';
import SigninScreen from './screens/SigninScreen';


function App() {
  const userSignin = useSelector((state) => state.userSignin);
  const { userInfo } = userSignin;
  const cart = useSelector((state) => state.cart);
  const {cartItems} = cart;
  return ( 
   <BrowserRouter>
  <div class="grid-container">
  <header class="row">
    <div>
      <Link class="brand" to="/">E-Commerce</Link>
    </div>
    <div>
    <Link to="/cart">
              Cart
              {
                cartItems.length >0 &&(
                  <span className='badge'>{cartItems.length}</span>
                )
              }
            </Link>

            {userInfo ? (
              
                <Link to="#">
                  {userInfo.name} <i className="fa fa-caret-down"></i>{' '}
                </Link>
                
            ) : (
              <Link to="/signin">Sign In</Link>
            )}            
    </div>
  </header>
  <main>
  <Routes>
  <Route path="/cart" element={<CartScreen/>}></Route>
  <Route path="/cart/:id" element={<CartScreen/>}></Route>
  <Route path="/product/:id" element={ <ProductScreen/> } ></Route>
  <Route path="/" element={ <HomeScreen/> } exact></Route>
  <Route path="/signin" element={<SigninScreen />}></Route>

  </Routes>
    
  </main>
  <footer class="row center">All right reserved</footer>
</div>
</BrowserRouter>
);
}

export default App;
