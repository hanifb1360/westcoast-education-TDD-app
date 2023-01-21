import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

const CourseDetails = () => {
  const [course, setCourse] = useState({});
  const { id } = useParams();

  useEffect(() => {
    const fetchData = async () => {
      const data = await fetch(`http://localhost:4000/courses/${id}`);
      const json = await data.json();
      return json;
    };

    const setData = async () => {
      const results = await fetchData().catch(console.error);
      setCourse(results);
    };

    setData();
  }, [id]);

  return (
    <section className="page-container" data-testid="course-component">
      <h2>Course Details</h2>
      <div className="course-details-container">
        <h2>{course.courseName}</h2>
        <p>Course Length: {course.courseLength}</p>
        <p>Course Start Date: {course.courseStartDate}</p>
        <p>Course Number: {course.courseNumber}</p>
        <p className="course-desc">{course.courseDescription}</p>
      </div>
    </section>
  );
};

export default CourseDetails;
