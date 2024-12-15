// the type for the Gify data
export type GifyType = {
  id: string;
  title: string;
  images: {
    fixed_height: {
      url: string;
    };
  };
};

// the state type
export type GifyStateType = {
  gifs: GifyType[];
  loading: boolean;
  error: string | null;
  searchQuery: string;
};

// the action type
export type Action =
  | { type: 'SET_GIFS'; payload: GifyType[] }
  | { type: 'SET_ERROR'; payload: string }
  | { type: 'SET_IS_LOADING'; payload: boolean }
  | { type: 'SET_SEARCH_QUERY'; payload: string };

// Initial state
export const initialState: GifyStateType = {
  gifs: [],
  loading: true,
  error: null,
  searchQuery: '',
};

export const reducer = (state: GifyStateType, action: Action): GifyStateType => {
  switch (action.type) {
    case 'SET_GIFS':
      return { ...state, gifs: action.payload, loading: false, error: null };
    case 'SET_ERROR':
      return { ...state, error: action.payload, loading: false };
    case 'SET_SEARCH_QUERY':
      return { ...state, error: null, loading: false, searchQuery: action.payload};
    case 'SET_IS_LOADING':
      return { ...state, error: null, loading: action.payload };
    default:
      return state;
  }
};