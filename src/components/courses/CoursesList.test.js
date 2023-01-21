import { screen, render } from '@testing-library/react';

import CoursesList from './CoursesList';

describe('CoursesList component', () => {
  const setup = () => {
    render(<CoursesList />);
  };

  test('it has a title', () => {
    setup();

    const pageTitle = screen.getByRole('heading');

    expect(pageTitle).toHaveTextContent('Courses');
  });
});
