// src/StyledButton.tsx
import styled from 'styled-components';

interface NewButtonProps {
  primary?: boolean;
}

const NewStyledButton = styled.button<NewButtonProps>`
  background: ${props => (props.primary ? props.theme.colors.primary : props.theme.colors.secondary)};
  color: ${props => (props.primary ? props.theme.colors.secondary : props.theme.colors.primary)};
  font-size: ${props => props.theme.sizes.fontSize};
  margin: ${props => props.theme.sizes.margin};
  padding: ${props => props.theme.sizes.padding};
  border: 2px solid ${props => props.theme.colors.primary};
  border-radius: 3px;
`;

export default NewStyledButton;
