import { useState } from "react";
import Button from "../UI/Button";
import InputField from "../UI/InputField";
import { deepClone } from "../../utils/relateObject";

const init = {
  firstName: {
    value: "",
    error: "",
  },
  lastName: {
    value: "",
    error: "",
  },
  password: {
    value: "",
    error: "",
  },
};

const UserForm = () => {
  const [state, setState] = useState({ ...init });

  const handleChange = (e) => {
    const oldState = deepClone(state);
    oldState[e.target.name].value = e.target.value;

    setState(oldState);
  };

  return (
    <>
      <form>
        <InputField
          label={"First Name"}
          type={"text"}
          name={"firstName"}
          value={state.firstName.value}
          onChange={handleChange}
        />
        <InputField
          label={"Last Name"}
          type={"text"}
          name={"lastName"}
          value={state.lastName.value}
          onChange={handleChange}
        />
        <InputField
          label={"Password"}
          type={"password"}
          name={"password"}
          value={state.password.value}
          onChange={handleChange}
        />
        <Button>Submit</Button>
      </form>
    </>
  );
};

export default UserForm;
