import { Route, Routes, Link } from "react-router-dom";
import { AuthProvider} from './context/AppContext';
import Home from "./pages/home/Home";
import Cart from "./pages/cart/Cart";
import Orders from "./pages/orders/Orders";
import Category from "./pages/category/Category";
import ProductDetails from "./pages/product details/ProductDetails";
import Login from "./pages/login/Login";
import Register from "./pages/register/Register";
import Header from "./components/header/Header";
import Footer from "./components/footer/Footer";
import './App.css'
import CartProvider from "./context/CartContext";

function App() {

  return (
    <>
      <AuthProvider>
        <CartProvider>
          <Header Link={Link} />
          <main className="flex-grow">
            <Routes>
              <Route path="/" element={<Home />} />

              <Route path="/cart" element={<Cart />} />

              <Route path="/orders" element={<Orders />} />

              <Route path="/login" element={<Login />} />

              <Route path="/register" element={<Register />} />

              <Route path="/category/:categoryName" element={<Category />} />

              <Route
                path="/product/:productId"
                element={<ProductDetails />}
              />
            </Routes>
          </main>
          <Footer Link={Link} />
        </CartProvider>
      </AuthProvider>
    </>
  )
}

export default App
