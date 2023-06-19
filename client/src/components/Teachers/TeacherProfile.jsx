import React from "react";

const TeacherProfile = ({teacher, description}) => {
  return (
    <div>
      <section className="TeacherProfileSection">
        <div className="teacherImg">
          <img src={teacher.imgUrl} alt="" />
        </div>
        <div className="teacherProfileDetail">
          <h3 className="post">{teacher.profession}</h3>
          <h1 className="name">{teacher.teacherName}</h1>
          <p>
            {description}
          </p>
          <div className="links">
            <i className="fa fa-phone" aria-hidden="true"></i>
            <i className="fa fa-facebook" aria-hidden="true"></i>
            <i className="fa fa-envelope" aria-hidden="true"></i>
          </div>
        </div>
      </section>
    </div>
  );
};

export default TeacherProfile;
