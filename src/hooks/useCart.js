import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { startDeleteCart } from "../actions/cart";



export const useCart=()=>{
    const { userCart } = useSelector(state => state.cart);
    const dispatch = useDispatch();
   
     const [total, settotal] = useState(0);
   
     useEffect(() => {
       let total = 0;
       userCart.map(userc => {
         total += userc.price
         return settotal(total);
       })
     }, [userCart]);
   
   
     const handleDeleteCart=(ProductId)=>{
       dispatch(startDeleteCart(ProductId))
     }
   

    return {
        userCart,total,handleDeleteCart
    }
}