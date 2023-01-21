import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

const TeacherDetails = () => {
  const [teacher, setTeacher] = useState({});
  const { id } = useParams();

  useEffect(() => {
    const fetchData = async () => {
      const data = await fetch(`http://localhost:4000/teachers/${id}`);
      const json = await data.json();
      return json;
    };

    const setData = async () => {
      const results = await fetchData().catch(console.error);
      setTeacher(results);
    };

    setData();
  }, [id]);

  return (
    <section className="page-container" data-testid="teacher-component">
      <h2>
        {teacher.firstName} {teacher.lastName}
      </h2>
      <div className="teacher-details-container">
        <div className="teacher-details">
          <h3>Personal Information</h3>
          <p>Social Security Number: {teacher.social_security_number}</p>
          <p>Email: {teacher.email}</p>
          <p>Phone Number: {teacher.phoneNumber}</p>
          <p>Competences: {teacher.competence_areas}</p>
        </div>
      </div>
    </section>
  );
};

export default TeacherDetails;
