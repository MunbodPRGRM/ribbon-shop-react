import {createContext, useState, useEffect, } from "react"
import toast from "react-hot-toast"

export const CartContext = createContext()

function CartProvider({ children }) {

  const [cartItems, setCartItems] = useState(() => {

    const savedCart =
      localStorage.getItem("cartItems")

    return savedCart
      ? JSON.parse(savedCart)
      : []
  })

  useEffect(() => {

    localStorage.setItem(
      "cartItems",
      JSON.stringify(cartItems)
    )

  }, [cartItems])

  function addToCart(product) {

    const existingItem = cartItems.find(
      (item) => item.id === product.id
    )

    if (existingItem) {

      const updatedCart = cartItems.map((item) => {

        if (item.id === product.id) {

          return {
            ...item,
            quantity: item.quantity + 1,
          }
        }

        return item
      })

      setCartItems(updatedCart)

    } else {

      setCartItems([
        ...cartItems,
        {
          ...product,
          quantity: 1,
        },
      ])
    }

    toast.success("เพิ่มสินค้าลงตะกร้าแล้ว")
  }

  function removeFromCart(id) {

    const updatedCart = cartItems.filter(
      (item) => item.id !== id
    )

    setCartItems(updatedCart)
    toast.success("ลบสินค้าออกจากตะกร้าแล้ว")
  }

  return (
    <CartContext.Provider
      value={{
        cartItems,
        addToCart,
        removeFromCart,
      }}
    >
      {children}
    </CartContext.Provider>
  )
}

export default CartProvider