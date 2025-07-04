import { useState } from "react";

import { deepClone, mapStateToValues } from "../utils/relateObject";

const useForm = ({ init, validate }) => {
  const [state, setState] = useState(mapValuesToState(init));

  const handleChange = (e) => {
    const { name, value } = e.target;
    const oldState = deepClone(state);
    oldState[name].value = value;

    const { tmpState } = checkErrors(oldState, name);

    setState(tmpState);
  };

  const handleSubmit = (e, cb) => {
    e.preventDefault();

    const values = mapStateToValues(state, "value");
    const touched = mapStateToValues(state, "touched");
    const focused = mapStateToValues(state, "focused");
    const { errors, hasError } = validate(values);

    cb({ values, errors, hasError, touched, focused });
  };

  const handleFocus = (e) => {
    const { name } = e.target;
    const oldState = deepClone(state);

    oldState[name].focused = true;

    if (!oldState[name].touched) oldState[name].touched = true;

    setState(oldState);
  };

  const handleBlur = (e) => {
    const { name } = e.target;
    const oldState = deepClone(state);

    oldState[name].focused = false;

    const { tmpState } = checkErrors(oldState, name);

    setState(tmpState);
  };

  const checkErrors = (tmpState, name) => {
    const values = mapStateToValues(tmpState, "value");
    const { errors } = validate(values);

    if (tmpState[name].touched && errors[name]) {
      tmpState[name].error = errors[name];
    } else {
      tmpState[name].error = "";
    }

    return { tmpState };
  };

  return {
    state,
    handleChange,
    handleSubmit,
    handleFocus,
    handleBlur,
  };
};

export default useForm;

function mapValuesToState(values) {
  return Object.keys(values).reduce((acc, key) => {
    acc[key] = {
      value: values[key],
      error: "",
      touched: false,
      focused: false,
    };
    return acc;
  }, {});
}
