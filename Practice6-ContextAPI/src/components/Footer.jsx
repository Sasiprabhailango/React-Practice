import React, { useContext } from "react";
import { UserContext } from "../App";


// using consumer to get value
export const Footer = () => {
  let { user } = useContext(UserContext);

   let date = new Date()

  return (
    <footer>
      {/* <p>{user.uEmail}</p> */}
      <UserContext.Consumer>
        {
            ({user}) =>{
                return(
                <h4>{user.uEmail} - {date.getFullYear()}</h4>
                // <h4>Date {data.getFullYear()}</h4>
                )
            } 
        }
      </UserContext.Consumer>
    </footer>
  );
};
