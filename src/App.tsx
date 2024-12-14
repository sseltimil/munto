import './App.css'
import Gifys from './components/GifList/GiftList';
import { useGifyContext } from './contexts/GifyContext/GifyContext';
import styled from 'styled-components';

const SearchInput = styled.input`
  padding: 1rem 1.5rem;
  font-size: 1.5rem;
  border: 1px solid #ccc;
`
function App() {
  const { gifyState, gifyDispatch } = useGifyContext();

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();
    gifyDispatch({ type: 'SET_SEARCH_QUERY', payload: e.target.value.trim()});
  };

  return (
    <>
      <h1>Montu - Gify</h1>
      <form onSubmit={(e) => e.preventDefault()}>
        <SearchInput
          type="text"
          onChange={handleSearch}
          placeholder="Search for GIFs..."
        />
      </form>
      <Gifys gifys={gifyState.gifs}></Gifys>
    </>
  )
}

export default App
