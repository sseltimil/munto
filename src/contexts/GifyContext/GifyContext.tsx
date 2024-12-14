import { createContext, useReducer, useContext, ReactNode, useEffect } from 'react';
import { useDebounce } from '../../hooks';
import { reducer, initialState, GifyStateType, Action } from './gifyReducer';
import { useFetchGifys } from './gifyQuery';

type GifyContextType = {
  gifyState: GifyStateType;
  gifyDispatch: React.Dispatch<Action>;
};

type GifyProviderProps = {
  children: ReactNode;
};

// Create the context
const GifyContext = createContext<GifyContextType | undefined>(undefined);

// Context could be undefined. We handle the negative case here
// to ensure the availability of the context
const useGifyContext = () => {
  const context = useContext(GifyContext);
  if (!context) {
    throw new Error('useGify must be used within a GifyProvider');
  }
  return context;
};


const GifyProvider = ({ children }: GifyProviderProps) => {
  const [gifyState, gifyDispatch] = useReducer(reducer, initialState);
  const debounceValue = useDebounce(gifyState.searchQuery, 600);

  const { data, error, isSuccess } = useFetchGifys(debounceValue);

  // Dispatch data to reducer when query is successful
  useEffect(() => {
    if (isSuccess && data) {
      gifyDispatch({ type: 'SET_GIFS', payload: data });
    }
  }, [isSuccess, data]);

  // Dispatch error to reducer if query fails
  useEffect(() => {
    if (error) {
      gifyDispatch({ type: 'SET_ERROR', payload: error.message });
    }
  }, [error]);

  return (
    <GifyContext.Provider value={{ gifyState, gifyDispatch }}>
      {children}
    </GifyContext.Provider>
  );
};


export { GifyProvider, useGifyContext };
