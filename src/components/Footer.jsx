import { Link }
  from "react-router-dom"

function Footer() {

  return (

    <footer
      className="
      bg-[#1f1720]
      border-t
      border-white/10
      mt-20
      "
    >

      <div
        className="
        max-w-7xl
        mx-auto
        px-6
        py-16
        grid
        grid-cols-1
        md:grid-cols-3
        gap-12
        "
      >

        <div>

          <h2
            className="
            text-3xl
            font-bold
            text-pink-400
            mb-4
            "
          >
            Ribbon Shop
          </h2>

          <p
            className="
            text-gray-300
            leading-relaxed
            "
          >

            เว็บไซต์แสดงผลงาน
            และร้านค้าริบบิ้น Handmade
            ที่ออกแบบด้วยความตั้งใจ
            เพื่อทุกโอกาสพิเศษ

          </p>

        </div>

        <div>

          <h3
            className="
            text-xl
            font-bold
            mb-5
            text-white
            "
          >
            เมนู
          </h3>

          <div
            className="
            flex
            flex-col
            gap-3
            text-gray-300
            "
          >

            <Link
              to="/"

              className="
              hover:text-pink-500
              transition
              "
            >
              หน้าแรก
            </Link>

            <Link
              to="/gallery"

              className="
              hover:text-pink-500
              transition
              "
            >
              ผลงาน
            </Link>

            <Link
              to="/shop"

              className="
              hover:text-pink-500
              transition
              "
            >
              ร้านค้า
            </Link>

            <Link
              to="/cart"

              className="
              hover:text-pink-500
              transition
              "
            >
              ตะกร้า
            </Link>

          </div>

        </div>

        <div>

          <h3
            className="
            text-xl
            font-bold
            mb-5
            text-white
            "
          >
            ติดต่อ
          </h3>

          <div
            className="
            flex
            flex-col
            gap-3
            text-gray-300
            "
          >

            <p>
              Email:
              ribbonshop@email.com
            </p>

            <p>
              Facebook:
              Ribbon Shop
            </p>

            <p>
              Instagram:
              @ribbon.shop
            </p>

          </div>

        </div>

      </div>

      <div
        className="
        border-t
        border-white/10
        py-6
        text-center
        text-gray-400
        text-sm
        "
      >

        © 2026 Ribbon Handmade.
        All rights reserved.

      </div>

    </footer>
  )
}

export default Footer