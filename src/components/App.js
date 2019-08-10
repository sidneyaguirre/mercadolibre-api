import React from 'react';
import '../App.css';
import Search from '../components/Search'
import Navbar from '../components/Navbar'

function App() {
  return (
    <div className="App">
      <div>
        <Navbar />
      </div>
      <div>
      <Search />
      </div>
    </div>
  );
}

export default App;
