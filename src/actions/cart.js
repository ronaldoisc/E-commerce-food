
import Swal from 'sweetalert2';
import { useFetch } from '../helpers/fetch';
import { types } from '../types/types';
import { startloadProductById } from './products';


export const startLoadingCart = () => {
    return async (dispatch) => {

        const resp = await useFetch('carts/user/2');
        const body = await resp.json();

        const products = body[0].products;

        products.forEach(element => {

            dispatch(startloadProductById(element.productId))

        });
    }
}

export const cartLoad = (cart) => ({
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

export const startDeleteCart = (ProductId) => {
    return async () => {

        try {
            const resp = await useFetch(`products/${ProductId}`, {}, 'DELETE');
            const body = await resp.json();
            if (body) {
                Swal.fire('Success', 'Deleted successfuly', 'success');
            }
        } catch (error) {
            Swal.fire('Error', 'Something was wrong', 'error');
        }
    }
}

export const startClearCart = () => ({
    type: types.cartClear
})