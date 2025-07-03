import styled from "styled-components";
import PropTypes from "prop-types";

const Input = styled.input`
  border: 1px solid #002e4a;
  outline: none;
  border-radius: 0.2rem;
  padding: 0.3rem 0.6rem;
`;

const Error = styled.label`
  font-size: 0.8rem;
  color: #f00;
`;

const InputField = ({
  label,
  name,
  type,
  placeholder,
  value,
  error,
  onChange,
  onBlur,
  onFocus,
}) => {
  return (
    <div style={{ display: "flex", flexDirection: "column", gap: "0.3rem" }}>
      <label htmlFor={name}>{label}</label>
      <Input
        name={name}
        type={type}
        id={name}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        onBlur={onBlur}
        onFocus={onFocus}
      />
      <Error> {error} </Error>
    </div>
  );
};

InputField.propTypes = {
  label: PropTypes.string,
  name: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  placeholder: PropTypes.string,
  value: PropTypes.string.isRequired,
  error: PropTypes.string,
  onChange: PropTypes.func.isRequired,
  onBlur: PropTypes.func,
  onFocus: PropTypes.func,
};

export default InputField;
