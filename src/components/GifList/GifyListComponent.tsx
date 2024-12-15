import { GifyType } from '../../contexts/GifyContext/gifyReducer';
import styled from 'styled-components';

export type GifyListProps = {
  gifys: GifyType[];
}

// styled components
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
// Gify list item
// @param: data - gify data.
const GifyListItem = ({ data }: { data: GifyType }) => {
  return (
    <div>
      <img src={data.images.fixed_height.url} alt={data.title} />
    </div>
  )
}

// Gify list
// @param: gifys - array of gifys
const GifyListComponent: React.FC<GifyListProps> = ({ gifys }) => {
  return (
    <Wrapper data-testid="gify-list">
      {gifys?.map((gify) => (
        <GifyListItem key={gify.id} data={gify}></GifyListItem>
      ))}
    </Wrapper>
  );
};

export default GifyListComponent;
