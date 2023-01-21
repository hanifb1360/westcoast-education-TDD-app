import { useRef } from 'react';
import context from '../../context/Context';
import { useContext } from 'react';
import styles from './AddTeacher.module.css';

const AddTeacher = () => {
  const { setTeachers, hideModal } = useContext(context);

  const firstNameInput = useRef();
  const lastNameInput = useRef();
  const ssnInput = useRef();
  const emailInput = useRef();
  const phoneNumberInput = useRef();
  const competenceInput = useRef();
  const newCompetenceList = [];

  const clearForm = () => {
    firstNameInput.current.value = '';
    lastNameInput.current.value = '';
    ssnInput.current.value = '';
    emailInput.current.value = '';
    phoneNumberInput.current.value = '';
    newCompetenceList.length = 0;
  };

  const onAddHandler = async (e) => {
    e.preventDefault();

    const teacher = {
      id: Date.now(),
      firstName: firstNameInput.current.value,
      lastName: lastNameInput.current.value,
      social_security_number: ssnInput.current.value,
      competence_areas: competenceInput.current.value,
      phoneNumber: phoneNumberInput.current.value,
      email: emailInput.current.value,
    };

    try {
      const response = await fetch('http://localhost:4000/teachers', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(teacher),
      });
      const data = await response.json();
      setTeachers(data);
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
    <div data-testid="add-teacher-container" className={styles.container}>
      <form>
        <h3>Add Teacher</h3>
        <input
          className={styles.input}
          placeholder="First Name"
          type="text"
          ref={firstNameInput}
          required
        />

        <input
          className={styles.input}
          placeholder="Last Name"
          type="text"
          ref={lastNameInput}
          required
        />

        <input
          className={styles.input}
          placeholder="Social Security Number"
          type="text"
          ref={ssnInput}
          required
        />

        <input
          className={styles.input}
          placeholder="Email"
          type="email"
          ref={emailInput}
          required
        />

        <input
          className={styles.input}
          placeholder="Phone Number"
          type="text"
          ref={phoneNumberInput}
          required
        />

        <input
          className={styles.input}
          placeholder="Competence"
          type="text"
          ref={competenceInput}
          required
        />

        <button className={styles.button} onClick={onAddHandler}>
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

export default AddTeacher;
