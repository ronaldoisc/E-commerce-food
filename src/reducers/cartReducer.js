import { types } from "../types/types";

const initialState={
    userCart:{}
}

export const cartReducer=(state=initialState,action)=>{
    switch (action.type) {
        case types.cartLoaded:
            return{
                ...state,
                userCart:{...action.payload}
            }
 
    
        default:
            return state;
    }
}