import './App.css';
import Task from './components/Task';
import Habit from './components/Habit';
import styled from 'styled-components';

const StyledDiv = styled.div`
  background-color: brown;
  padding: 10px 10px;
`
const StyledH2 = styled.h2`
  text-align: center
`


function App() {
  return (
    <>
      <h1>Tasks, Habits and more!</h1>
      <StyledDiv>
        <StyledH2>Tasks</StyledH2>
        <Task/>
      </StyledDiv>
      <StyledDiv>
        <StyledH2>Habits</StyledH2>
        <Habit name="maintain beard"/>
        <Habit name="fragrance"/>
        <Habit name="exercise"/>
        <Habit name="read"/>
      </StyledDiv>
      
      
    </>
  );
}

export default App;
