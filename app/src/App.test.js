import React from 'react';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import App from './App'; 


test('Search box is present', () => {
  // Render the App component
  const { getByLabelText } = render(<App />);
  
  // Use getByLabelText to find the search box element by its label
  const searchBox = getByLabelText('Search'); // Adjust the label text as needed
  
  // Assert that the search box is present in the document
  expect(searchBox).toBeInTheDocument();
});

