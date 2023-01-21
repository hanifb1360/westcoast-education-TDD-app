import ReactDOM from 'react-dom';
import { useContext } from 'react';
import styles from './Modal.module.css';
import AddTeacher from '../teachers/AddTeacher';
import AddCourse from '../courses/AddCourse';
import Context from '../../context/Context';

const ModalOverlay = (props) => {
  const context = useContext(Context);
  return (
    <div className={styles.overlay} data-testid="overlay">
      <div className={styles.modal} data-testid="modal">
        {context.modalContent === 'teacher' && <AddTeacher />}
        {context.modalContent === 'course' && <AddCourse />}
      </div>
    </div>
  );
};

const Modal = () => {
  return ReactDOM.createPortal(
    <ModalOverlay />,
    document.querySelector('#modal-root')
  );
};

export default Modal;
