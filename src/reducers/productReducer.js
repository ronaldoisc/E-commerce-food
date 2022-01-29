import { types } from "../types/types";

const initialState={
   
categories:[],
products:[],
allProducts:[]
}

export const productReducer=(state=initialState,action)=>{
    switch (action.type) {
        case types.setCategories:
            return {
                ...state,
                categories:[...action.payload]
            }
        case types.loadProductsByCategory:
            return {
                ...state,
                products:[...action.payload]

            }
        case types.loadAllProducts:
            return {
                ...state,
                allProducts:[...action.payload]

            }
      
        default:
            return state;
    }
}