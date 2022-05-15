import "./App.css";
import AddWord from "./components/words/AddWord";
import WordsList from "./components/words/WordsList";

function App() {
  return (
    <div>
      <nav className="navbar navbar-dark bg-light">
        <a className="navbar-brand" href="/">
          Word Game
        </a>
      </nav>
      <AddWord></AddWord>
      <WordsList></WordsList>
    </div>
  );
}

export default App;
