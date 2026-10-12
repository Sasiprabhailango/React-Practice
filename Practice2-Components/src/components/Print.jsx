import styled from "styled-components";

// style-components
const Button = styled.button`
  background-color: rgb(40, 41, 43);
  color: white;
  padding: 20px;
  border-radius: 10px;
  box-shadow: 10px 10px 5px black;
  cursor: pointer;
`;

const NewButton = styled.button`
  background-color: rgb(31, 83, 188);
  color: white;
  padding: 20px;
  border-radius: 10px;
  box-shadow: 10px 10px 5px rgb(222, 116, 116);
  cursor: pointer;
`;

function Print() {
  // normal

  let Containerstyled = {
    backgroundColor: "pink",
    // color:"white"
    color: "red",
    display: "flex",
    gap: "20px",
  };
  let h1style = {
    color: "white",
    margin: "30px",
  };
  // also using styling libary like github style or style-components

  function printme(e) {
    console.log(e.target.innerText);
    console.log("hello");
  }
  function printme1(user) {
    console.log(user);
  }
  return (
    <div style={Containerstyled}>
      hii
      <h1 style={h1style}>hello</h1>
      <Button onClick={printme}>clickme</Button>
      <NewButton
        onClick={() => {
          printme1("sai");
        }}
      >
        clickme
      </NewButton>
    </div>
  );
}
export default Print;
