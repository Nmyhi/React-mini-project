import './App.css';
import FunctionalGreeting from './components/FunctionalGreeting';
import FunctionalGreetingWithProps from './components/FunctionalGreetingWithProps';
import StatefulGreeting from './components/StatefulGreeting';

function App() {
  return (
    <div className="App">
      <FunctionalGreeting/>
      <FunctionalGreetingWithProps greeting="nice to meet you!!" name="Mike" age="32" />
      <StatefulGreeting greeting="I am a stateful class component!" name="Mish"/>
    </div>
  );
}

export default App;
