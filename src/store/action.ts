import { Recipe } from "../types/products";
import { Actions, SomeActions } from "../types/store";
import firebase from "../utils/firebase";

export const saveProduct = async (product: Recipe): Promise <Actions>  => {
   await firebase.saveProductInDB(product);
   return{
    action: SomeActions.SAVE_PRODUCT,
     payload: product,
   };
};

export const getProduct = async (): Promise <Actions>  => {
    const product =await firebase.getProductsFromDB();
    return{
     action: SomeActions.GET_PRODUCT,
      payload: product,
    };
 };