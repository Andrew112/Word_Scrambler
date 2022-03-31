import './App.css';

import Home from './pages/Home';
import { WordContextProvider } from './context/WordContext';

function App() {
  return (
    <div className="App">
      <WordContextProvider>
        <Home/>
      </WordContextProvider>
    </div>
  );
}

export default App;