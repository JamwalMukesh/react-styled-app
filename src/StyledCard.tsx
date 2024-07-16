// src/StyledCard.tsx
import styled from 'styled-components';

const StyledCard = styled.div`
  background: ${props => props.theme.colors.cardBackground};
  color: ${props => props.theme.colors.text};
  padding: ${props => props.theme.sizes.padding};
  margin: ${props => props.theme.sizes.margin};
  border-radius: ${props => props.theme.sizes.borderRadius};
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  transition: box-shadow 0.3s;

  &:hover {
    box-shadow: 0 8px 16px rgba(0, 0, 0, 0.2);
  }
`;

export default StyledCard;
