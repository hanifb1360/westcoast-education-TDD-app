import { useContext } from 'react';
import Context from '../../context/Context';

const AddTeacherButton = () => {
  const context = useContext(Context);

  const openModal = () => {
    context.modalContentHandler('teacher');
    context.showModal();
  };

  return (
    <button className="btn" onClick={openModal}>
      Add new teacher
    </button>
  );
};

export default AddTeacherButton;
