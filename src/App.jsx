import { BrowserRouter, Routes, Route } from "react-router-dom"

import Navbar from "./components/Navbar"

import Home from "./pages/Home"
import Shop from "./pages/Shop"
import Gallery from "./pages/Gallery"
import Contact from "./pages/Contact"
import ProductDetail from "./pages/ProductDetail"
import Cart from "./pages/Cart"
import Footer from "./components/Footer"

function App() {

  return (
    <BrowserRouter>

      <div className="bg-pink-50 min-h-screen">

        <Navbar />

        <Routes>

          <Route path="/" element={<Home />} />

          <Route path="/shop" element={<Shop />} />

          <Route path="/gallery" element={<Gallery />} />

          <Route path="/contact" element={<Contact />} />

          <Route path="/product/:id" element={<ProductDetail />} />

          <Route path="/cart" element={<Cart />} />

        </Routes>

        <Footer />

      </div>

    </BrowserRouter>
  )
}

export default App