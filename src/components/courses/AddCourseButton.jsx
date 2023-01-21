import { useContext } from 'react';
import Context from '../../context/Context';

const AddCourseButton = () => {
  const context = useContext(Context);

  const openModal = () => {
    context.modalContentHandler('course');
    context.showModal();
  };

  return (
    <button className="btn" onClick={openModal}>
      Add new Course
    </button>
  );
};

export default AddCourseButton;
