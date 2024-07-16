// src/StyledDropdown.tsx
import React, { useState } from 'react';
import styled from 'styled-components';

interface DropdownProps {
  label: string;
  options: string[];
  value: string;
  onChange: (event: React.ChangeEvent<HTMLSelectElement>) => void;
}

const DropdownWrapper = styled.div`
  display: flex;
  align-items: center;
  margin: 0.5em 0;
  position: relative;
`;

const StyledLabel = styled.label`
  margin-right: 0.5em;
  font-weight: bold;
`;

const StyledSelect = styled.select`
  padding: 0.5em 2em 0.5em 0.5em;
  border: 2px solid #ccc;
  border-radius: 4px;
  background: white;
  font-size: 1em;
  cursor: pointer;
  transition: border-color 0.2s;

  &:focus {
    border-color: #4CAF50;
    outline: none;
  }

  /* Style the dropdown arrow */
  appearance: none; /* Remove default arrow */
  background-image: url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="red" class="bi bi-chevron-down" viewBox="0 0 16 16"><path fill-rule="evenodd" d="M1.5 5.5a.5.5 0 0 1 .707 0L8 10.793l5.793-5.293a.5.5 0 0 1 .707.707l-6 6a.5.5 0 0 1-.707 0l-6-6a.5.5 0 0 1 0-.707z"/></svg>');
  background-repeat: no-repeat;
  background-position: right 0.5em center;
  background-size: 1em;
`;

const Dropdown: React.FC<DropdownProps> = ({ label, options, value, onChange }) => {
  const id = `dropdown-${label.replace(/\s+/g, '-')}`;

  return (
    <DropdownWrapper>
      <StyledLabel htmlFor={id}>{label}</StyledLabel>
      <StyledSelect id={id} value={value} onChange={onChange}>
        {options.map((option, index) => (
          <option key={index} value={option}>
            {option}
          </option>
        ))}
      </StyledSelect>
    </DropdownWrapper>
  );
};

export default Dropdown;
