import { render, screen } from '@testing-library/react';
import Admin from './Admin';

describe('Admin', () => {
  test('should render the add course and add teacher buttons', () => {
    render(<Admin />);
    expect(
      screen.getByRole('button', { name: 'Add new Course' })
    ).toBeInTheDocument();
    expect(
      screen.getByRole('button', { name: 'Add new teacher' })
    ).toBeInTheDocument();
  });
});
