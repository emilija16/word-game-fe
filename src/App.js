import "./App.css";
import AddWord from "./components/addWord";
import WordsList from "./components/wordsList";

function App() {
  return (
    <div>
      <nav className="navbar navbar-dark bg-light">
        <a className="navbar-brand" href="#">
          Word Game
        </a>
      </nav>
      <AddWord></AddWord>
      <WordsList />
    </div>
  );
}

export default App;
