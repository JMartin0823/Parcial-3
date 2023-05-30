import { Recipe } from "./products";

export type Observer = { render: () => void } & HTMLElement;

export type AppState = {
  products: Recipe[];
};

export enum SomeActions {
  "SAVE_PRODUCT" = "SAVE_PRODUCT",
  "GET_PRODUCT" = "GET_PRODUCT",
}

export interface SaveProductAction {
  action: SomeActions.SAVE_PRODUCT;
  payload: Recipe;
}

export interface GetProductAction {
  action: SomeActions.GET_PRODUCT;
  payload: Recipe[];
}

export type Actions = SaveProductAction |GetProductAction ;
