import configureStore from 'redux-mock-store' //ES6 modules
import thunk from 'redux-thunk';
import { mount } from 'enzyme';
import { Provider } from 'react-redux';
import { AppRouter } from '../../router/AppRouter';
const middlewares = [thunk]
const mockStore = configureStore(middlewares);

const initState = {
    auth: {
        checking: true
    }
}
let store = mockStore(initState);


describe('test in the <AppRouter/>', () => {

    test('should show wait', async () => {

        const wrapper = mount(
            <Provider store={store}>
                <AppRouter />
            </Provider>
        )

        expect(wrapper).toMatchSnapshot();
        expect(wrapper.find('h2').exists()).toBe(true);

    });

    test('should show the public route', async () => {

        const initState = {
            auth: {
                checking: false,
                user: {}

            }
        }
        let store = mockStore(initState);
        const wrapper = mount(
            <Provider store={store}>
                <AppRouter />
            </Provider>
        )

        expect(wrapper).toMatchSnapshot();
        expect(wrapper.find('.container-login').exists()).toBe(true);

    });

    test('should show the private route', async () => {
        const initState = {
            ui: {
                loading: false
            },
            data: {
                categories:  [],
                products:    [],
                allProducts: []
            },
            auth: {
                checking: false,
                user: {
                    username: 'ronaldo'
                },
            },
            cart: {
              userCart:[] 
            }
        }

        let store = mockStore(initState);
        const wrapper = mount(
            <Provider store={store}>
                <AppRouter />
            </Provider>
        )

        expect(wrapper).toMatchSnapshot();
        expect(wrapper.find('.topbar').exists()).toBe(true);
    });



});
