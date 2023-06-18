import React from "react";
import Course from "./Course";
import images from "../img/images";
const Courses = () => {
  const courseList = [
    {
      title:
        "Bachelor of Science in Computer Science and Information Technology - B.Sc. CSIT",
      abstract:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur commodi necessitatibus in quia non qui alias harum blanditiis, dicta eius, voluptatibus porro dignissimos minima aspernatur ratione maxime delectus dolores sapiente a eos. Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ipsum ipsam, omnis quibusdam fuga dolore sit odit modi eaque pariatur impedit qui, ut facilis dicta rerum quae similique deleniti est recusandae eligendi autem.",
      imgUrl: images.sampleCourseImg,
      href: "/readmore",
    },
    {
      title: "Bachelor in Computer Application - BCA",
      abstract:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur commodi necessitatibus in quia non qui alias harum blanditiis, dicta eius, voluptatibus porro dignissimos minima aspernatur ratione maxime delectus dolores sapiente a eos. Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ipsum ipsam, omnis quibusdam fuga dolore sit odit modi eaque pariatur impedit qui, ut facilis dicta rerum quae similique deleniti est recusandae eligendi autem.",
      imgUrl: images.sampleCourseImg,
      href: "/readmore",
    },
    {
      title: "Bachelor in Business Studies - BBS",
      abstract:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur commodi necessitatibus in quia non qui alias harum blanditiis, dicta eius, voluptatibus porro dignissimos minima aspernatur ratione maxime delectus dolores sapiente a eos. Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ipsum ipsam, omnis quibusdam fuga dolore sit odit modi eaque pariatur impedit qui, ut facilis dicta rerum quae similique deleniti est recusandae eligendi autem.",
      imgUrl: images.sampleCourseImg,
      href: "/readmore",
    },
    {
      title: "+2 in Science, Commerce, Hotel Management",
      abstract:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur commodi necessitatibus in quia non qui alias harum blanditiis, dicta eius, voluptatibus porro dignissimos minima aspernatur ratione maxime delectus dolores sapiente a eos. Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ipsum ipsam, omnis quibusdam fuga dolore sit odit modi eaque pariatur impedit qui, ut facilis dicta rerum quae similique deleniti est recusandae eligendi autem.",
      imgUrl: images.sampleCourseImg,
      href: "/readmore",
    },
  ];

  return (
    <div className="courses">
      {courseList.map((course) => (
        <Course course={course} />
      ))}
    </div>
  );
};

export default Courses;
