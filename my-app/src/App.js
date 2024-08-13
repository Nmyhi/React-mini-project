import './App.css';
import FunctionalGreeting from './components/FunctionalGreeting';
import FunctionalGreetingWithProps from './components/FunctionalGreetingWithProps';
import StatefulGreeting from './components/StatefulGreeting';
import StatefulGreetingWithCallback from './components/StatefulGreetingsWithCallback';
import EventsFunctional from './components/EventsFunctional';
import EventsClass from './components/EventsClass';
import EventBinding from './components/EventBinding';

function App() {
  return (
    <div className="App">
    <FunctionalGreeting/>
    <FunctionalGreetingWithProps greeting="nice to meet you!!" name="Mike" age="32" />
    <StatefulGreeting greeting="I am a stateful class component!" name="Mish"/>
    <StatefulGreetingWithCallback/>
    <EventsFunctional/>
    <EventsClass/>
    <EventBinding/>
    </div>
  );
}

export default App;
