import React from "react";
import { Link } from "react-router-dom";

const Course = ({course}) => {
  return (
    <div className="course">
      <img className="courseImg" src={course.imgUrl}/>
      <div className="courseInfoContainer">
        <div className="courseInfo">
          <h1 className="courseTitle">{course.title}</h1>
          <p className="courseAbstract">{course.abstract}</p>
        </div>
        <Link className="readMoreBtn" to={course.href}>Read more</Link>
      </div>
    </div>
  );
};

export default Course;
