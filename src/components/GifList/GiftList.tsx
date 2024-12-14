import { Gify } from '../../contexts/GifyContext/gifyReducer';
import styled from 'styled-components';

const Wrapper = styled.div`
  border: 1px solid #ccc;
  padding: 1rem;
  display: flex;
  flex-wrap: wrap;

  @media (max-width: 768px) {
    /* demonstration of responsiveness */
    flex-direction: column;
  }
`
const Gifys = ({ gifys }: {gifys: Gify[]}) => {
  return (
    <Wrapper>
      {gifys && gifys.map((gif) => (
        <div key={gif.id}>
          <img src={gif.images.fixed_height.url} alt={gif.title} />
        </div>
      ))}
    </Wrapper>
  );
};

export default Gifys;
