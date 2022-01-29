import {combineReducers} from 'redux';
import { authReducer } from './authReducer';
import { cartReducer } from './cartReducer';
import { productReducer } from './productReducer';
import { uiReducer } from './uiReducer';

export const rootReducer=combineReducers({
    ui:uiReducer,
    auth:authReducer,
    data:productReducer,
    cart:cartReducer
    
})