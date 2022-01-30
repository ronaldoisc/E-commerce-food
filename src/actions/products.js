import { useFetch } from "../helpers/fetch";
import { types } from "../types/types";
import { cartLoad, startLoadingCart } from "./cart";
import { uiFinishLoading, uiStartLoading } from "./ui";



export const startLoadingAllData = () => {
    return async (dispatch) => {
        dispatch(uiStartLoading());

        dispatch(startLoadingCategories());
        dispatch(startLoadingProductsByCategory('electronics'))
        dispatch(startLoadingAllProducts());
        dispatch(startLoadingCart());
      

        dispatch(uiStartLoading());
    }
}

const startLoadingCategories = () => {
    return async (dispatch) => {
        try {
            const resp = await useFetch('products/categories');
            const body = await resp.json();
            dispatch(setCategories(body));

        } catch (error) {

        }


    }
}

const setCategories = (categories) => ({
    type: types.setCategories,
    payload: categories

});


export const startLoadingProductsByCategory = (category) => {
    return async (dispatch) => {

        try {
            dispatch(uiStartLoading());

            const resp = await useFetch(`products/category/${category}`);
            const body = await resp.json();

            dispatch(productsByCategory(body))

            dispatch(uiFinishLoading());

        } catch (error) {

        }
    }
}

const productsByCategory = (products) => ({
    type: types.loadProductsByCategory,
    payload: products
});


const startLoadingAllProducts = () => {
    return async (dispatch) => {
        try {
            const resp = await useFetch('products');
            const body = await resp.json();
            dispatch(setAllProducts(body));

        } catch (error) {

        }

    }
}

const setAllProducts = (products) => ({
    type: types.loadAllProducts,
    payload: products
});


export const startloadProductById=(ProductId)=>{
  return async(dispatch)=>{

    const resp=await useFetch(`products/${ProductId}`);
    const body=await resp.json();
    dispatch(cartLoad(body))
    // dispatch(cartLoad(body))

  }
}

export const startClearProducts=()=>({
    type:types.productsClear
})