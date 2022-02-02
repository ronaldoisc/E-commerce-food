import { useFetch } from "../../helpers/fetch";

describe('test in the fetch.js file', () => {
  test('the login should be pass', async () => {
     
    const resp=await useFetch('auth/login',{username:"mor_2314",password:"83r5^_"},'POST');
    const body=await resp.json();
    expect(resp instanceof Response ).toBe(true);
    expect(typeof body.token).toEqual('string')
    
  });


  test('the login should be fail', async () => {

    const resp=await useFetch('auth/login',{username:"mor_2314",password:"83r5^"},'POST');
    const body=await resp.text();
    expect(body).toEqual("username or password is incorrect");

  });
  
  
  
});
