import {
  useEffect,
  useState,
  useContext,
} from "react"

import { useParams } from "react-router-dom"

import Loading from "../components/Loading"

import { getProductById }
  from "../firebase/firestore"

import { CartContext }
  from "../context/CartContext"

function ProductDetail() {

  const { id } = useParams()

  const [product, setProduct] = useState(null)

  const { addToCart } =
    useContext(CartContext)

  useEffect(() => {

    async function loadProduct() {

      const data =
        await getProductById(id)

      setProduct(data)
    }

    loadProduct()

  }, [id])

  if (!product) {

    return <Loading />
  }

  return (
    <section className="max-w-6xl mx-auto px-6 py-20">

      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">

        <div>

          <img
            src={product.image}
            alt={product.name}
            className="w-full rounded-3xl shadow-xl"
          />

        </div>

        <div>

          <h1 className="text-5xl font-bold mb-6">
            {product.name}
          </h1>

          <p className="text-3xl text-pink-500 font-bold mb-6">

            {product.price} บาท

          </p>

          <p className="text-gray-600 leading-relaxed mb-8">

            {product.description}

          </p>

          <button
            onClick={() => addToCart(product)}
            className="bg-pink-400 hover:bg-pink-500 transition text-white px-8 py-4 rounded-xl text-lg"
          >
            เพิ่มลงตะกร้า
          </button>

        </div>

      </div>

    </section>
  )
}

export default ProductDetail