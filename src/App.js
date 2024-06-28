import './App.css';
import{Routes,Route} from "react-router-dom"
import Navbar from "./components/navbar/navbar.jsx"
import Home from "./pages/home/home.jsx"
import Collection from "./pages/collection/collection.jsx"
import Loginsignup from "./pages/loginsignup/loginsignup.jsx"
import Cart from "./pages/cart/cart.jsx"
import Product from "./pages/product/product.jsx"
import Footer from "./components/footer/footer.jsx"
function App() {
  return (
    <>
        <Navbar/>
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/shopnow" element={<Collection/>}/>
          <Route path="/collection" element={<Collection/>}/>
          <Route path="/loginsignup" element={<Loginsignup/>}/>
          <Route path="/cart" element={<Cart/>}/>
          <Route path="/product/:productid" element={<Product/>}/>
        </Routes>
        <Footer/>
    </>
  );
}

export default App;
