import { useFetch } from "../helpers/fetch"
import { types } from "../types/types";
import Swal from 'sweetalert2'
import { startClearProducts, startLoadingAllData } from "./products";
import {  startClearCart } from "./cart";

export const startLogin=(username,password)=>{
    
    return async(dispatch)=>{
        
            try {
                const resp=await useFetch('auth/login',{username,password},'POST');
                const body=await resp.text() || resp.json();
                console.log(body);
              if(body.token){
                 localStorage.setItem('user',JSON.stringify({username,token:body}));
                 dispatch(login({ username}));
                 dispatch(startLoadingAllData());
              }else{
                  Swal.fire('Error',body,'error');
              }
                
            } catch (error) {
                Swal.fire('Error','Something was wrong','error');
                
            }
       
    }
}

const login=(user)=>({
    type:types.authLogin,
    payload:user

})


export const startLogout=()=>{
    return (dispatch)=>{
        localStorage.clear();
        dispatch(logout());
        dispatch(startClearProducts());
        dispatch(startClearCart());
    }
}

const logout=()=>({
    type:types.authLogout
});




export const startChecking=()=>{
    return (dispatch)=>{

        const user=localStorage.getItem('token');
        
        if(user!=null){
           const {username}= JSON.parse(user);
            dispatch(login({username}))
            dispatch(startLoadingAllData());
        }else{
            dispatch(checkingFinish());
        }
    }
}


const checkingFinish=()=>({
    type:types.authCheckingFinish
})

