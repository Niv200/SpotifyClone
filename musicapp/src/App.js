import logo from './logo.svg';
import './App.css';
import Song from './components/Song';

function App() {
  return (
    <div className="App">
      <Song 
      name = "song name"
      artist = "song artist"
      album = "song album"
      length = "3:00"
      link = "https://www.youtube.com/embed/YmynMyn8o6E"
      lyrics = "lyrics lyrics lyrics bla bla bla"
      />
    </div>
  );
}

export default App;
