import ladyLogo from './logoText.png';
import './App.css';
import NavBar from './components/NavBar'
import { ItemListContainer } from './components/ItemListContainer';

function App() {
  return (
    <div>
      <NavBar/>
      <header className="App-header">
        <img src={ladyLogo} className="App-logo" alt="logo" />
      </header>
    </div>
  );
}

export default App;
