import { Route, Routes } from 'react-router-dom';
import { useState } from 'react';
import './App.css';
import './App.module.css';
import Dashboard from './components/Dashboard/Dashboard';
import Header from './components/Header/Header';
import Library from './components/Library/Library';
import Games from './components/Games/Games';
import Learn from './components/Learn/Learn';

function App() {

  const [library, setLibrary] = useState(JSON.parse(localStorage.getItem('library')) || []);
  console.log(library);

  return (
    <div className="App">
      <Header/>
      <Routes>
        <Route path='/' element={<Dashboard/>}/>
        <Route path='/games' element={<Games/>}/>
        <Route library={library} setLibrary={setLibrary} path='/library' element={<Library/>}/>
        <Route path='/learn' element={<Learn/>}/>
      </Routes>
    </div>
  );
}

export default App;
