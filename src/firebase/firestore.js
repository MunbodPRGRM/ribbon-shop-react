import {
  getFirestore,
  collection,
  getDocs,
  doc,
  getDoc,
  addDoc,
} from "firebase/firestore"

import app from "./firebaseConfig"

const db = getFirestore(app)

export async function getProducts() {

  const productsCollection =
    collection(db, "products")

  const snapshot =
    await getDocs(productsCollection)

  const products = snapshot.docs.map((doc) => ({

    id: doc.id,

    ...doc.data(),
  }))

  return products
}

export async function addProduct(product) {

  const productsCollection =
    collection(db, "products")

  await addDoc(productsCollection, product)
}

export async function getProductById(id) {

  const productDoc = doc(db, "products", id)

  const snapshot = await getDoc(productDoc)

  if (snapshot.exists()) {

    return {

      id: snapshot.id,

      ...snapshot.data(),
    }
  }

  return null
}