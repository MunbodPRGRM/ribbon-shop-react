import { Link } from "react-router-dom"
import { useContext } from "react"
import { CartContext } from "../context/CartContext"

function ProductCard({ id, name, price, image, category, description }) {

  const { addToCart } = useContext(CartContext)

  return (
    <Link to={`/product/${id}`} className="group bg-white rounded-4xl overflow-hidden shadow-md hover:shadow-2xl transition-all duration-300 hover:-translate-y-2">

      <div className="bg-white rounded-2xl shadow-md overflow-hidden hover:shadow-xl transition">

        <img
          src={image}
          alt={name}
          className="w-full h-72 object-cover transition-transform duration-500 group-hover:scale-110"
        />

        <div className="p-6">

          <p className="text-sm text-pink-500 font-medium mb-2">
            {category}
          </p>

          <h3 className="text-xl md:text-2xl font-bold mb-2 line-clamp-1">
            {name}
          </h3>

          <p className="text-gray-600 mb-4 line-clamp-1">
            {description}
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