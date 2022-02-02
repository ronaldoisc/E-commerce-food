import { authReducer } from "../../reducers/authReducer";
import { types } from "../../types/types";

const initialState={
    checking:true
}

describe('test in the authReducer', () => {
  test('should return the default state', async () => {
       const state=authReducer(initialState,{});
       expect(state).toEqual( { checking: true });
  });

  test('should authenticate the user', async () => {
      const action={
          type:types.authLogin,
          payload:{username:'ronaldo'}
      }
      const state=authReducer(initialState,action);
      expect(state).toEqual( { checking: false, user:{ username: 'ronaldo'} })
  });

  test('should deauthenticate user', async () => {
   
    const currentState={
        username:'Ronaldo'
    }
    const action={
        type:types.authLogout
    }

    const state=authReducer(currentState,action)
    expect(state).toEqual( { checking: false,user:{} });
  });
  
});
