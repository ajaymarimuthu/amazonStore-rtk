
import './App.css'
import Header from './components/Header/Header'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from './components/Home/Home';
import Cart from './components/Cart/Cart';
import Product from './components/Product/Product';

import { Link } from 'react-router-dom';

function App() {

  return (
    <div className="App">
      <Router>
        <Header />

        <Routes>
          <Route path="/Home" element={<Home/>} ></Route>
          {/* <Route path="/productId" element={<Product/>} ></Route> */}

         

          <Route path="/cart" element={<Cart/>} ></Route>
        </Routes>
      </Router>

    </div>
  )
}

export default App
