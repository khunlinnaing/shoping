import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Navbar from './components/navbar';
import Shop from './pages/shop/shop';
import Cart from './pages/cart/cart';
import ShopContextProvider from './context/shop-context';
import { useState } from 'react';
import {productsval} from './products';
function App() {
  const [cartItems, setCartItems] = useState(getDefaultCart());

  const getTotalCartAmount = () => {
    let totalAmount = 0;
    for (const item in cartItems) {
      if (cartItems[item] > 0) {
        let itemInfo = productsval.find((product) => product.id === Number(item));
        totalAmount += cartItems[item] * itemInfo.price;
      }
    }
    return totalAmount;
  };
    
    const addToCart = (itemId) =>{
        setCartItems((prev) =>({...prev, [itemId]: prev[itemId]+1}))
    }

    const removeFromCart = (itemId) =>{
        setCartItems((prev) =>({...prev, [itemId]: prev[itemId] - 1}))
        console.log(cartItems)
    }
    const updateCartItemCount = (newAmount, itemId) => {
      setCartItems((prev) => ({ ...prev, [itemId]: newAmount }));
    };
    const checkout = () => {
      setCartItems(getDefaultCart());
    };
    console.log(cartItems)
    const contextVal = { cartItems, addToCart, removeFromCart, updateCartItemCount, checkout, getTotalCartAmount };
  return (
    <div className='App'>
      <Router>
      <Navbar />
        <ShopContextProvider.Provider value={contextVal}>
          <Routes>
            <Route path='/' element={<Shop />} />
            <Route path='/cart' element={<Cart />} />
          </Routes>
        </ShopContextProvider.Provider>
      </Router>

    </div>
  );
}

const getDefaultCart = () =>{
  let cart = {};
  for(let i=1; i < productsval.length + 1; i++){
      cart[i]= 0;
  }
  return cart;
}

export default App;
