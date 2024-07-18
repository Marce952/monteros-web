import { initializeApp } from "firebase/app";
import { getDownloadURL, getStorage, ref, uploadBytes } from 'firebase/storage'
import { v4 } from "uuid";

const firebaseConfig = {
  apiKey: "AIzaSyCr5rzhAeGRqSAUYf2GoCoD348VZiyKvQ4",
  authDomain: "monteros-web.firebaseapp.com",
  projectId: "monteros-web",
  storageBucket: "monteros-web.appspot.com",
  messagingSenderId: "698185152175",
  appId: "1:698185152175:web:282a89c04aedbccf8e865a"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const storage = getStorage(app)

export const uploadFile = async (file) => {
  const storageRef = ref(storage, v4())
  await uploadBytes(storageRef, file)
  const url = await getDownloadURL(storageRef)
  return url
}