import {
  useEffect,
  useState,
} from "react"

import ProductCard
  from "../components/ProductCard"

import { getProducts }
  from "../firebase/firestore"

import Loading from "../components/Loading"

import EmptyState from "../components/EmptyState"
 
function Shop() {

  const [products, setProducts]
    = useState([])
  
  const [loading, setLoading] = useState(true)

  const [search, setSearch]
    = useState("")

  const [category, setCategory]
    = useState("ทั้งหมด")

  const [sort, setSort]
    = useState("default")

  useEffect(() => {

    async function loadProducts() {

      const data = await getProducts()

      setProducts(data)

      setLoading(false)
    }

    loadProducts()

  }, [])

  const filteredProducts = products

    .filter((product) => {

      const matchSearch =
        product.name
          .toLowerCase()
          .includes(search.toLowerCase())

      const matchCategory =

        category === "ทั้งหมด"

        ||

        (product.category || "") === category

      return (
        matchSearch &&
        matchCategory
      )
    })

    .sort((a, b) => {

      if (sort === "low") {

        return a.price - b.price
      }

      if (sort === "high") {

        return b.price - a.price
      }

      return 0
    })

  if (loading) {

    return <Loading />
  }

  return (
    <section className="max-w-7xl mx-auto px-6 py-20">

      <h1 className="text-5xl font-bold mb-10">
        ร้านค้า
      </h1>

      <div className="bg-white p-6 rounded-3xl shadow mb-10 grid grid-cols-1 md:grid-cols-3 gap-6">

        <input
          type="text"

          placeholder="ค้นหาสินค้า..."

          value={search}

          onChange={(event) =>
            setSearch(event.target.value)
          }

          className="border rounded-xl px-4 py-3"
        />

        <select
          value={category}

          onChange={(event) =>
            setCategory(event.target.value)
          }

          className="border rounded-xl px-4 py-3"
        >

          <option>
            ทั้งหมด
          </option>

          <option>
            โบว์
          </option>

          <option>
            ของขวัญ
          </option>

          <option>
            ตกแต่ง
          </option>

        </select>

        <select
          value={sort}

          onChange={(event) =>
            setSort(event.target.value)
          }

          className="border rounded-xl px-4 py-3"
        >

          <option value="default">
            เรียงปกติ
          </option>

          <option value="low">
            ราคาน้อย → มาก
          </option>

          <option value="high">
            ราคามาก → น้อย
          </option>

        </select>

      </div>

      {
        filteredProducts.length === 0 && (

          <EmptyState

            title="ไม่พบสินค้า"

            description="
            ลองค้นหาด้วยคำอื่น
            หรือเลือกหมวดหมู่อื่น
            "

            buttonText="กลับหน้าร้าน"

            buttonLink="/shop"
          />
        )
      }

      {
        filteredProducts.length > 0 && (

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">

            {filteredProducts.map((product) => (

              <ProductCard
                key={product.id}

                id={product.id}

                name={product.name}

                price={product.price}

                image={product.image}

                category={product.category}

                description={product.description}
              />

            ))}

          </div>
          
        )
      }

    </section>
  )
}

export default Shop