import { Link } from "react-router-dom"
import { useContext } from "react"
import { CartContext } from "../context/CartContext"

function ProductCard({ id, name, price, image }) {

  const { addToCart } = useContext(CartContext)

  return (
    <Link to={`/product/${id}`}>

      <div className="bg-white rounded-2xl shadow-md overflow-hidden hover:shadow-xl transition">

        <img
          src={image}
          alt={name}
          className="w-full h-56 md:h-64 object-cover"
        />

        <div className="p-5">

          <h3 className="text-xl md:text-2xl font-bold mb-2">
            {name}
          </h3>

          <p className="text-gray-600 mb-4">
            งาน handmade สำหรับของขวัญสุดพิเศษ
          </p>

          <div className="flex justify-between items-center">

            <span className="text-pink-500 font-bold text-xl">
              {price} บาท
            </span>

            <button 
              onClick={(event) => {
                event.preventDefault()
                addToCart({
                  id, 
                  name, 
                  price, 
                  image, 
                })
              }}
              className="bg-pink-400 hover:bg-pink-500 transition text-white px-4 py-2 rounded-lg"
            >
              ซื้อสินค้า
            </button>

          </div>

        </div>

      </div>

    </Link>
  )
}

export default ProductCard