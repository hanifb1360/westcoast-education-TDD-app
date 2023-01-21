import CoursesList from '../courses/CoursesList';
import styles from './Home.module.css';

const Home = () => {
  return (
    <section className={styles.container} data-testid="home-component">
      <h2 className={styles.title}>Welcome to Westcoast Education</h2>
      <div className={styles.listWrapper}>
        <CoursesList />
      </div>
    </section>
  );
};

export default Home;
