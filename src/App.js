import Scraping from './components/scraping/Scraping'
import NlpServices from './components/nlp/NlpServices'
import './App.css';
import SentimentFakeContainer from './components/otherservices/SentimentFakeContainer';

function App() {
  return (
    <div className="App">
      <section className="sent-fake">
        <SentimentFakeContainer />
      </section>
      <section className="scrapping">
        <Scraping />
      </section>
      <section className="nlp">
        <NlpServices />
      </section>
    </div>
  );
}

export default App;
