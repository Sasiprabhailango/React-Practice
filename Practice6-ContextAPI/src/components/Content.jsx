import React, { useContext } from "react";
import { UserContext } from "../App";

export const Content = () => {
  let { user } = useContext(UserContext);

//   console.log(user);
  return (
    <div>
      <h3>Hello Everyone ,</h3>
      <p>
        I am {user.uName}, an aspiring developer passionate about building web
        projects.
      </p>
      <h5>About me</h5>
      
        <ul>
            <li>Qualification : Completed {user.uDegree}</li>
            <li>Skills : {user.uSkills}</li>
        </ul>
      
      <h5>Contact</h5>
      <p>Phone Number : {user.uPhone}</p>
      <p>Email : {user.uEmail}</p>
    </div>
  );
};
