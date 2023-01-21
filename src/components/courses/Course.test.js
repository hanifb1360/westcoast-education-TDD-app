import React from 'react';
import { render, screen } from '@testing-library/react';

import Course from './Course';

describe('Course component', () => {
  const setup = () => {
    render(<Course />);
  };

  test('has a title', () => {
    setup();

    const componentsTitle = screen.getByRole('heading', {
      name: 'Course Details',
    });

    expect(componentsTitle).toBeInTheDocument();
  });
});
