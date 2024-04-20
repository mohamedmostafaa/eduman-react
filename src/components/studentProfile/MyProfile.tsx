import React from "react";

const MyProfile = () => {
  return (
    <>
      <ul className="student-profile-info">
        <li>
          <h5>Registration Date :</h5>
          <span>October 15, 2022 10:30 am</span>
        </li>
        <li>
          <h5>First Name :</h5>
          <span>Steve</span>
        </li>
        <li>
          <h5>Last Name :</h5>
          <span>Smith</span>
        </li>
        <li>
          <h5>Username :</h5>
          <span>Steve3h</span>
        </li>
        <li>
          <h5>Email :</h5>
          <span>adminh@gmail.com</span>
        </li>
        <li>
          <h5>Phone :</h5>
          <span>(987) 547587587</span>
        </li>
        <li>
          <h5>Occupation :</h5>
          <span>Student</span>
        </li>
        <li>
          <h5>Biography :</h5>
          <span>
            Alison Johnson is finishing her first year at DePaul University
            where she is interested in business. Although she has yet to declare
            a major, she’s considering finance or marketing. After watching her
            parents run a restaurant for years, she knew at a very young age
            that she also wanted to go into business.
          </span>
        </li>
      </ul>
    </>
  );
};

export default MyProfile;
