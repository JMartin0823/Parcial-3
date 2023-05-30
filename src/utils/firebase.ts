import {initializeApp} from "firebase/app";
import {firebaseConfig} from "../firebaseConfig";
import { Recipe } from "../types/products";
import { getFirestore,collection, addDoc, getDocs } from "firebase/firestore";


const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

const saveProductInDB =async (product: Recipe) => {;


try {
  await addDoc(collection(db, "products"), product); 
} catch (e) {
  console.error("Error adding document: ", e);
}
};

const getProductsFromDB = async (): Promise<Recipe[]> => {
    const resp: Recipe[] = [];
    const querySnapshot = await getDocs(collection(db, "products"));
    querySnapshot.forEach((doc) => {
    console.log(`${doc.id} => ${doc.data()}`);
  resp.push({
    ...doc.data(),
  } as Recipe);
  })
  return resp;
};


export default {saveProductInDB,getProductsFromDB };