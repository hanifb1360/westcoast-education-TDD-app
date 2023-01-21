import { useContext } from 'react';
import { useRef } from 'react';
import styles from './AddCourse.module.css';
import context from '../../context/Context';

const AddCourse = () => {
  const { setCourses, hideModal } = useContext(context);

  const courseNameInput = useRef();
  const courseNumberInput = useRef();
  const courseLengthInput = useRef();
  const courseStartDateInput = useRef();
  const courseDescriptionInput = useRef();

  const clearForm = () => {
    return (
      (courseNameInput.current.value = ''),
      (courseNumberInput.current.value = ''),
      (courseLengthInput.current.value = ''),
      (courseStartDateInput.current.value = ''),
      (courseDescriptionInput.current.value = '')
    );
  };

  const onAddHandler = async (e) => {
    e.preventDefault();

    const course = {
      id: Date.now(),
      courseName: courseNameInput.current.value,
      courseNumber: courseNumberInput.current.value,
      courseLength: courseLengthInput.current.value,
      courseStartDate: courseStartDateInput.current.value,
      courseDescription: courseDescriptionInput.current.value,
    };

    try {
      const response = await fetch('http://localhost:4000/courses', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(course),
      });
      const data = await response.json();
      setCourses(data);
    } catch (error) {
      console.error(error);
    }
    hideModal();
    clearForm();
  };

  const onHideHandler = () => {
    hideModal();
  };

  return (
    <div data-testid="add-course-container" className={styles.container}>
      <form>
        <h3>Add Course</h3>

        <input
          id="courseName"
          ref={courseNameInput}
          className={styles.input}
          placeholder="Course Name"
        />

        <input
          type="number"
          id="courseNumber"
          ref={courseNumberInput}
          className={styles.input}
          placeholder="Course Number"
        />

        <input
          id="courseLength"
          ref={courseLengthInput}
          className={styles.input}
          placeholder="Course Length"
        />

        <input
          type="date"
          id="courseStartDate"
          ref={courseStartDateInput}
          className={styles.input}
          placeholder="Course Start Date"
        />

        <input
          id="courseDescription"
          ref={courseDescriptionInput}
          className={styles.input}
          placeholder="Course Description"
        />

        <button onClick={onAddHandler} className={styles.button}>
          {' '}
          Add
        </button>
        <button onClick={onHideHandler} className={styles.button}>
          Cancel
        </button>
      </form>
    </div>
  );
};

export default AddCourse;
