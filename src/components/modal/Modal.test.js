import React from 'react';
import { render, screen } from '@testing-library/react';
import Modal from './Modal';

beforeEach(() => {
  const modalRoot = document.createElement('div');
  modalRoot.setAttribute('id', 'modal-root');
  document.body.appendChild(modalRoot);
});

describe('Modal', () => {
  it('renders the overlay and modal', () => {
    render(<Modal />);

    expect(screen.getByTestId('overlay')).toBeInTheDocument();
    expect(screen.getByTestId('modal')).toBeInTheDocument();
  });
});
