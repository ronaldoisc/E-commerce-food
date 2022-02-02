
import configureStore from 'redux-mock-store' //ES6 modules
import thunk from 'redux-thunk';
import Swal from 'sweetalert2';
import { login, logout,startLogin } from '../../actions/auth';

import { types } from '../../types/types';

jest.mock('sweetalert2', () => ({
    fire: jest.fn()
}))




const middlewares = [thunk]
const mockStore = configureStore(middlewares);

const initState = {}
let store = mockStore(initState);
Storage.prototype.setItem = jest.fn();
describe('test in the auth actions', () => {
    beforeEach(() => {
        store = mockStore(initState);
        jest.clearAllMocks();
    })

    test('startLogin should be correct', async () => {

        await store.dispatch(startLogin('mor_2314', '83r5^_'));
        const actions = store.getActions();
        
        expect(actions[0]).toEqual({
            type: types.authLogin,
            payload: {
                username: expect.any(String)
            }
        })
        expect(localStorage.setItem).toHaveBeenCalledWith('user', expect.any(String))

       
    });

    test('startLogin should be incorrect', async () => {

        await store.dispatch(startLogin('mor_2314', '83r5^'));
        const actions = store.getActions();
        expect(actions).toEqual([]);
        expect(Swal.fire).toHaveBeenCalledWith("Error", "Something was wrong", "error");

    });

    test('login should be create the action', async () => {

        await store.dispatch(login('mor_2314', '83r5^_'));

        let actions = store.getActions();
        expect(actions[0]).toEqual({
            type: types.authLogin,
            payload: 'mor_2314'
        })

        await store.dispatch(logout());
        expect(actions[1]).toEqual({
            type: types.authLogout
        })

    });

    
    



});
