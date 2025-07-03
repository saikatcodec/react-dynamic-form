import { useState } from "react";
import Button from "../UI/Button";
import InputField from "../UI/InputField";
import {
  deepClone,
  mapStateToValues,
  mapValuesToState,
} from "../../utils/relateObject";

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

    const { tmpState, hasError } = checkErrors(oldState);
    setState(tmpState);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const oldState = deepClone(state);

    const { tmpState, hasError } = checkErrors(oldState);
    setState(tmpState);

    if (!hasError) {
      console.log(state);
    } else {
      console.log("Error Occured!");
    }
  };

  const checkErrors = (tmpState) => {
    const values = mapStateToValues(tmpState, "value");
    const { errors, hasError } = validate(values);

    tmpState = mapValuesToState(tmpState, errors, "error");

    return { tmpState, hasError };
  };

  const validate = (values) => {
    const errors = {};
    const keys = Object.keys(values);
    let hasError = false;

    keys.forEach((key) => {
      if (values[key] === "") {
        errors[key] = `${key} field is required`;
        hasError = true;
      } else {
        errors[key] = "";
      }
    });

    return {
      errors,
      hasError,
    };
  };

  return (
    <>
      <form
        onSubmit={handleSubmit}
        style={{ display: "flex", flexDirection: "column", gap: "0.7rem" }}
      >
        <InputField
          label={"First Name"}
          type={"text"}
          name={"firstName"}
          value={state.firstName.value}
          error={state.firstName.error}
          onChange={handleChange}
        />
        <InputField
          label={"Last Name"}
          type={"text"}
          name={"lastName"}
          value={state.lastName.value}
          error={state.lastName.error}
          onChange={handleChange}
        />
        <InputField
          label={"Password"}
          type={"password"}
          name={"password"}
          value={state.password.value}
          error={state.password.error}
          onChange={handleChange}
        />
        <Button>Submit</Button>
      </form>
    </>
  );
};

export default UserForm;
