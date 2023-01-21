import { screen, render, fireEvent } from '@testing-library/react';

import Home from './Home';

describe('HomePage', () => {
  const Setup = () => {
    render(<Home />);
  };

  describe('Has a title', () => {
    test('Page title exist', () => {
      Setup();

      const pageTitle = screen.getByText('Welcome to Westcoast Education');

      expect(pageTitle).toBeInTheDocument();
    });
  });
});
