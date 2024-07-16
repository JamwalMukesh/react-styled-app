// src/StyledCheckbox.tsx
import React from 'react';
import styled from 'styled-components';

interface CheckboxProps {
  label: string;
  checked: boolean;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

const CheckboxWrapper = styled.div`
  display: flex;
  align-items: center;
  margin: 0.5em 0;
`;

const HiddenCheckbox = styled.input.attrs({ type: 'checkbox' })`
  border: 0;
  clip: rect(0, 0, 0, 0);
  clippath: inset(50%);
  height: 1px;
  margin: -1px;
  overflow: hidden;
  padding: 0;
  position: absolute;
  white-space: nowrap;
  width: 1px;
`;

const StyledCheckbox = styled.div<{ checked: boolean }>`
  display: inline-block;
  width: 1.5em;
  height: 1.5em;
  background: ${props => (props.checked ? '#4CAF50' : '#fff')};
  border-radius: 3px;
  transition: all 150ms;
  border: 2px solid ${props => (props.checked ? '#4CAF50' : '#ccc')};
  cursor: pointer;
  position: relative;

  ${HiddenCheckbox}:focus + & {
    box-shadow: 0 0 0 3px rgba(66, 153, 225, 0.6);
  }

  &::after {
    content: '';
    position: absolute;
    display: ${props => (props.checked ? 'block' : 'none')};
    left: 0.35em;
    top: 0.1em;
    width: 0.3em;
    height: 0.6em;
    border: solid white;
    border-width: 0 0.2em 0.2em 0;
    transform: rotate(45deg);
  }
`;

const CheckboxLabel = styled.label`
  margin-left: 0.5em;
  cursor: pointer;
`;

const Checkbox: React.FC<CheckboxProps> = ({ label, checked, onChange }) => {
  const id = `checkbox-${label.replace(/\s+/g, '-')}`;

  return (
    <CheckboxWrapper>
      <HiddenCheckbox id={id} checked={checked} onChange={onChange} />
      <StyledCheckbox checked={checked} />
      <CheckboxLabel htmlFor={id}>{label}</CheckboxLabel>
    </CheckboxWrapper>
  );
};

export default Checkbox;
