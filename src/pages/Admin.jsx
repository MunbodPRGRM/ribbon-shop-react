import { useState } from "react"

import { addProduct } from "../firebase/firestore"
import { uploadImage } from "../utils/cloudinary"

function Admin() {

  const [name, setName] = useState("")

  const [price, setPrice] = useState("")

  const [image, setImage] = useState("")

  const [file, setFile] = useState(null)

  const [description, setDescription] = useState("")
    
  const [category, setCategory] = useState("")

  async function handleSubmit(event) {

    event.preventDefault()

    let imageURL = ""

    if (file) {

        imageURL = await uploadImage(file)
    }

    const newProduct = {

      name,
      price: Number(price),
      category,
      image: imageURL,
      description,
      
    }

    await addProduct(newProduct)

    alert("เพิ่มสินค้าสำเร็จ")

    setName("")
    setPrice("")
    setCategory("")
    setImage("")
    setDescription("")
  }

  return (
    <section className="max-w-3xl mx-auto px-6 py-20">

      <h1 className="text-5xl font-bold mb-10">
        Admin Panel
      </h1>

      <form
        onSubmit={handleSubmit}
        className="bg-white p-8 rounded-3xl shadow-xl space-y-6"
      >

        <div>

          <label className="block mb-2 font-medium">
            ชื่อสินค้า
          </label>

          <input
            type="text"
            value={name}
            onChange={(event) =>
              setName(event.target.value)
            }
            className="w-full border rounded-xl px-4 py-3"
          />

        </div>

        <div>

          <label className="block mb-2 font-medium">
            ราคา
          </label>

          <input
            type="number"
            value={price}
            onChange={(event) =>
              setPrice(event.target.value)
            }
            className="w-full border rounded-xl px-4 py-3"
          />

        </div>

        <div>

            <label className="block mb-2 font-medium">
                หมวดหมู่
            </label>

            <select
                value={category}

                onChange={(event) =>
                    setCategory(event.target.value)
                }

                className="w-full border rounded-xl px-4 py-3"
                >

                <option value="">
                    เลือกหมวดหมู่
                </option>

                <option value="โบว์">
                    โบว์
                </option>

                <option value="ของขวัญ">
                    ของขวัญ
                </option>

                <option value="ตกแต่ง">
                    ตกแต่ง
                </option>

            </select>

        </div>

        <div>

            <label className="block mb-2 font-medium">
                รูปสินค้า
            </label>

            <input
                type="file"

                onChange={(event) => {

                setFile(event.target.files[0])

                }}

                className="w-full border rounded-xl px-4 py-3"
            />

        </div>

        <div>

          <label className="block mb-2 font-medium">
            รายละเอียดสินค้า
          </label>

          <textarea
            value={description}
            onChange={(event) =>
              setDescription(event.target.value)
            }
            className="w-full border rounded-xl px-4 py-3 h-32"
          />

        </div>

        <button
          type="submit"
          className="bg-pink-400 hover:bg-pink-500 transition text-white px-8 py-4 rounded-xl"
        >
          เพิ่มสินค้า
        </button>

      </form>

    </section>
  )
}

export default Admin