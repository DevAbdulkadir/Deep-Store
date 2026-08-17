import { Route, Routes } from "react-router";
import Home from "./pages/home/Home";
import Cart from "./pages/cart/Cart";
import Orders from "./pages/orders/Orders";
import Category from "./pages/category/Category";
import ProductDetails from "./pages/product details/ProductDetails";
import Login from "./pages/login/Login";
import Register from "./pages/register/Register";
import './App.css'

function App() {

  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />

        <Route path="/cart" element={<Cart />} />

        <Route path="/orders" element={<Orders />} />

        <Route path="/login" element={<Login />} />

        <Route path="/register" element={<Register />} />

        <Route
          path="/categories/:category"
          element={<Category />}
        />

        <Route
          path="/products/:productId"
          element={<ProductDetails />}
        />
      </Routes>
    </>
  )
}

export default App
