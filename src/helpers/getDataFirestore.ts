import { collection, getDocs } from 'firebase/firestore'
import { db } from 'src/firebase'

async function getDataFirestore (itemName: string) {
  try {
    const data: any[] = []
    const querySnapshot = await getDocs(collection(db, itemName))
    querySnapshot.forEach(doc => {
      data.push(doc.data())
    })
    return data
  } catch (error) {
    console.error('Ошибка получения', error)
  }
}

export { getDataFirestore }
