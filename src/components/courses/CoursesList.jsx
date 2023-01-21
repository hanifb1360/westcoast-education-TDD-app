import { useState, useEffect } from 'react';

import styles from './CoursesList.module.css';

const CoursesList = (props) => {
  const [courses, setCourses] = useState([]);

  useEffect(() => {
    fetch('http://localhost:4000/courses')
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        setCourses(data);
      });
  }, []);

  return (
    <section className={styles.container} data-testid="courses-list-component">
      <h2 className={styles.title}>Courses</h2>

      <ul className={styles.list} data-testid="courses-list">
        {courses.map((course) => (
          <li className={styles.listItem} key={course.id}>
            <p className={styles.listItemText}>{course.courseName}</p>

            <a href={`/courses/${course.id}`}>More info</a>
          </li>
        ))}
      </ul>
    </section>
  );
};

export default CoursesList;
