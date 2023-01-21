import { fireEvent, render, screen } from '@testing-library/react';
import AddCourseButton from './AddCourseButton';
import Context from '../../context/Context';

describe('AddCourseButton', () => {
  test('should render the add course button and open modal when clicked', () => {
    // creates a mock object for context
    const mockModalContentHandler = jest.fn();
    const mockShowModal = jest.fn();
    const contextValues = {
      modalContentHandler: mockModalContentHandler,
      showModal: mockShowModal,
    };

    // Renders the component and passes the mock context
    render(
      <Context.Provider value={contextValues}>
        <AddCourseButton />
      </Context.Provider>
    );

    const button = screen.getByText('Add new Course');
    expect(button).toBeInTheDocument();
    expect(mockModalContentHandler).not.toHaveBeenCalled();
    expect(mockShowModal).not.toHaveBeenCalled();
    fireEvent.click(button);

    expect(mockModalContentHandler).toHaveBeenCalledWith('course');
    expect(mockShowModal).toHaveBeenCalled();
  });
});
