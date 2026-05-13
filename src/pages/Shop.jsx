import { useEffect, useState, } from "react"
import ProductCard from "../components/ProductCard"
import { getProducts } from "../firebase/firestore"
import Loading from "../components/Loading"
import EmptyState from "../components/EmptyState"
import Section from "../components/Section"
 
function Shop() {

  const [products, setProducts] = useState([])
  const [loading, setLoading] = useState(true)
  const [search, setSearch] = useState("")
  const [category, setCategory] = useState("ทั้งหมด")
  const [sort, setSort] = useState("default")

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

      <div
        className="
        bg-white/90
        backdrop-blur
        p-6
        md:p-8
        rounded-4xl
        shadow-xl
        border
        border-pink-100
        mb-14
        "
      >

        <div
          className="
          flex
          flex-col
          lg:flex-row
          gap-5
          "
        >

          <div
            className="
            relative
            flex-1
            "
          >

            <span
              className="
              absolute
              left-4
              top-1/2
              -translate-y-1/2
              text-gray-400
              text-lg
              "
            >
              🔍
            </span>

            <input
              type="text"

              placeholder="ค้นหาสินค้า handmade..."

              value={search}

              onChange={(event) =>
                setSearch(event.target.value)
              }

              className="
              w-full
              bg-pink-50
              border
              border-pink-100
              focus:border-pink-400
              focus:ring-4
              focus:ring-pink-100
              outline-none
              rounded-2xl
              pl-12
              pr-4
              py-4
              text-gray-700
              placeholder:text-gray-400
              transition-all
              duration-300
              "
            />

          </div>

          <select
            value={category}

            onChange={(event) =>
              setCategory(event.target.value)
            }

            className="
            bg-pink-50
            border
            border-pink-100
            focus:border-pink-400
            focus:ring-4
            focus:ring-pink-100
            outline-none
            rounded-2xl
            px-5
            py-4
            text-gray-700
            transition-all
            duration-300
            min-w-45
            "
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

            className="
            bg-pink-50
            border
            border-pink-100
            focus:border-pink-400
            focus:ring-4
            focus:ring-pink-100
            outline-none
            rounded-2xl
            px-5
            py-4
            text-gray-700
            transition-all
            duration-300
            min-w-55
            "
          >

            <option value="default">
              เรียงตามสินค้าแนะนำ
            </option>

            <option value="low">
              ราคาน้อย → มาก
            </option>

            <option value="high">
              ราคามาก → น้อย
            </option>

          </select>

        </div>

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