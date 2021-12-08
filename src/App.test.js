import { render, screen } from '@testing-library/react';
import App from './App';

// Pulls screen text and asserts if its in the document
test('renders learn react link', () => {
  render(<App />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});
