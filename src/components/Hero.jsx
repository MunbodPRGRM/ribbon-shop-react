function Hero() {

  return (
    <section className="bg-pink-50 py-16 md:py-20">

      <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-10 items-center">

        <div>

          <h2 className="text-4xl md:text-5xl font-bold leading-tight mb-6">

            งานริบบิ้นแฮนด์เมด

            <span className="text-pink-500">
              {" "}ทำด้วยใจ
            </span>

          </h2>

          <p className="text-gray-600 text-base md:text-lg mb-6">

            รวมผลงานริบบิ้น handmade
            สำหรับของขวัญและของตกแต่งสุดน่ารัก

          </p>

          <button className="bg-pink-400 hover:bg-pink-500 transition text-white px-8 py-3 rounded-xl">

            ดูสินค้า

          </button>

        </div>

        <div>

          <img
            src="https://images.unsplash.com/photo-1513475382585-d06e58bcb0e0?q=80&w=1200&auto=format&fit=crop"
            alt="ribbon"
            className="rounded-3xl shadow-xl w-full"
          />

        </div>

      </div>

    </section>
  )
}

export default Hero