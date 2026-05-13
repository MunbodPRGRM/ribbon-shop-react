import {
  useEffect,
  useState,
} from "react"

import { getProducts }
  from "../firebase/firestore"

import Loading from "../components/Loading"

function Gallery() {

  const [products, setProducts]
    = useState([])

  const [category, setCategory]
    = useState("ทั้งหมด")

  const [loading, setLoading] = useState(true)

  useEffect(() => {

    async function loadProducts() {

      const data = await getProducts()

      setProducts(data)

      setLoading(false)
    }

    loadProducts()

  }, [])

  const filteredProducts = products.filter(
    (product) => {

      if (category === "ทั้งหมด") {

        return true
      }

      return (
        (product.category || "")
        === category
      )
    }
  )

  if (loading) {

    return <Loading />
  }

  return (
    <section className="max-w-7xl mx-auto px-6 py-20">

      <div className="text-center mb-16">

        <h1 className="text-5xl md:text-6xl font-bold mb-6">

          ผลงานริบบิ้น Handmade

        </h1>

        <p className="text-gray-600 text-lg">

          รวมผลงาน handmade
          ที่ออกแบบด้วยความตั้งใจ

        </p>

      </div>

      <div className="flex flex-wrap justify-center gap-4 mb-12">

        <button
          onClick={() =>
            setCategory("ทั้งหมด")
          }

          className={`px-6 py-3 rounded-full transition

          ${
            category === "ทั้งหมด"

            ?

            "bg-pink-500 text-white"

            :

            "bg-pink-100 text-pink-500"
          }`}
        >
          ทั้งหมด
        </button>

        <button
          onClick={() =>
            setCategory("โบว์")
          }

          className={`px-6 py-3 rounded-full transition

          ${
            category === "โบว์"

            ?

            "bg-pink-500 text-white"

            :

            "bg-pink-100 text-pink-500"
          }`}
        >
          โบว์
        </button>

        <button
          onClick={() =>
            setCategory("ของขวัญ")
          }

          className={`px-6 py-3 rounded-full transition

          ${
            category === "ของขวัญ"

            ?

            "bg-pink-500 text-white"

            :

            "bg-pink-100 text-pink-500"
          }`}
        >
          ของขวัญ
        </button>

        <button
          onClick={() =>
            setCategory("ตกแต่ง")
          }

          className={`px-6 py-3 rounded-full transition

          ${
            category === "ตกแต่ง"

            ?

            "bg-pink-500 text-white"

            :

            "bg-pink-100 text-pink-500"
          }`}
        >
          ตกแต่ง
        </button>

      </div>

      <div className="columns-1 sm:columns-2 lg:columns-3 gap-6 space-y-6">

        {filteredProducts.map((product) => (

          <div
            key={product.id}

            className="break-inside-avoid overflow-hidden rounded-3xl shadow-lg bg-white group"
          >

            <div className="overflow-hidden">

              <img
                src={product.image}

                alt={product.name}

                className="w-full object-cover group-hover:scale-110 transition duration-500"
              />

            </div>

            <div className="p-5">

              <h2 className="text-2xl font-bold mb-2">

                {product.name}

              </h2>

              <p className="text-gray-500 mb-2">

                {product.category}

              </p>

              <p className="text-gray-600 leading-relaxed">

                {product.description}

              </p>

            </div>

          </div>

        ))}

      </div>

    </section>
  )
}

export default Gallery