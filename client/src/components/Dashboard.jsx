import React from "react";
import "../styles/adminDashboard.css";
const Dashboard = () => {
  return (
    <>
      <nav>
        <div class="navContent">
          <div class="left">
            <h2>Dashboard</h2>
          </div>
          <div class="right">
            <h4 id="adminName">Yogi Naresh Nath</h4>
            <span class="profileImg">
              <img src="/img/teachersImg/yogiNareshNath.jpg" alt="" />
            </span>
          </div>
        </div>
      </nav>
      <section class="userCountSection">
        <div class="card studentCard">
          {/* <div class="userCount"><%=students.length%></div> */}
          <div class="userType">Students</div>
        </div>
        <div class="card teacherCard">
          {/* <div class="userCount"><%=teachers.length%></div> */}
          <div class="userType">Teachers</div>
        </div>
        <div class="card adminCard">
          {/* <div class="userCount"><%=admins.length%></div> */}
          <div class="userType">Admin</div>
        </div>
      </section>
      {/* <%if( req.session.errorObject != null){%>
  <%locals.errorMessage=req.session.errorObject.errorMessage%>
  <%locals.hasError=req.session.errorObject.hasError%>
  <%locals.fullName=req.session.errorObject.fullName%>
  <%locals.email=req.session.errorObject.email%>
  <%locals.phoneNumber=req.session.errorObject.phoneNumber%>
  <%locals.userType=req.session.errorObject.userType%>
  <%}%>
  <%const currentTab=req.session.currentTab%>
  <% let studentStatus=teacherStatus=adminStatus=""%>
  <%currentTab=='admin'?adminStatus='activeUserList':currentTab=='teacher'?teacherStatus='activeUserList':studentStatus='activeUserList'%>
  <% let studentTableStatus=teacherTableStatus=adminTableStatus=""%>
  <%currentTab=='admin'?adminTableStatus='active':currentTab=='teacher'?teacherTableStatus='active':studentTableStatus='active'%> */}
      <section class="addUserPopUp">
        <dialog class="addUserModal">
          <h1 class="title <%= studentTableStatus %>" id="addStudentTitle">
            Add a Student
          </h1>
          <h1 class="title <%= teacherTableStatus %>" id="addTeacherTitle">
            Add a Teacher
          </h1>
          <h1 class="title <%= adminTableStatus %>" id="addAdminTitle">
            Add an Admin
          </h1>
          <form action="/admin/users" method="post">
            {/* <p id="errorMsgAddUserModal"><%=locals.errorMessage?locals.errorMessage:""%></p> */}
            {/* <%-include('../components/userDetailFormFields',{fullName:locals.fullName,email:locals.email,phoneNumber:locals.phoneNumber})%> */}
            <input
              type="radio"
              name="userType"
              id="studentRadio"
              value="student"
              checked
            />
            <input
              type="radio"
              name="userType"
              id="teacherRadio"
              value="teacher"
            />
            <input type="radio" name="userType" id="adminRadio" value="admin" />
            <div class="btns">
              <button type="button" class="cancelBtn btn">
                Cancel
              </button>
              <button type="submit" class="btn">
                Add
              </button>
            </div>
          </form>
        </dialog>
      </section>
      {/* <!-- This is section for studetns  -->
  <!-- We iterate over each student and render each of them --> */}
      <section class="userList">
        <div class="lists">
          <div class="usersBtn">
            <a
              data-target-table="#studentTable"
              data-user="#addStudentTitle"
              data-radioButton="#studentRadio"
              class="studentListBtn <%=studentStatus%>"
            >
              Student
            </a>
            <a
              data-target-table="#teacherTable"
              data-user="#addTeacherTitle"
              data-radioButton="#teacherRadio"
              class="teacherListBtn <%=teacherStatus%>"
            >
              Teacher
            </a>
            <a
              data-target-table="#adminTable"
              data-user="#addAdminTitle"
              data-radioButton="#adminRadio"
              class="adminListBtn <%=adminStatus%>"
            >
              Admin
            </a>
          </div>
          <div class="tableTop">
            <div class="right">
              <input
                type="text"
                placeholder="Search by Name"
                class="searchInput"
              />
              <a class="btn addBtn addStudent">Add</a>
            </div>
          </div>

          <table
            class="userListTable <%=studentTableStatus%>"
            id="studentTable"
          >
            {/* <%-include('./partials/_tableHeadBody',{users:students})%> */}
          </table>
          <table
            class="userListTable <%=teacherTableStatus%>"
            id="teacherTable"
          >
            {/* <%-include('./partials/_tableHeadBody',{users:teachers})%> */}
          </table>
          <table class="userListTable <%=adminTableStatus%>" id="adminTable">
            {/* <%-include('./partials/_tableHeadBody',{users:admins})%> */}
          </table>

          {/* <%req.session.currentTab=null%> */}
        </div>
      </section>
    </>
  );
};

{
  /* <%if(locals.hasError != null){%>
<script>
  let addUserModalCopy = document.querySelector(".addUserModal");
  addUserModalCopy.showModal();
</script>
<%}%>
<%req.session.errorObject=null%>
  )
} */
}
export default Dashboard;
