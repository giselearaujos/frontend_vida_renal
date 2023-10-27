import * as Styled from "./CustomInput.style";
import PropTypes from "prop-types";

export const CustomInput = ({ bg, width,placeholder, value, onChange }) => {
  return (
    <Styled.InputWrapper
      type="text"
      bg={bg}
      width={width}
      placeholder={placeholder}
      value={value}
      onChange={onChange}
    />
  );
};

CustomInput.propTypes = {
  bg: PropTypes.string,
  width: PropTypes.string,
  placeholder: PropTypes.string,
  value: PropTypes.string,
  onChange: PropTypes.func,
};

