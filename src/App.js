import './App.css';
import Header from './Components/header';
import Page from './Components/page';

// load all of the child components
function App() {
  return (
    <div className="App">
      <Header /> 
      <Page />
    </div>
  );
}

export default App;
