import { render, screen } from '@testing-library/react';

import AddCourse from './AddCourse';

describe('AddCourse component', () => {
  const setup = () => {
    render(<AddCourse />);
  };

  test('has a title', () => {
    setup();

    const componentsTitle = screen.getByRole('heading', { name: 'Add Course' });

    expect(componentsTitle).toBeInTheDocument();
  });

  describe('has placeholders in inputs', () => {
    test('Course Name', () => {
      setup();

      const courseNameInput = screen.getByPlaceholderText('Course Name');

      expect(courseNameInput).toBeInTheDocument();
    });
    test('Course Number', () => {
      setup();

      const CourseNumberInput = screen.getByPlaceholderText('Course Number');

      expect(CourseNumberInput).toBeInTheDocument();
    });
    test('Course Length', () => {
      setup();

      const CourseLengthInput = screen.getByPlaceholderText('Course Length');

      expect(CourseLengthInput).toBeInTheDocument();
    });
    test('Course StartDate', () => {
      setup();

      const CourseStartDateInput =
        screen.getByPlaceholderText('Course Start Date');

      expect(CourseStartDateInput).toBeInTheDocument();
    });
    test('CourseDescription', () => {
      setup();

      const CourseDescriptionInput =
        screen.getByPlaceholderText('Course Description');

      expect(CourseDescriptionInput).toBeInTheDocument();
    });
  });
});
