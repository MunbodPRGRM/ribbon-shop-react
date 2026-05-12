export async function uploadImage(file) {

  const formData = new FormData()

  formData.append("file", file)

  formData.append(
    "upload_preset",
    import.meta.env.VITE_CLOUDINARY_CLOUD_NAME
  )

  const response = await fetch(

    import.meta.env.VITE_CLOUDINARY_UPLOAD_PRESET,

    {
      method: "POST",

      body: formData,
    }
  )

  const data = await response.json()

  return data.secure_url
}