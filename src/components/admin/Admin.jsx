import React from 'react';
import AddCourseButton from '../courses/AddCourseButton';
import AddTeacherButton from '../teachers/AddTeacherButton';
import styles from './Admin.module.css';

const Admin = () => {
  return (
    <div className={styles.container}>
      <AddCourseButton />
      <AddTeacherButton />
    </div>
  );
};

export default Admin;
