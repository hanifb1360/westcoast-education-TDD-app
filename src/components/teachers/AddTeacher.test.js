import { render, screen } from '@testing-library/react';
import AddTeacher from './AddTeacher';

describe('AddTeacher component', () => {
  const setup = () => {
    render(<AddTeacher />);
  };

  test('has a title', () => {
    setup();

    const componentsTitle = screen.getByRole('heading', {
      name: 'Add Teacher',
    });

    expect(componentsTitle).toBeInTheDocument();
  });

  describe('has placeholders in inputs', () => {
    test('First Name', () => {
      setup();

      const firstNameInput = screen.getByPlaceholderText('First Name');

      expect(firstNameInput).toBeInTheDocument();
    });
    test('Last Name', () => {
      setup();

      const lastNameInput = screen.getByPlaceholderText('Last Name');

      expect(lastNameInput).toBeInTheDocument();
    });
    test('Social Security Number', () => {
      setup();

      const ssnInput = screen.getByPlaceholderText('Social Security Number');

      expect(ssnInput).toBeInTheDocument();
    });
    test('Email', () => {
      setup();

      const emailInput = screen.getByPlaceholderText('Email');

      expect(emailInput).toBeInTheDocument();
    });
    test('Phone Number', () => {
      setup();

      const phoneNumberInput = screen.getByPlaceholderText('Phone Number');
      expect(phoneNumberInput).toBeInTheDocument();
    });

    test('has a competence input', () => {
      setup();
      const competenceInput = screen.getByPlaceholderText('Competence');
      expect(competenceInput).toBeInTheDocument();
    });

    describe('has buttons', () => {
      test('Add button', () => {
        setup();
        const addButton = screen.getByRole('button', { name: 'Add' });
        expect(addButton).toBeInTheDocument();
      });
      test('Cancel button', () => {
        setup();

        const cancelButton = screen.getByRole('button', { name: 'Cancel' });
        expect(cancelButton).toBeInTheDocument();
      });
    });
  });
});
