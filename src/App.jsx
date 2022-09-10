
import './App.css';
import About from './components/About';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Header from './components/Header';
import Home from './components/Home';
import Product from './components/Product';
import { Routes, Route } from "react-router"
import ProductDetail from './components/ProductDetail';
import Cart from './components/Cart';
import Checkout from './components/Checkout';

  

function App() {
  return (
   <>
   <Header />
   
   <Routes>

   <Route exact path="/" element={<Home />} />
   <Route exact path="/products" element={<Product />} />
   <Route exact path="/products/:id" element={<ProductDetail />} />
   <Route exact path="/about" element={<About />} />
   <Route exact path="/contact" element={<Contact />} />
   <Route exact path="/cart" element={<Cart />} />
   <Route exact path="/checkout" element={<Checkout />} />

   
   </Routes>

   <Footer />
   </>
  );
}

export default App;
