import { types } from "../types/types";

describe('test in the types.js file', () => {
  test('the types should be equals', () => {
    
    expect(types).toEqual({
        setCategories:'[categories] Set categories',
        loadProductsByCategory:'[products] Load products by category',
        loadAllProducts:'[products] Load all products',
        loadProductById:'product] Load product by id',
    
        productsClear:'[product] Products Clear',
    
        authLogin:'[auth] Login',
        authLogout:'[auth] Logout',
    
        authChecking:'[auth] checking login state',
        authCheckingFinish:'[auth] Finish checking login state',
    
    
        uiStartLoading:'[ui] start loading',
        uiFinishLoading:'[ui] finish loading',
        
        cartLoaded:'[cart] Cart Loades',
    
        cartAddNew:'[cart] Cart Add new',
        
        cartClear:'[cart] Cart Clear'
    })
  });
  
});
