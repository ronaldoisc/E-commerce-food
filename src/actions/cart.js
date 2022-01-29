
import Swal from 'sweetalert2';
import { useFetch } from '../helpers/fetch';
import { types } from '../types/types';


export const startLoadingCart = () => {
    return async (dispatch) => {

        const resp = await useFetch('carts/user/2');
        const body = await resp.json();
        dispatch(cartLoad(body))


    }
}

const cartLoad = (cart) => ({
    type: types.cartLoaded,
    payload: cart
})


export const cartAddNew = (productId) => {
    return async () => {
        const today = new Date();

        const resp = await useFetch('carts', {
            userId: 2,
            date: today.toISOString(),
            products: [
                {
                    productId: productId,

                }
            ]
        },
            'POST')

        const body = await resp.json();


        if (body.id) {
            Swal.fire('Success', `Product added correctly ${JSON.stringify(body)}`, 'success')
        }

    }
}