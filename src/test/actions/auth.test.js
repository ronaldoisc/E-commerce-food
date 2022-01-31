
import configureStore from 'redux-mock-store' //
import thunk from 'redux-thunk';
import { startLogin } from '../../actions/auth';
import { types } from '../../types/types';



const middlewares = [thunk]
const mockStore = configureStore(middlewares);

const initState={}
let store=mockStore(initState);
Storage.prototype.setItem=jest.fn();
describe('test in the auth actions', () => {
    beforeEach(()=>{
        store=mockStore(initState);
        jest.clearAllMocks();
    })

    test('startLogin should be correct', async () => {

       await store.dispatch(startLogin('mor_2314','83r5^_'));
        const actions= store.getActions();
       expect(actions[0]).toEqual({
           type:types.authLogin,
           payload:{
               username:expect.any(String)
           }
           
       })

       expect(localStorage.setItem).toHaveBeenCalledWith('user',expect.any(String))
    });
    
});
