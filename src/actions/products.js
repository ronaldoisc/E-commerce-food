import { useFetch } from "../helpers/fetch";
import { types } from "../types/types";


export const startLoadingCategories=()=>{
    return async(dispatch)=>{
       const resp=await useFetch('products/categories');
       const body=await resp.json();
       dispatch(setCategories(body))
    }
}

const setCategories=(categories)=>({
    type:types.setCategories,
    payload:categories

});


export const startLoadingProductsByCategory=(category)=>{
    return async(dispatch)=>{

      const resp=await useFetch(`products/category/${category}`);
      const body=await resp.json();
     
      dispatch(productsByCategory(body))
    }
}

const productsByCategory=(products)=>({
    type:types.loadProductsByCategory,
    payload:products
})