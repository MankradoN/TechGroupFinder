import { render } from '@testing-library/react';
import Nav from './Nav';

test('renders navigation links', () => {
  const { getByText } = render(<Nav />);
  const homeLink = getByText('Home');
  const favoritesLink = getByText('Favorites');

  expect(homeLink).toBeInTheDocument();
  expect(favoritesLink).toBeInTheDocument();
});