import Scrapping from './components/scrapping/Scrapping'
import NlpServices from './components/nlp/NlpServices'
import './App.css';

function App() {
  return (
    <div className="App">
      <div className="scrapping">
        <Scrapping />
      </div>
      <div className="nlp">
        <NlpServices />
      </div>
    </div>
  );
}

export default App;
