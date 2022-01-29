import { types } from "../types/types";

const initialState={
    checking:true,
    user:{}
}
export const authReducer=(state=initialState,action)=>{
    switch (action.type) {

        case types.authLogin:
            return {
                ...state,
                checking:false,
                user:action.payload

            }
        case types.authLogout:
            
            return{
              ...initialState,
              checking:false
            }
        case types.authCheckingFinish:
            return {
                ...state,
                checking:false
            }
        
            
          
    
        default:
            return state;
    }

}