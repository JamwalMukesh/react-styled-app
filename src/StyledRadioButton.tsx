// src/StyledRadioButton.tsx
import React from 'react';
import styled from 'styled-components';

interface RadioButtonProps {
    label: string;
    name: string;
    value: string;
    checked: boolean;
    onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

const RadioWrapper = styled.div`
  display: flex;
  align-items: center;
  margin: 0.5em 0;
`;

const HiddenRadio = styled.input.attrs({ type: 'radio' })`
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

const StyledRadio = styled.div<{ checked: boolean }>`
  display: inline-block;
  width: 1.5em;
  height: 1.5em;
  background: ${props => (props.checked ? '#4CAF50' : '#fff')};
  border-radius: 50%;
  transition: all 150ms;
  border: 2px solid ${props => (props.checked ? '#4CAF50' : '#ccc')};
  cursor: pointer;

  ${HiddenRadio}:focus + & {
    box-shadow: 0 0 0 3px rgba(66, 153, 225, 0.6);
  }
`;

const RadioLabel = styled.label`
  margin-left: 0.5em;
  cursor: pointer;
`;

const RadioButton: React.FC<RadioButtonProps> = ({ label, name, value, checked, onChange }) => {
    const id = `${name}-${value}`;
    return (
        <RadioWrapper>
            <HiddenRadio id={id} name={name} value={value} checked={checked} onChange={onChange} />
            <StyledRadio checked={checked} />
            <RadioLabel htmlFor={id}>{label}</RadioLabel>
        </RadioWrapper>
    );
}

export default RadioButton;
