import { Link }
  from "react-router-dom"

function EmptyState({

  title,

  description,

  buttonText,

  buttonLink,
}) {

  return (

    <div
      className="
      flex
      flex-col
      items-center
      justify-center
      text-center
      py-24
      px-6
      "
    >

      <div
        className="
        text-7xl
        mb-6
        "
      >
        🎀
      </div>

      <h2
        className="
        text-3xl
        font-bold
        text-gray-800
        mb-4
        "
      >

        {title}

      </h2>

      <p
        className="
        text-gray-500
        max-w-lg
        leading-relaxed
        mb-8
        "
      >

        {description}

      </p>

      <Link
        to={buttonLink}

        className="
        bg-pink-500
        hover:bg-pink-600
        transition
        text-white
        px-8
        py-4
        rounded-full
        "
      >

        {buttonText}

      </Link>

    </div>
  )
}

export default EmptyState