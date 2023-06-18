import React from "react";
import TeacherCard from "./TeacherCard";
import TeacherProfile from "./TeacherProfile";
import images from "../img/images";
const Teachers = () => {
  const principalDetail = {
    teacherName: "Shree Karki",
    profession: "Principal",
    imgUrl: images.shreeKarki,  
  }
  const teacherList = [
    {
      teacherName: "Umesh Pathak",
      profession: "Software Developer",
      imgUrl: images.umeshPathak,
      noteUrl: "/notes",
    },
    {
      teacherName: "Sunny Pandey",
      profession: "Software engineer",
      imgUrl: images.sunnyPandey,
      noteUrl: "/notes",
    },
    {
      teacherName: "Rikesh Shrestha",
      profession: "Software engineer",
      imgUrl: images.rikeshShrestha,
      noteUrl: "/notes",
    },
    {
      teacherName: "Sonelal Jha",
      profession: "Mathematics Professor",
      imgUrl: images.sonelalJha,
      noteUrl: "/notes",
    },
    {
      teacherName: "Shyam Shah",
      profession: "Physics Professor",
      imgUrl: images.shyamShah,
      noteUrl: "/notes",
    },
  ];
  return (
    <section className="teacherSectionMain">
      <TeacherProfile teacher={principalDetail} />
      <section className="teacherSection">
        <h1 className="teachersHead">Our Experienced Teachers</h1>
        {teacherList.map((teacher, ind) => (
          <TeacherCard teacher={teacher} key={ind}/>
        ))}
      </section>
    </section>
  );
};

export default Teachers;
