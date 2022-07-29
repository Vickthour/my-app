import './App.css';

import Header from './components/section/header';

const img = "https://picsum.photos/200/300";

function App() {
  return (
    <div className="App">
      <Header />
      <h1>The game begins</h1>
      <img className='App-logo' src={img} alt='logo' />
    </div>
  );
}

export default App;
