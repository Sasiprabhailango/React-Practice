// aasign value as globaly and use it every where 

import { createContext, useState } from "react";
import { Content } from "./components/Content";
import Header from "./components/Header";
import { Footer } from "./components/Footer";

// export the createcontext
export let  UserContext = createContext();


function App() {

let [user,setUser] = useState({
  uName : "Sai",
  uDegree : "BE-CSE",
  uSkills : "HTML , CSS , JS , React",
  uPhone : "9876543210",
  uEmail : "sai017@gmail.com"
})



  return (
    <UserContext.Provider value={{user}}>
      <div className="box">
        
          <Header />
        
        <div className="content">
          <Content/>
        </div>
       
           <Footer/>
        
      </div>
    </UserContext.Provider>
  );
}

export default App;
