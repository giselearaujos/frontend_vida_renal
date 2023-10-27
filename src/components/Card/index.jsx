import PropTypes from "prop-types";
import * as Styled from './Card.styles';

export const Card = ({ imageSrc, text }) => {
  return (
    <Styled.CardContainer>
      <Styled.CardImage src={imageSrc} alt="Imagem do Card" />
      <Styled.CardText>{text}</Styled.CardText>
    </Styled.CardContainer>
  );
};

Card.propTypes = {
  imageSrc: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired, 
};
