import { useState } from "react";
import Button from "../UI/Button";
import InputField from "../UI/InputField";
import useForm from "../../hooks/useForm";

const init = {
  firstName: "",
  lastName: "",
  password: "",
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

const UserForm = () => {
  const { state, handleChange, handleSubmit, handleFocus, handleBlur } =
    useForm({ init, validate });

  const submitCallback = ({ values, errors, hasError }) => {
    if (hasError) {
      console.log("Errors ocured");
      console.log(errors);
    } else {
      console.log(values);
    }
  };

  return (
    <>
      <form
        onSubmit={(e) => {
          handleSubmit(e, submitCallback);
        }}
        style={{ display: "flex", flexDirection: "column", gap: "0.7rem" }}
      >
        <InputField
          label={"First Name"}
          type={"text"}
          name={"firstName"}
          value={state.firstName.value}
          error={state.firstName.error}
          onChange={handleChange}
          onFocus={handleFocus}
          onBlur={handleBlur}
        />
        <InputField
          label={"Last Name"}
          type={"text"}
          name={"lastName"}
          value={state.lastName.value}
          error={state.lastName.error}
          onChange={handleChange}
          onFocus={handleFocus}
          onBlur={handleBlur}
        />
        <InputField
          label={"Password"}
          type={"password"}
          name={"password"}
          value={state.password.value}
          error={state.password.error}
          onChange={handleChange}
          onFocus={handleFocus}
          onBlur={handleBlur}
        />
        <Button>Submit</Button>
      </form>
    </>
  );
};

export default UserForm;
