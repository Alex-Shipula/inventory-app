import { addDoc, collection } from 'firebase/firestore'
import { db } from 'src/firebase'
import { IOrder, IProduct } from 'src/types'

// eslint-disable-next-line @typescript-eslint/require-await
async function uploadProducts (products: IProduct[]) {
  try {
    products.forEach(async product => {
      await addDoc(collection(db, 'products'), product)
    })
  } catch (error) {
    console.error('Ошибка загрузки', error)
  }
}

export { uploadProducts }

// eslint-disable-next-line @typescript-eslint/require-await
async function uploadOrders (products: IOrder[]) {
  try {
    products.forEach(async product => {
      await addDoc(collection(db, 'orders'), product)
    })
  } catch (error) {
    console.error('Ошибка загрузки', error)
  }
}

export { uploadOrders }
