import { uiFinishLoading, uiStartLoading } from "../../actions/ui";
import { uiReducer } from "../../reducers/uiReducer";

const initialState={
    loading:false
}
describe('test in the uiReducer', () => {
  test('should return the default state', async () => {
    const state=uiReducer(initialState,{});
    expect(state).toEqual(initialState);

  });

  test('should return true and false the loading', async () => {
    const startLoading=uiStartLoading();
    const state=uiReducer(initialState,startLoading);
    expect(state).toEqual( { loading: true });

    const finishLoading=uiFinishLoading();
    const stateFinish=uiReducer(initialState,finishLoading);
    expect(stateFinish).toEqual({ loading: false })
  });
  
  
});
