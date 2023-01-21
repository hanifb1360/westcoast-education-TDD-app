import { useState, useEffect } from 'react';
import styles from './TeachersList.module.css';

const TeacherList = (props) => {
  const [teachers, setTeachers] = useState([]);

  useEffect(() => {
    fetch('http://localhost:4000/teachers')
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        setTeachers(data);
      });
  }, []);

  return (
    <section className={styles.container} data-testid="teachers-list-component">
      <h2 className={styles.title}>Teachers</h2>

      <ul className={styles.list}>
        {teachers.map((teacher) => (
          <li className={styles.listItem} key={teacher.id}>
            <p className={styles.listItemText}>
              {teacher.firstName} {teacher.lastName}
            </p>

            <a href={`/teachers/${teacher.id}`}>More info</a>
          </li>
        ))}
      </ul>
    </section>
  );
};

export default TeacherList;
