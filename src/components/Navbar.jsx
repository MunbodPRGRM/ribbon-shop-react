import { Link, NavLink } from "react-router-dom"

import { useContext, useState } from "react"

import { CartContext } from "../context/CartContext"

function Navbar() {

  const { cartItems } = useContext(CartContext)

  const [menuOpen, setMenuOpen] = useState(false)

  const totalItems = cartItems.reduce(

    (total, item) => total + item.quantity,

    0
  )

  const menuItems = [

    {
      name: "หน้าแรก",
      path: "/",
    },

    {
      name: "ผลงาน",
      path: "/gallery",
    },

    {
      name: "ร้านค้า",
      path: "/shop",
    },

    {
      name: "ติดต่อ",
      path: "/contact",
    },
  ]

  return (
    <header className="sticky top-0 z-50 bg-white/80 backdrop-blur-lg border-b border-pink-100">

      <div className="max-w-6xl mx-auto px-6 py-4">

        <div className="flex justify-between items-center">

          <Link to="/">

            <h1 className="text-2xl md:text-3xl font-bold text-pink-500 hover:text-pink-600 transition">
              Ribbon Shop
            </h1>

          </Link>

          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="md:hidden text-3xl text-pink-500 hover:text-pink-600 transition">
            ☰
          </button>

          <nav
            className="hidden md:flex items-center gap-6 text-gray-700 font-medium">

            {

              menuItems.map((item) => (

                <NavLink
                  key={item.path}

                  to={item.path}

                  className={({ isActive }) =>

                    `
                    transition

                    ${
                      isActive

                      ?

                      "text-pink-500"

                      :

                      "hover:text-pink-500 relative after:absolute after:left-0 after:-bottom-1 after:h-0.5 after:w-0 after:bg-pink-500 after:transition-all after:duration-300 hover:after:w-full"
                    }
                    `
                  }
                >

                  {item.name}

                </NavLink>
              ))
            }

            <Link
              to="/admin"

              className="
              bg-pink-500
              hover:bg-pink-600
              transition
              text-white
              px-5
              py-2
              rounded-full
              "
            >
              Admin
            </Link>

            <Link
              to="/cart"

              className="
              relative
              hover:text-pink-500
              transition
              "
            >

              ตะกร้า

              {

                totalItems > 0 && (

                  <span
                    className="
                    absolute
                    -top-3
                    -right-4
                    bg-pink-500
                    text-white
                    text-xs
                    w-5
                    h-5
                    rounded-full
                    flex
                    items-center
                    justify-center
                    "
                  >

                    {totalItems}

                  </span>
                )
              }

            </Link>

          </nav>

        </div>

        {
          menuOpen && (

            <nav
              className="
              flex
              flex-col
              gap-4
              mt-6
              md:hidden
              text-gray-700
              font-medium
              border-t
              pt-6
              "
            >

              {

                menuItems.map((item) => (

                  <NavLink
                    key={item.path}

                    to={item.path}

                    onClick={() =>
                      setMenuOpen(false)
                    }

                    className={({ isActive }) =>

                      `
                      transition

                      ${
                        isActive

                        ?

                        "text-pink-500"

                        :

                        "hover:text-pink-500"
                      }
                      `
                    }
                  >

                    {item.name}

                  </NavLink>
                ))
              }

              <Link
                to="/admin"

                onClick={() =>
                  setMenuOpen(false)
                }

                className="
                bg-pink-500
                text-white
                px-5
                py-3
                rounded-full
                text-center
                "
              >
                Admin
              </Link>

              <Link
                to="/cart"

                onClick={() =>
                  setMenuOpen(false)
                }
              >

                ตะกร้า ({totalItems})

              </Link>

            </nav>
          )
        }

      </div>

    </header>
  )
}

export default Navbar