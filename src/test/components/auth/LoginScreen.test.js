import configureStore from 'redux-mock-store' //ES6 modules
import thunk from 'redux-thunk';

import {mount} from 'enzyme';
import { Provider } from 'react-redux';
import { LoginScreen } from '../../../components/auth/LoginScreen';



const middlewares = [thunk]
const mockStore = configureStore(middlewares);

const initialState = {}
const store = mockStore(initialState)

describe('test in the <LoginScreen/>', () => {
  
    test('should show correctly', async () => {
     
        const wrapper=mount(
            <Provider store={store}>
                <LoginScreen/>
            </Provider>
        )

        expect(wrapper).toMatchSnapshot();
      
    });
    
});
