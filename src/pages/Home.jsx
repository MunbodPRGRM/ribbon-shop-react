import { useEffect, useState } from "react"

import Hero from "../components/Hero"
import ProductCard from "../components/ProductCard"

import { getProducts } from "../firebase/firestore"

function Home() {

  const [products, setProducts] = useState([])

  useEffect(() => {

    async function loadProducts() {

      const data = await getProducts()

      setProducts(data)
    }

    loadProducts()

  }, [])

  return (
    <>
      <Hero />

      <section className="max-w-6xl mx-auto px-6 py-20">

        <h2 className="text-4xl font-bold mb-10 text-center">
          สินค้าแนะนำ
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">

          {products.map((product) => (

            <ProductCard
              key={product.id}
              id={product.id}
              name={product.name}
              price={product.price}
              image={product.image}
            />

          ))}

        </div>

      </section>
    </>
  )
}

export default Home