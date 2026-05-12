import { useContext } from "react"

import { CartContext } from "../context/CartContext"

function Cart() {

  const {
    cartItems,
    removeFromCart,
  } = useContext(CartContext)

  const totalPrice = cartItems.reduce(

    (total, item) =>

      total + (item.price * item.quantity),

    0
  )

  return (
    <section className="max-w-4xl mx-auto px-6 py-20">

      <h1 className="text-5xl font-bold mb-10">
        ตะกร้าสินค้า
      </h1>

      <div className="space-y-6">

        {cartItems.map((item) => (

          <div
            key={item.id}
            className="bg-white p-5 rounded-2xl shadow flex justify-between items-center"
          >

            <div>

              <h2 className="text-2xl font-bold">
                {item.name}
              </h2>

              <p className="text-gray-600">
                ราคา: {item.price} บาท
              </p>

              <p className="text-gray-600">
                จำนวน: {item.quantity}
              </p>

            </div>

            <button
              onClick={() => removeFromCart(item.id)}
              className="bg-red-400 hover:bg-red-500 text-white px-4 py-2 rounded-lg"
            >
              ลบสินค้า
            </button>

          </div>

        ))}

      </div>

      <div className="mt-10 text-3xl font-bold text-pink-500">

        รวมทั้งหมด: {totalPrice} บาท

      </div>

    </section>
  )
}

export default Cart