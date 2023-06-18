import React from "react";

const TeacherCard = ({teacher}) => {
  return (
    <div className="teacherCard">
      <div className="teacherImg">
        <img src={teacher.imgUrl} alt="" />
      </div>
      <div className="teacherDetails">
        <div className="name">{teacher.teacherName}</div>
        <div className="post">{teacher.profession}</div>
        <div className="links">
          <a className="fa fa-phone" aria-hidden="true"></a>
          <a className="fa fa-facebook" aria-hidden="true"></a>
          <a className="fa fa-envelope" aria-hidden="true"></a>
        </div>
        <div className="btn noteBtn">Notes</div>
      </div>
    </div>
  );
};

export default TeacherCard;
