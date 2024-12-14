import { reducer, GifyStateType, Action } from './gifyReducer';


let state: GifyStateType = {
  gifs: [],
  loading: false,
  error: null,
  searchQuery: ''
}
beforeEach(() => {
  state = {
    gifs: [],
    loading: true,
    error: null,
    searchQuery: ''
  }
});
describe('gify reducer', () => {
  describe('SET_GIFS', () => {
    const newGifs = [
      {
        id: '001',
        title: 'foo',
        images: {
          fixed_height: {
            url: 'bar.com'
          }
        }
      }
    ];
    test('It should set the new gifys to the state', () => {
      const reducedState  = reducer(state, {type: 'SET_GIFS', payload: newGifs});
      expect(reducedState.gifs.length).toBeGreaterThan(0);
      expect(reducedState.gifs[0].id).toEqual('001');
    });

    test('It should set error to be null', () => {
      const reducedState  = reducer(state, {type: 'SET_GIFS', payload: newGifs});
      expect(reducedState.gifs.length).toBeGreaterThan(0);
      expect(reducedState.error).toEqual(null);
    });

    test('It should set loading to be false', () => {
      const reducedState  = reducer(state, {type: 'SET_GIFS', payload: newGifs});
      expect(reducedState.gifs.length).toBeGreaterThan(0);
      expect(reducedState.loading).toEqual(false);
    });
  });


  describe('SET_ERROR', () => {
    const error = 'something is wrong';
    test('It should NOT change the previous gifys state', () => {
      const reducedState  = reducer(state, {type: 'SET_ERROR', payload: error});
      expect(reducedState.gifs.length).toBe(0);
    });

    test('It should set error to be the error passed by the payload', () => {
      const reducedState  = reducer(state, {type: 'SET_ERROR', payload: error});
      expect(reducedState.error).toEqual(error);
    });

    test('It should set loading to be false', () => {
      const reducedState  = reducer(state, {type: 'SET_ERROR', payload: error});
      expect(reducedState.loading).toEqual(false);
    });
  });

  describe('SET_SEARCH_QUERY', () => {
    const newSearchQueryAction: Action = {
      type: 'SET_SEARCH_QUERY', payload: 'searchGify'
    };
    test('It should NOT change the previous gifys state', () => {
      const reducedState  = reducer(state, newSearchQueryAction);
      expect(reducedState.gifs.length).toBe(0);
    });

    test('It should change the searchQuery to the new one', () => {
      const reducedState  = reducer(state, newSearchQueryAction);
      expect(reducedState.searchQuery).toBe(newSearchQueryAction.payload);
    });

    test('It should set error to be null', () => {
      const reducedState  = reducer(state, newSearchQueryAction);
      expect(reducedState.error).toEqual(null);
    });

    test('It should set loading to be false', () => {
      const reducedState  = reducer(state, newSearchQueryAction);
      expect(reducedState.loading).toEqual(false);
    });
  });

  describe('SET_IS_LOADING', () => {
    let newSetIsLoadingAction: Action = {
      type: 'SET_IS_LOADING', payload: true
    };
    test('It should NOT change the previous gifys state', () => {
      const reducedState  = reducer(state, newSetIsLoadingAction);
      expect(reducedState.gifs.length).toBe(0);
    });

    test('It should set error to be null', () => {
      const reducedState  = reducer(state, newSetIsLoadingAction);
      expect(reducedState.error).toEqual(null);
    });

    test('It should set loading to be the same as the payload value', () => {
      let reducedState  = reducer(state, newSetIsLoadingAction);
      expect(reducedState.loading).toEqual(true);
      (newSetIsLoadingAction as Action) = { ...newSetIsLoadingAction, payload: false }
      reducedState  = reducer(state, newSetIsLoadingAction);
      expect(reducedState.loading).toEqual(false);
    });
  });
});