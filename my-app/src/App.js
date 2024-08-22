import './App.css';
import MethodsAsParent from './components/MethodsAsParent';
import MethodsAsPropsChild from './components/MethodsAsPropsChild';


function App() {
  return (
    <div className="App">
      <MethodsAsParent/>
      <MethodsAsPropsChild/>
    </div>
  );
}

export default App;
