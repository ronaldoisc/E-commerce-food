import { useFetch } from "../helpers/fetch"
import { types } from "../types/types";
import Swal from 'sweetalert2'

export const startLogin=(username,password)=>{
    
    return async(dispatch)=>{
        try {
            const resp=await useFetch('auth/login',{username,password},'POST');
            const body=await resp.json();
            if(!body.msg){
               localStorage.setItem('token',JSON.stringify({username,token:body}));
               dispatch(login({ username}));
            }else{
                Swal.fire('Error',body.msg,'error');
            }
        } catch (error) {
            Swal.fire('Error','Something was wrong!','error');
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
        
    }
}

const logout=()=>({
    type:types.authLogout
});




export const startChecking=()=>{
    return (dispatch)=>{
        //check if exist a token
        const user=localStorage.getItem('token');
        if(user!=null){
           const {username}= JSON.parse(user);
            dispatch(login({username}))
        }else{
            dispatch(checkingFinish());
        }
    }
}


const checkingFinish=()=>({
    type:types.authCheckingFinish
})

