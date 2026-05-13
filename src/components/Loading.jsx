function Loading() {

  return (

    <div
      className="
      flex
      flex-col
      items-center
      justify-center
      py-20
      "
    >

      <div
        className="
        w-14
        h-14
        border-4
        border-pink-200
        border-t-pink-500
        rounded-full
        animate-spin
        duration-700
        "
      />

      <p
        className="
        mt-6
        text-gray-500
        text-lg
        "
      >

        กำลังโหลด...

      </p>

    </div>
  )
}

export default Loading