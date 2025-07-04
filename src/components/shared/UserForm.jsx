import { useState } from "react";
import Button from "../UI/Button";
import InputField from "../UI/InputField";
import useForm from "../../hooks/useForm";

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
  const { state, handleChange, handleSubmit } = useForm({ init });

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
