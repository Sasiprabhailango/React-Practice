import React, { useContext } from 'react'
import { UserContext } from '../App';

export const Header = () => {

  let {user} = useContext(UserContext);
  return (
   <header>
       
       
          <h4>Personal Presentation</h4> 
           <p>{" "}{user.uName.slice(0,1)}{" "}</p>
   </header>
       
  );
}
export default Header; 
