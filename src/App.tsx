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
    </>
  );
}

export default App;
