import { Link } from 'react-router-dom';
import logo from '../../assets/logo.svg';
import styles from './Navbar.module.css';

const Navbar = () => {
  return (
    <nav data-testid="navbar-container" className={styles.container}>
      <Link to="/">
        <img className={styles.logo} src={logo} alt="logo" />
      </Link>
      <ul className={styles.links}>
        <li className={styles.link}>
          <Link className={styles.a} to="/admin">
            Admin
          </Link>
        </li>
        <li>
          <Link className={styles.a} to="/courses">
            Courses
          </Link>
        </li>
        <li>
          <Link className={styles.a} to="/teachers">
            Teachers
          </Link>
        </li>
      </ul>
    </nav>
  );
};
export default Navbar;
