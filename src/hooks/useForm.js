import { useState } from "react";

import {
  deepClone,
  mapStateToValues,
  mapValuesToState,
} from "../utils/relateObject";

const useForm = ({ init }) => {
  const [state, setState] = useState({ ...init });

  const handleChange = (e) => {
    const oldState = deepClone(state);
    oldState[e.target.name].value = e.target.value;

    const { tmpState } = checkErrors(oldState);
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

  return {
    state,
    handleChange,
    handleSubmit,
  };
};

export default useForm;
