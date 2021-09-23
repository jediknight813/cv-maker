import './App.css';
import Header from './Components/header';
import Page from './Components/page';
import Footer from './Components/footer'


// load all of the child components
function App() {
  return (
    <div className="App">
      <Header /> 
      <Page />
      <Footer />
    </div>
  );
}

export default App;
