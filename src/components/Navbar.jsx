import { Link } from "react-router-dom"

import { useContext, useState } from "react"

import { CartContext } from "../context/CartContext"

function Navbar() {

  const { cartItems } = useContext(CartContext)

  const [menuOpen, setMenuOpen] = useState(false)

  const totalItems = cartItems.reduce(

    (total, item) => total + item.quantity,

    0
  )

  return (
    <header className="bg-white shadow-md">

      <div className="max-w-6xl mx-auto px-6 py-4">

        <div className="flex justify-between items-center">

          <h1 className="text-2xl md:text-3xl font-bold text-pink-500">
            Ribbon Shop
          </h1>

          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="md:hidden text-3xl"
          >
            ☰
          </button>

          <nav className="hidden md:flex gap-6 text-gray-700 font-medium">

            <Link to="/">
              หน้าแรก
            </Link>

            <Link to="/gallery">
              ผลงาน
            </Link>

            <Link to="/shop">
              ร้านค้า
            </Link>

            <Link to="/contact">
              ติดต่อ
            </Link>

            <Link to="/admin">
              Admin
            </Link>

            <Link to="/cart">
              ตะกร้า ({totalItems})
            </Link>

          </nav>

        </div>

        {menuOpen && (

          <nav className="flex flex-col gap-4 mt-6 md:hidden text-gray-700 font-medium">

            <Link to="/">
              หน้าแรก
            </Link>

            <Link to="/gallery">
              ผลงาน
            </Link>

            <Link to="/shop">
              ร้านค้า
            </Link>

            <Link to="/contact">
              ติดต่อ
            </Link>

            <Link to="/cart">
              ตะกร้า ({totalItems})
            </Link>

          </nav>

        )}

      </div>

    </header>
  )
}

export default Navbar