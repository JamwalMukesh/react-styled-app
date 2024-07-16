import './App.css';
import StyledButton from './StyledButton';
import StyledInput from './StyledInput';

function App() {
  return (
    <div className="App">
    <header className="App-header">
      <StyledButton primary>Primary Button</StyledButton>
      <StyledButton>Secondary Button</StyledButton>
      <StyledInput size="2em" />
    </header>
  </div>
  );
}

export default App;
