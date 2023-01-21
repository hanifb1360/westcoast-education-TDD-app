import { fireEvent, render, screen } from '@testing-library/react';
import AddTeacherButton from './AddTeacherButton';
import Context from '../../context/Context';

describe('AddTeacherButton', () => {
  it('should render the add teacher button and open modal when clicked', () => {
    // create a mock object for context
    const mockModalContentHandler = jest.fn();
    const mockShowModal = jest.fn();
    const contextValues = {
      modalContentHandler: mockModalContentHandler,
      showModal: mockShowModal,
    };

    // Render the component and pass the mock context
    render(
      <Context.Provider value={contextValues}>
        <AddTeacherButton />
      </Context.Provider>
    );

    const button = screen.getByText('Add new teacher');
    expect(button).toBeInTheDocument();
    expect(mockModalContentHandler).not.toHaveBeenCalled();
    expect(mockShowModal).not.toHaveBeenCalled();

    fireEvent.click(button);

    expect(mockModalContentHandler).toHaveBeenCalledWith('teacher');
    expect(mockShowModal).toHaveBeenCalled();
  });
});
