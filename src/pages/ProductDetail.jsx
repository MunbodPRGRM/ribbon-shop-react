import { useEffect, useState, useContext, } from "react"
import { useParams } from "react-router-dom"
import Loading from "../components/Loading"
import { getProductById } from "../firebase/firestore"
import { CartContext } from "../context/CartContext"

function ProductDetail() {

  const { id } = useParams()
  const [product, setProduct] = useState(null)
  const { addToCart } = useContext(CartContext)

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
    <section
      className="
      max-w-7xl
      mx-auto
      px-6
      py-16
      "
    >

      <button
        onClick={() => window.history.back()}

        className="
        mb-10
        flex
        items-center
        gap-2
        text-gray-500
        hover:text-pink-500
        transition-all
        duration-300
        "
      >

        ← ย้อนกลับ

      </button>

      <div
        className="
        bg-white
        rounded-4xl
        shadow-xl
        overflow-hidden
        grid
        grid-cols-1
        lg:grid-cols-2
        gap-0
        "
      >

        <div
          className="
          bg-pink-100
          p-6
          md:p-10
          flex
          items-center
          justify-center
          "
        >

          <div
            className="
            overflow-hidden
            rounded-4xl
            "
          >

            <img
              src={product.image}

              alt={product.name}

              className="
              w-full
              max-h-162.5
              object-cover
              rounded-4xl
              shadow-2xl
              hover:scale-105
              transition-all
              duration-700
              ease-out
              "
            />

          </div>

        </div>

        <div
          className="
          p-8
          md:p-12
          flex
          flex-col
          justify-center
          "
        >

          <p
            className="
            inline-block
            w-fit
            bg-pink-100
            text-pink-500
            px-4
            py-2
            rounded-full
            text-sm
            font-semibold
            mb-6
            "
          >

            {product.category}

          </p>

          <h1
            className="
            text-4xl
            md:text-5xl
            font-bold
            text-gray-800
            leading-tight
            mb-6
            "
          >

            {product.name}

          </h1>

          <p
            className="
            text-4xl
            font-bold
            text-pink-500
            mb-8
            "
          >

            ฿{product.price}

          </p>

          <p
            className="
            text-gray-600
            leading-relaxed
            text-lg
            mb-10
            "
          >

            {product.description}

          </p>

          <div
            className="
            flex
            flex-col
            sm:flex-row
            gap-4
            "
          >

            <button
              onClick={() => addToCart(product)}

              className="
              bg-pink-500
              hover:bg-pink-600
              text-white
              px-8
              py-4
              rounded-2xl
              text-lg
              font-medium
              transition-all
              duration-300
              ease-out
              hover:scale-105
              active:scale-95
              shadow-lg
              "
            >

              เพิ่มลงตะกร้า

            </button>

            <button
              className="
              border
              border-pink-200
              hover:bg-pink-50
              text-pink-500
              px-8
              py-4
              rounded-2xl
              text-lg
              font-medium
              transition-all
              duration-300
              "
            >

              ❤️ ถูกใจสินค้า

            </button>

          </div>

        </div>

      </div>

    </section>
  )
}

export default ProductDetail