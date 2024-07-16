// src/StyledInput.tsx
import styled from 'styled-components';

interface NewInputProps {
  size?: string;
}

const NewStyledInput = styled.input.attrs<NewInputProps>(props => ({
  type: 'text',
  size: props.size || '1em',
}))<NewInputProps>`
  color: palevioletred;
  font-size: 1em;
  border: 2px solid palevioletred;
  border-radius: 3px;
  margin: ${props => props.size};
  padding: ${props => props.size};
`;

export default NewStyledInput;
