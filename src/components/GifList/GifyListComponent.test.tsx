import { render, screen } from '@testing-library/react';
import GifyListComponent from './GifyListComponent';
import '@testing-library/jest-dom';

// Mock data for testing
const testGifys = [
  {
    id: '1',
    title: 'Test Gif 1',
    images: {
      fixed_height: {
        url: 'http://test.com/test1.gif',
      },
    },
  },
  {
    id: '2',
    title: 'Test Gif 2',
    images: {
      fixed_height: {
        url: 'http://test.com/test2.gif',
      },
    },
  },
];

describe('GifyList Component', () => {
  it('should render the list of gifys', () => {
    render(<GifyListComponent gifys={testGifys} />);

    // Check if the images are rendered correctly
    const image1 = screen.getByRole('img', { name: /Test Gif 1/i });
    expect(image1).toHaveAttribute('src', 'http://test.com/test1.gif');

    const image2 = screen.getByRole('img', { name: /Test Gif 2/i });
    expect(image2).toHaveAttribute('src', 'http://test.com/test2.gif');
  });


  it('should render an empty list if no gifys are provided', () => {
    render(<GifyListComponent gifys={[]} />);

    // Check if the wrapper is empty
    const wrapper = screen.getByTestId('gify-list');
    expect(wrapper).toBeEmptyDOMElement();
  });
});
