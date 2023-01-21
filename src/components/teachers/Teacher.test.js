import React from 'react';
import { render, screen } from '@testing-library/react';

import Teacher from './Teacher';

describe('Teacher component', () => {
  const setup = () => {
    render(<Teacher />);
  };

  test('has a title', () => {
    setup();

    const componentsTitle = screen.getByRole('heading', {
      name: 'Personal Information',
    });

    expect(componentsTitle).toBeInTheDocument();
  });
});
