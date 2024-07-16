import { useState } from 'react';
import './App.css';
import StyledButton from './StyledButton';
import StyledInput from './StyledInput';
import { lightTheme, darkTheme } from './theme';
import styled, { ThemeProvider } from 'styled-components';
import NewStyledButton from './NewStyledButton';
import NewStyledInput from './NewStyledInput';
import StyledCard from './StyledCard';
import { GlobalStyle } from './GlobalStyle';
import RadioButton from './StyledRadioButton';
import Checkbox from './StyledCheckbox';
import Dropdown from './StyledDropdown';

const AppWrapper = styled.div`
  background-color: ${props => props.theme.colors.background};
  color: ${props => props.theme.colors.text};
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;



function App() {

  const [theme, setTheme] = useState(lightTheme);

  const toggleTheme = () => {
    setTheme(theme === lightTheme ? darkTheme : lightTheme);
  };

  const [selectedValue, setSelectedValue] = useState('option1');

  const handleRadioChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSelectedValue(event.target.value);
    console.log(event.target.value);
  };

  const [checkedItems, setCheckedItems] = useState<{ [key: string]: boolean }>({
    item1: false,
    item2: false,
    item3: false,
  });

  const handleCheckboxChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { id, checked } = event.target;
    setCheckedItems(prevState => ({
      ...prevState,
      [id]: checked,
    }));
  };

  const [selectedOption, setSelectedOption] = useState('Option 1');
  const options = ['Option 1', 'Option 2', 'Option 3'];

  const handleDropdownChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedOption(event.target.value);
  };

  return (
    <>
      <div className="App">
        <header className="App-header">
          <StyledButton primary>Primary Button</StyledButton>
          <StyledButton>Secondary Button</StyledButton>
          <StyledInput size="2em" />
        </header>
      </div>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <AppWrapper>
          <NewStyledButton primary onClick={toggleTheme}>
            Toggle Theme
          </NewStyledButton>
          <NewStyledButton>Secondary Button</NewStyledButton>
          <NewStyledInput size="2em" />
          <StyledCard>
            <h2>Styled Card</h2>
            <p>This is a card component styled with styled-components.</p>
          </StyledCard>
        </AppWrapper>
      </ThemeProvider>
      <div style={{ padding: '2rem' }}>
        <h1>Styled Radio Buttons</h1>
        <form>
          <RadioButton
            label="Option 1"
            name="options"
            value="option1"
            checked={selectedValue === 'option1'}
            onChange={handleRadioChange}
          />
          <RadioButton
            label="Option 2"
            name="options"
            value="option2"
            checked={selectedValue === 'option2'}
            onChange={handleRadioChange}
          />
          <RadioButton
            label="Option 3"
            name="options"
            value="option3"
            checked={selectedValue === 'option3'}
            onChange={handleRadioChange}
          />
          <h1>Check box items</h1>
          <Checkbox
            label="Item 1"
            checked={checkedItems['checkbox-Item-1']}
            onChange={handleCheckboxChange}
          />
          <Checkbox
            label="Item 2"
            checked={checkedItems['checkbox-Item-2']}
            onChange={handleCheckboxChange}
          />
          <Checkbox
            label="Item 3"
            checked={checkedItems['checkbox-Item-3']}
            onChange={handleCheckboxChange}
          />
          <Dropdown
            label="Select an option"
            options={options}
            value={selectedOption}
            onChange={handleDropdownChange}
          />
        </form>
      </div>
    </>
  );
}

export default App;
