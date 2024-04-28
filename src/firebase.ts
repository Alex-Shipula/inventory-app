import { initializeApp } from 'firebase/app'
import { getFirestore } from 'firebase/firestore'

const firebaseConfig = {
  apiKey: 'AIzaSyArZbue4OaJpQY5J1cLL4Fa1UE-1IJTjvo',
  authDomain: 'inventory-1323d.firebaseapp.com',
  projectId: 'inventory-1323d',
  storageBucket: 'inventory-1323d.appspot.com',
  messagingSenderId: '601219190723',
  appId: '1:601219190723:web:364786096b658c36917776',
  measurementId: 'G-9J7D8T5X9F'
}

const app = initializeApp(firebaseConfig)
const db = getFirestore(app)

export { app, db }
