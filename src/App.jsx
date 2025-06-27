import styled from "styled-components";

import UserForm from "./components/shared/UserForm";

const CenteredDiv = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const App = () => {
  return (
    <CenteredDiv>
      <h2>Reusable Dynamic Form</h2>
      <div style={{ width: "20rem" }}>
        <UserForm />
      </div>
    </CenteredDiv>
  );
};

export default App;
