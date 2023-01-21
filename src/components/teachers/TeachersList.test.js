import { screen, render } from '@testing-library/react';

import TeachersList from './TeachersList';

describe('TeachersList component', () => {
  const setup = () => {
    render(<TeachersList />);
  };

  test('it has a title', () => {
    setup();

    const pageTitle = screen.getByRole('heading');

    expect(pageTitle).toHaveTextContent('Teachers');
  });
});
