import PropTypes from "prop-types";
import * as Styled from "./ButtonAction.styles";

export const ButtonAction = ({ icon, iconBackground, iconColor, text, textColor, hoverBackground, onClick }) => {
  return (
    <Styled.ButtonWrapper
      iconBackground={iconBackground}
      textColor={textColor}
      hoverBackground={hoverBackground}
      onClick={onClick}
    >
      <Styled.ButtonIcon iconColor={iconColor}>{icon}</Styled.ButtonIcon>
      <Styled.ButtonText>{text}</Styled.ButtonText>
    </Styled.ButtonWrapper>
  );
};

ButtonAction.propTypes = {
  icon: PropTypes.node.isRequired,
  iconBackground: PropTypes.string,
  iconColor: PropTypes.string,
  text: PropTypes.string.isRequired,
  textColor: PropTypes.string,
  hoverBackground: PropTypes.string,
  hoverColor: PropTypes.string,
  onClick: PropTypes.func,
};