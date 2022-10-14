import './App.css';
import Benefit from './components/Benefit';
import FormOptions from './components/FormOptions';
import Navbar from './components/Navbar';
import Partners from './components/Partners';
import StaticPanel from './components/StaticPanel';



function App() {
  return (
    <div className="App">
      <Navbar />
      <br />
      <br />
      <FormOptions />
      <StaticPanel />
      <Partners />
      <Benefit />
    </div>
  );
}

export default App;
