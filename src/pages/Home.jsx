import { useEffect, useState } from "react"
import { Link } from "react-router-dom"
import Hero from "../components/Hero"
import ProductCard from "../components/ProductCard"
import { getProducts } from "../firebase/firestore"
import Section from "../components/Section"

function Home() {

  return (

    <main>

      <section
        className="
        relative
        overflow-hidden
        "
      >

        <div
          className="
          absolute
          inset-0
          bg-linear-to-br
          from-pink-50
          via-white
          to-pink-100
          -z-10
          "
        />

        <div
          className="
          max-w-7xl
          mx-auto
          px-6
          py-24
          md:py-32
          grid
          grid-cols-1
          lg:grid-cols-2
          gap-16
          items-center
          "
        >

          <div>

            <p
              className="
              text-pink-500
              font-semibold
              uppercase
              tracking-[0.3em]
              mb-6
              "
            >
              Handmade Ribbon Design
            </p>

            <h1
              className="
              text-5xl
              md:text-7xl
              font-bold
              leading-tight
              text-gray-800
              mb-8
              "
            >

              งานริบบิ้น Handmade
              ที่ออกแบบด้วยความตั้งใจ

            </h1>

            <p
              className="
              text-lg
              md:text-xl
              text-gray-600
              leading-relaxed
              mb-10
              "
            >

              รวมผลงานริบบิ้น handmade
              และของขวัญสุดพิเศษ
              ที่สร้างขึ้นอย่างประณีต
              เพื่อมอบความรู้สึกดี ๆ
              ให้กับทุกโอกาสสำคัญ

            </p>

            <div
              className="
              flex
              flex-wrap
              gap-4
              "
            >

              <Link
                to="/gallery"

                className="
                bg-pink-500
                hover:bg-pink-600
                transition-all
                duration-300
                ease-out
                hover:scale-105
                active:scale-95
                text-white
                px-8
                py-4
                rounded-full
                text-lg
                font-medium
                shadow-lg
                "
              >
                ดูผลงาน
              </Link>

              <Link
                to="/shop"

                className="
                border
                border-pink-300
                hover:bg-pink-50
                transition-all
                duration-300
                ease-out
                hover:scale-105
                active:scale-95
                text-pink-500
                px-8
                py-4
                rounded-full
                text-lg
                font-medium
                "
              >
                เลือกซื้อสินค้า
              </Link>

            </div>

          </div>

          <div
            className="
            relative
            "
          >

            <div
              className="
              absolute
              -top-10
              -left-10
              w-40
              h-40
              bg-pink-200
              rounded-full
              blur-3xl
              opacity-40
              "
            />

            <img
              src="https://images.unsplash.com/photo-1606695793797-2b2bd6a1a018?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"

              alt="Ribbon Handmade"

              className="
              relative
              rounded-[3rem]
              shadow-2xl
              w-full
              object-cover
              hover:scale-[1.02]
              transition-all
              duration-700
              ease-out 
              group
              "
            />

          </div>

        </div>

      </section>

    </main>
  )
}

export default Home