// src/StyledInput.tsx
import styled from 'styled-components';

interface InputProps {
    size?: string;
  }

const StyledInput = styled.input.attrs<InputProps>(props => ({
  type: 'text',
  size: props.size || '1em',
}))<InputProps>`
  color: palevioletred;
  font-size: 1em;
  border: 2px solid palevioletred;
  border-radius: 3px;
  margin: ${props => props.size};
  padding: ${props => props.size};
`;

export default StyledInput;
